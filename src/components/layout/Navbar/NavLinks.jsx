import { useLocation } from 'wouter';
import { NavLinksContainer } from './Navbar.styles';
import { CustomLink } from '../../common/CustomLink';
import { Button } from '../../common/Button';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Contactos', path: '/productos' },
];

export const NavLinks = ({ closeMenu }) => {
  const [location] = useLocation();

  return (
    <NavLinksContainer>
      {navItems.map((item, index) => (
        <CustomLink 
          key={index} 
          href={item.path} 
          $isActive={location === item.path} 
          onClick={closeMenu}
        >
          {item.name}
        </CustomLink>
      ))}

    {/* CTA Llamativo final */}
    <Button href="/#contacto" isNav onClick={closeMenu}>
      Promociones
    </Button>
    </NavLinksContainer>
  );
};
