import styled from 'styled-components';

export const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

export const Header = styled.header`
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  color: #212529;
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

export const Subtitle = styled.p`
  color: #6c757d;
  font-size: 16px;
  margin: 0;
`;

export const TableSection = styled.section`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  color: #212529;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;



export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e9ecef;
  gap: 16px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8f9fb;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #e1e5e9;
`;

export const PaginationButton = styled.button<{ disabled?: boolean; $active?: boolean }>`
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background: ${props => 
    props.$active ? '#007bff' : 
    props.disabled ? 'transparent' : 
    'white'
  };
  color: ${props => 
    props.$active ? 'white' : 
    props.disabled ? '#adb5bd' : 
    '#495057'
  };
  font-size: 14px;
  font-weight: ${props => props.$active ? '600' : '400'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  box-shadow: ${props => props.$active ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.05)'};

  &:hover:not(:disabled) {
    background-color: ${props => props.$active ? '#0056b3' : '#e9f4ff'};
    color: ${props => props.$active ? 'white' : '#007bff'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const EllipsisSpan = styled.span`
  padding: 0 4px;
  color: #6c757d;
  font-size: 14px;
`;

export const ItemsPerPageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #495057;
`;

export const ItemsPerPageSelect = styled.select`
  padding: 6px 24px 6px 8px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  background: white;
  color: #495057;
  font-size: 14px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 8px center;
  background-repeat: no-repeat;
  background-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;