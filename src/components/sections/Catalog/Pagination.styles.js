import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const PageButton = styled.button`
  background-color: ${({ $active, theme }) => 
    $active ? theme.colors.rosaPardo : theme.colors.white};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.white : theme.colors.marronOscuro};
  border: 1px solid ${({ theme }) => theme.colors.rosaPardo};
  padding: 8px 14px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.rosaPardoHover};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.marronClaro};
  }
`;
