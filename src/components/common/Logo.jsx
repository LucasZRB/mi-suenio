import { LogoWrapper } from '../layout/Navbar/Navbar.styles'; // O un archivo de estilos común si prefieres

export const Logo = ({ ...props }) => {
  return (
    <LogoWrapper {...props}>
      <span>Mi Sueño</span>
    </LogoWrapper>
  );
};
