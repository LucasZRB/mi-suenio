import { FooterContainer, FooterGrid, FooterBottom } from './Footer.styles';
import { FooterBrand } from './FooterBrand';
import { FooterLinks } from './FooterLinks';
import { FooterContact } from './FooterContact';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterBrand />
        <FooterLinks />
        <FooterContact />
      </FooterGrid>

      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Mi Sueño. Todos los derechos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
