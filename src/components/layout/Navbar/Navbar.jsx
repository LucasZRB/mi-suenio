import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavContainer, Hamburger, Backdrop, NavMenu } from './Navbar.styles';
import { Logo } from '../../common/Logo';
import { NavLinks } from './NavLinks';
import { css } from 'styled-components';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Se cierra el menú al hacer click afuera
  useEffect(() => {
    function handleClickOutside(event) {
      // Si el menú está abierto y el click no fue ni en el menú ni en el botón hamburguesa
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <NavContainer>
      <Logo
        $customStyles={css`
          color: ${props => props.theme.colors.marronOscuro};
          cursor: pointer;
        `}
      />
      
      {/* Botón Hamburguesa */}
      <Hamburger ref={hamburgerRef} onClick={toggleMenu} aria-label="Abrir menú">
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </Hamburger>

      {/* Backdrop */}
      <Backdrop $show={isOpen} />

      {/* Menú de navegación móvil y desktop */}
      <NavMenu ref={menuRef} $isOpen={isOpen}>
        <NavLinks closeMenu={closeMenu} />
      </NavMenu>
    </NavContainer>
  );
}
