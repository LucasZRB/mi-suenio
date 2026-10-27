import styled from 'styled-components';

export const SideCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme, $type }) => $type === "rosa" ? theme.colors.rosaPardo : theme.colors.oro};
  border-radius: 40px;
  flex: 1;
  display: flex;
  align-items: center;
  padding: 20px 30px;
  text-align: left;
  box-shadow: ${({ theme }) => theme.shadows?.sm || '0 4px 6px rgba(0,0,0,0.02)'};
`;

export const IconSection = styled.div`
  background-color: ${({ theme, $type }) => $type === "rosa" ? theme.colors.rosaPardo : theme.colors.oro};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 20px;
  min-width: 50px;
  min-height: 50px;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    color: ${({ theme, $type }) => $type === "rosa" ? theme.colors.rosaPardo : theme.colors.oro};
    font-size: 1.2rem;
    margin-bottom: 4px;
    font-family: ${({ theme }) => theme.fonts.title};
  }

  p {
    color: ${({ theme, $type }) => $type === "rosa" ? theme.colors.rosaPardo : theme.colors.oro};
    font-size: 0.9rem;
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 600;
    margin: 0;
  }
`;
