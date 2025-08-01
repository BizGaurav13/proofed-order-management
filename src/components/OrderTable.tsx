import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { OrdersApiResponse } from '@/types/order';
import { calculateTimeRemaining } from '@/utils/helper';
import {
  TableContainer,
  Table,
  TableHeader,
  HeaderRow,
  HeaderCell,
  TableBody,
  DataRow,
  DataCell,
  StatusBadge,
  JobBadge,
  LoadingContainer,
  ErrorContainer,
  EmptyContainer
} from './styles/orderTable.styles';

// Fetch orders function
const fetchOrders = async (page: number = 1, limit: number = 10): Promise<OrdersApiResponse> => {
  const response = await fetch(`/api/orders?page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

interface OrderTableProps {
  page?: number;
  limit?: number;
}

const OrderTable: React.FC<OrderTableProps> = ({ page = 1, limit = 10 }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['orders', page, limit],
    queryFn: () => fetchOrders(page, limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });

  if (isLoading) {
    return (
      <TableContainer>
        <LoadingContainer>Loading orders...</LoadingContainer>
      </TableContainer>
    );
  }

  if (error) {
    return (
      <TableContainer>
        <ErrorContainer>
          Error loading orders: {error instanceof Error ? error.message : 'Unknown error'}
        </ErrorContainer>
      </TableContainer>
    );
  }

  if (!data?.data?.items?.length) {
    return (
      <TableContainer>
        <EmptyContainer>No orders found</EmptyContainer>
      </TableContainer>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <HeaderRow>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Customer</HeaderCell>
            <HeaderCell>Content Size</HeaderCell>
            <HeaderCell>Current Job</HeaderCell>
            <HeaderCell>Time Remaining</HeaderCell>
            <HeaderCell>Status</HeaderCell>
          </HeaderRow>
        </TableHeader>
        <TableBody>
          {data.data.items.map((order) => (
            <DataRow key={order.id}>
              <DataCell>#{order.id}</DataCell>
              <DataCell>{order.customerName}</DataCell>
              <DataCell>{order.contentSize.toLocaleString()}</DataCell>
              <DataCell>
                <JobBadge jobType={order.currentJob}>{order.currentJob}</JobBadge>
              </DataCell>
              <DataCell>{calculateTimeRemaining(order.dueDateTime)}</DataCell>
              <DataCell>
                <StatusBadge status={order.status}>{order.status}</StatusBadge>
              </DataCell>
            </DataRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;