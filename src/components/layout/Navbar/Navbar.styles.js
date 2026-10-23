import styled from 'styled-components';
import { Link } from 'wouter';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 64px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.rosa20b};
  border-bottom: 1px solid ${props => props.theme.colors.rosaPardo};
  position: relative;
  z-index: 100;

  ${props => props.theme.breakpoints.tablet} {
    padding: 16px 32px;
  }

  ${props => props.theme.breakpoints.mobile} {
    padding: 16px 16px;
  }
`;

export const LogoWrapper = styled.div`
  font-family: ${props => props.theme.fonts.title};
  /* No se ve mal de esta forma, pero comparálo por las dudas
  a ver si mantenemos este o dejamos el que elejiste */
  /* font-size: ${props => props.theme.fontSizes.lg};
  font-weight: bold; */
  font-size: ${props => props.theme.fontSizes.xl};
  /* Sección para inyectar bloques de CSS adicionales directamente
  y detectar cuando es una fución (útil para cuando necesitamos inyectar props)
  Creeme, es útil a futuro xd */
  ${(props) => typeof props.$customStyles === 'function' 
    ? props.$customStyles(props) 
    : props.$customStyles}
`;

export const LogoLink = styled(Link)`
  color: ${props => props.theme.colors.marronOscuro};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.rosaPardo};
  }
`;

export const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.marronOscuro};
  font-size: ${props => props.theme.fontSizes.xl};
  cursor: pointer;

  ${props => props.theme.breakpoints.mobile} {
    display: block;
    z-index: 102;
  }
`;

export const Backdrop = styled.div`
  display: none;
  ${props => props.theme.breakpoints.mobile} {
    display: ${props => props.$show ? 'block' : 'none'};
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

  ${props => props.theme.breakpoints.mobile} {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    background-color: ${props => props.theme.colors.white};
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 30px;
    gap: 20px;
    z-index: 101;
    box-shadow: ${props => props.theme.shadows.black30};
    /* Animación derecha a izquierda / izquierda a derecha */
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 64px;

  ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
`;

export const StyledLink = styled(Link)`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.$isActive ? props.theme.colors.rosaPardo : props.theme.colors.marronOscuro};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? 'bold' : 'normal'};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.oro};
  }

  /* Si se usa en modo link plano dentro de mobile para el CTA */
  ${props => props.$isMobilePlain && `
    font-size: ${props.theme.fontSizes.sm};
    color: ${props.theme.colors.marronOscuro};
    font-weight: normal;
    padding: 0;
    background: none;
    box-shadow: none;
    &:hover {
      color: ${props.theme.colors.oro};
      transform: none;
    }
  `}
`;

export const CtaButton = styled.a`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xs};
  background-color: ${props => props.theme.colors.rosaPardo};
  color: ${props => props.theme.colors.white};
  padding: 16px 32px;
  border-radius: 32px;
  /* Este también, comprueba si te gusta más con
  o sin el bold */
  font-weight: bold;
  text-decoration: none;
  box-shadow: ${props => props.theme.shadows.rosa20};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.rosaPardo};
    box-shadow: ${props => props.theme.shadows.black30};
    transform: translateY(-2px);
  }

  ${props => props.theme.breakpoints.tablet} {
    width: 100%;
    text-align: center;
  }

  /* Comportamiento específico en Mobile: pasa a ser un link plano acorde al resto */
  ${props => props.theme.breakpoints.mobile} {
    background-color: transparent;
    color: ${props => props.theme.colors.marronOscuro};
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    font-size: ${props => props.theme.fontSizes.sm};
    font-weight: normal;
    width: 100%;
    text-align: center;

    &:hover {
      background-color: transparent;
      color: ${props => props.theme.colors.oro};
      box-shadow: none;
      transform: none;
    }
  }
`;
