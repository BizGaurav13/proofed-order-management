import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`;

export const TableHeader = styled.thead`
  background-color: #f8f9fa;
`;

export const HeaderRow = styled.tr`
  border-bottom: 2px solid #e9ecef;
`;

export const HeaderCell = styled.th`
  padding: 16px 12px;
  text-align: left;
  font-weight: 600;
  color: #495057;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TableBody = styled.tbody``;

export const DataRow = styled.tr`
  border-bottom: 1px solid #e9ecef;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const DataCell = styled.td`
  padding: 16px 12px;
  color: #495057;
  font-size: 14px;
`;

export const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;
  background-color: ${props => {
    switch (props.status) {
      case 'in queue':
        return '#e3f2fd';
      case 'on hold':
        return '#fff3e0';
      case 'offer':
        return '#f3e5f5';
      case 'assign':
        return '#e8f5e8';
      default:
        return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'in queue':
        return '#1976d2';
      case 'on hold':
        return '#f57c00';
      case 'offer':
        return '#7b1fa2';
      case 'assign':
        return '#388e3c';
      default:
        return '#616161';
    }
  }};
`;

export const JobBadge = styled.span<{ jobType: string }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${props => {
    switch (props.jobType) {
      case 'Service':
        return '#e8f5e8';
      case 'Review':
        return '#e3f2fd';
      case 'Return':
        return '#fff3e0';
      default:
        return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch (props.jobType) {
      case 'Service':
        return '#388e3c';
      case 'Review':
        return '#1976d2';
      case 'Return':
        return '#f57c00';
      default:
        return '#616161';
    }
  }};
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  color: #6c757d;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  color: #dc3545;
  background-color: #f8d7da;
  border-radius: 8px;
  margin: 16px;
`;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  color: #6c757d;
`;

export const TimeRemaining = styled.span<{ $isOverdue?: boolean }>`
  color: ${props => props.$isOverdue ? '#dc3545' : 'inherit'};
  font-weight: ${props => props.$isOverdue ? '600' : 'inherit'};
`;