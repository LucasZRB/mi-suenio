import { useLocation } from 'wouter';
import { NavLinksContainer, StyledLink, CtaButton } from './Navbar.styles';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Contactos', path: '/productos' },
];

export const NavLinks = ({ closeMenu }) => {
  const [location] = useLocation();

  return (
    <>
      <NavLinksContainer>
        {navItems.map((item, index) => (
          <StyledLink 
            key={index} 
            href={item.path} 
            $isActive={location === item.path} 
            onClick={closeMenu}
          >
            {item.name}
          </StyledLink>
        ))}
      </NavLinksContainer>

      {/* CTA Llamativo final */}
      <CtaButton href="/#contacto" onClick={closeMenu}>
        Promociones
      </CtaButton>
    </>
  );
};
