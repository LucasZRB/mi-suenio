import styled from 'styled-components';
import { Link } from 'wouter';

export const CustomLink = ({ href, children, $isActive, onClick }) => {
  return (
    <StyledLink href={href} $isActive={$isActive} onClick={onClick}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ $isActive, theme }) => $isActive ? theme.colors.rosaPardo : theme.colors.marronOscuro};
  text-decoration: none;
  font-weight: ${({ $isActive }) => $isActive ? 'bold' : 'normal'};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.oro};
  }
`;
