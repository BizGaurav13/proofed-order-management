import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import OrderTable from './OrderTable';
import { OrdersApiResponse } from '@/types/order';
import {
  DashboardContainer,
  Header,
  Title,
  Subtitle,
  TableSection,
  SectionHeader,
  SectionTitle,
  PaginationContainer,
  PaginationWrapper,
  PaginationButton,
  EllipsisSpan,
  ItemsPerPageContainer,
  ItemsPerPageSelect
} from './styles/dashboard.styles';

// Fetch orders function for pagination data
const fetchOrdersForPagination = async (page: number = 1, limit: number = 10): Promise<OrdersApiResponse> => {
  const response = await fetch(`/api/orders?page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  
  // Fetch pagination data
  const { data: paginationData } = useQuery({
    queryKey: ['orders-pagination', currentPage, pageSize],
    queryFn: () => fetchOrdersForPagination(currentPage, pageSize),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  const totalPages = paginationData?.data?.pagination?.totalPages || 1;

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPageSize = parseInt(event.target.value);
    setPageSize(newPageSize);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 2; // Number of pages to show on each side of current page
    
    if (totalPages <= 7) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > delta + 2) {
        pages.push('...');
      }
      
      // Show pages around current page
      const start = Math.max(2, currentPage - delta);
      const end = Math.min(totalPages - 1, currentPage + delta);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - delta - 1) {
        pages.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
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
        </SectionHeader>

        <OrderTable page={currentPage} limit={pageSize} />

        <PaginationContainer>
          <PaginationWrapper>
            <PaginationButton
              onClick={handlePreviousPage}
              disabled={currentPage <= 1}
            >
              &#8249;
            </PaginationButton>
            
            {generatePageNumbers().map((page, index) => (
              typeof page === 'number' ? (
                <PaginationButton
                  key={page}
                  onClick={() => handlePageClick(page)}
                  $active={currentPage === page}
                >
                  {page}
                </PaginationButton>
              ) : (
                <EllipsisSpan key={`ellipsis-${index}`}>
                  {page}
                </EllipsisSpan>
              )
            ))}
            
            <PaginationButton
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
            >
              &#8250;
            </PaginationButton>
          </PaginationWrapper>
          
          <ItemsPerPageContainer>
            <ItemsPerPageSelect
              value={pageSize}
              onChange={handlePageSizeChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </ItemsPerPageSelect>
            <span>/ page</span>
          </ItemsPerPageContainer>
        </PaginationContainer>
      </TableSection>
    </DashboardContainer>
  );
};

export default Dashboard;