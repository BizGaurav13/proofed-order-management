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

export const Controls = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  background: white;
  color: #495057;
  font-size: 14px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #495057;
  font-weight: 500;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e9ecef;
`;

export const PaginationInfo = styled.div`
  color: #6c757d;
  font-size: 14px;
`;

export const PaginationControls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  padding: 8px 16px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  background: ${props => props.disabled ? '#f8f9fa' : 'white'};
  color: ${props => props.disabled ? '#adb5bd' : '#495057'};
  font-size: 14px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #e9ecef;
    border-color: #adb5bd;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const PageInput = styled.input`
  width: 60px;
  padding: 8px;
  text-align: center;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;