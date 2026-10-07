import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faBars, faXmark, faHouse, faStore } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Se cierra el menú al hacer clic afuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <NavContainer>
      <LogoContainer>
        <FontAwesomeIcon icon={faShop} />
        <span>NUESTRA TIENDA</span>
      </LogoContainer>
      
      {/* Botón de Hamburguesa - Solo visible en pantallas Mobile */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </Hamburger>

      {/* Backdrop (Fondo oscuro) para detectar el toque afuera del menú */}
      <Backdrop $show={isOpen} />

      {/* Contenedor de Enlaces (Menú estándar o Lateral según pantalla) */}
      <NavMenu ref={menuRef} $isOpen={isOpen}>
        <NavLinks>
          <StyledLink href="/" $isActive={location === '/'} onClick={closeMenu}>
            <FontAwesomeIcon icon={faHouse} /> Inicio
          </StyledLink>
          <StyledLink href="/productos" $isActive={location === '/productos'} onClick={closeMenu}>
            <FontAwesomeIcon icon={faStore} /> Productos
          </StyledLink>
        </NavLinks>

        {/* CTA Llamativo final */}
        <CtaButton href="/#contacto" onClick={closeMenu}>
          ¡Visítanos Hoy!
        </CtaButton>
      </NavMenu>
    </NavContainer>
  );
}

// --- COMPONENTES ESTILIZADOS ---

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: ${props => props.theme.colors.marronOscuro};
  color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.black30};
  position: relative;
  z-index: 100;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${props => props.theme.fonts.title};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: bold;
  color: ${props => props.theme.colors.oro};
  svg { font-size: ${props => props.theme.fontSizes.xl}; }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xl};
  cursor: pointer;

  ${props => props.theme.breakpoints.tablet} {
    display: block;
    z-index: 102;
  }
`;

const Backdrop = styled.div`
  display: none;
  ${props => props.theme.breakpoints.tablet} {
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

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  ${props => props.theme.breakpoints.tablet} {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%; /* Ocupa la mitad de la pantalla */
    height: 100vh;
    background-color: ${props => props.theme.colors.marronOscuro};
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 30px;
    gap: 30px;
    z-index: 101;
    box-shadow: ${props => props.theme.shadows.black30};
    
    /* Animación derecha a izquierda / izquierda a derecha */
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  ${props => props.theme.breakpoints.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.$isActive ? props.theme.colors.oro : props.theme.colors.white};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? 'bold' : 'normal'};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.rosaPardo};
  }
`;

const CtaButton = styled.a`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xs};
  background-color: ${props => props.theme.colors.oro};
  color: ${props => props.theme.colors.marronOscuro};
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  box-shadow: ${props => props.theme.shadows.oro20};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.rosaPardo};
    color: ${props => props.theme.colors.white};
    box-shadow: ${props => props.theme.shadows.rosa50};
    transform: translateY(-2px);
  }

  ${props => props.theme.breakpoints.tablet} {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
`;
