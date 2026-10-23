import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 64px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.rosa20b};
  border-bottom: 1px solid ${({ theme }) => theme.colors.rosaPardo};
  position: relative;
  z-index: 100;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 16px 32px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 16px 16px;
  }
`;

export const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.marronOscuro};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.mobile} {
    display: block;
    z-index: 102;
  }
`;

export const Backdrop = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoints.mobile} {
    display: ${({ $show }) => $show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 100;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;

  ${({ theme }) => theme.breakpoints.mobile} {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 30px;
    gap: 20px;
    z-index: 101;
    box-shadow: ${({ theme }) => theme.shadows.black30};
    /* Animación derecha a izquierda / izquierda a derecha */
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 64px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;
