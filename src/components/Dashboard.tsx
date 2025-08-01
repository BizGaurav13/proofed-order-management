import React, { useState } from 'react';
import OrderTable from './OrderTable';
import {
  DashboardContainer,
  Header,
  Title,
  Subtitle,
  TableSection,
  SectionHeader,
  SectionTitle,
  Controls,
  Select,
  Label,
  PaginationContainer,
  PaginationInfo,
  PaginationControls,
  PaginationButton,
  PageInput
} from './styles/dashboard.styles';

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [inputPage, setInputPage] = useState(currentPage.toString());

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPageSize = parseInt(event.target.value);
    setPageSize(newPageSize);
    setCurrentPage(1);
    setInputPage('1');
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      setInputPage(newPage.toString());
    }
  };

  const handleNextPage = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    setInputPage(newPage.toString());
  };

  const handlePageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPage(event.target.value);
  };

  const handlePageInputSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const pageNumber = parseInt(inputPage);
    if (!isNaN(pageNumber) && pageNumber > 0) {
      setCurrentPage(pageNumber);
    } else {
      setInputPage(currentPage.toString());
    }
  };

  return (
    <DashboardContainer>
      <Header>
        <Title>Order Management Dashboard</Title>
        <Subtitle>Manage and track all orders in one place</Subtitle>
      </Header>

      <TableSection>
        <SectionHeader>
          <SectionTitle>Orders</SectionTitle>
          <Controls>
            <Label htmlFor="pageSize">Show:</Label>
            <Select
              id="pageSize"
              value={pageSize}
              onChange={handlePageSizeChange}
            >
              <option value={5}>5 per page</option>
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
            </Select>
          </Controls>
        </SectionHeader>

        <OrderTable page={currentPage} limit={pageSize} />

        <PaginationContainer>
          <PaginationInfo>
            Page {currentPage} • Showing {pageSize} items per page
          </PaginationInfo>
          
          <PaginationControls>
            <PaginationButton
              onClick={handlePreviousPage}
              disabled={currentPage <= 1}
            >
              Previous
            </PaginationButton>
            
            <form onSubmit={handlePageInputSubmit} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px', color: '#6c757d' }}>Page</span>
              <PageInput
                type="number"
                min="1"
                value={inputPage}
                onChange={handlePageInputChange}
                onBlur={handlePageInputSubmit}
              />
            </form>
            
            <PaginationButton onClick={handleNextPage}>
              Next
            </PaginationButton>
          </PaginationControls>
        </PaginationContainer>
      </TableSection>
    </DashboardContainer>
  );
};

export default Dashboard;