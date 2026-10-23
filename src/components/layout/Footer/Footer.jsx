import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebookF } from '@fortawesome/free-brands-svg-icons'; 
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  // Reemplazar con los datos reales (Formato sin espacios ni símbolos)
  const googleMapsAddress = encodeURIComponent("Sixto Laspiur 2251, Bahia Blanca, Buenos Aires");
  const whatsappNumber = "542915221742"; // Código país + código área + número sin el 15
  const emailAddress = "sonia_noemi@live.com.ar";

  return (
    <FooterContainer>
      <FooterGrid>
        {/* Columna Marca */}
        <BrandColumn>
          <BrandTitle>Mi Sueño</BrandTitle>
          <BrandSubtitle>El local de tu barrio</BrandSubtitle>
          <BrandText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo minus, nisi sem senectus litora gravida vivamus.
          </BrandText>
          <SocialContainer>
            <ColumnHeading>¡SEGUINOS!</ColumnHeading>
            <SocialList>
              <SocialIcon href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialIcon>
              <SocialIcon href="https://tiktok.com">
                <FontAwesomeIcon icon={faTiktok} />
              </SocialIcon>
              <SocialIcon href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialIcon>
            </SocialList>
          </SocialContainer>
        </BrandColumn>

        {/* Columna Enlaces */}
        <LinksColumn>
          <ColumnHeading>SERVICIO AL CLIENTE</ColumnHeading>
          <LinkList>
            <li><FooterLink href="#">Preguntas Frecuentes</FooterLink></li>
            <li><FooterLink href="#">Políticas de cambio</FooterLink></li>
            <li><FooterLink href="#">Promociones</FooterLink></li>
          </LinkList>
        </LinksColumn>

        {/* Columna Contacto */}
        <ContactColumn>
          <ColumnHeading>CONTACTOS</ColumnHeading>
          <ContactItem>
            {/* Enlace dinámico a Google Maps */}
            <ContactLink 
              href={`https://google.com/maps/place/${googleMapsAddress}`}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-fixed" />
              <span>Sixto Laspiur 2251, Bahia Blanca</span>
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLink 
              href={`https://wa.me/${whatsappNumber}`}
            >
              <FontAwesomeIcon icon={faPhone} className="icon-fixed" />
              <span>Enviar Mensaje (WhatsApp)</span>
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLink 
              href={`mailto:${emailAddress}`}
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon-fixed" />
              <span>Envíanos un correo a: {emailAddress}</span>
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon icon={faClock} className="icon-fixed" />
            <span>Lun a Sáb - 09:00 a 13:00hs y 16:30 a 20:30hs</span>
          </ContactItem>
        </ContactColumn>
      </FooterGrid>

      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Mi Sueño. Todos los derechos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

/* ==================== ESTILOS CON STYLED-COMPONENTS ==================== */

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.marronOscuro};
  color: ${({ theme }) => theme.colors.white};
  padding: 64px 64px 32px;
  font-family: ${({ theme }) => theme.fonts.body};

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 32px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 16px;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;

  /* Adaptación automática para TABLETS */
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  /* Adaptación automática para MÓVILES */
  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr; /* Colapsa todo en una sola columna vertical */
  }
`;

const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 400;
  margin-bottom: 4px;
`;

const BrandSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: 32px;
`;

const BrandText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.85;
  max-width: 400px;
`;

const SocialContainer = styled.div`
  margin-top: 32px;
`;

const SocialList = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

const SocialIcon = styled.a.attrs((props) => ({
  href: props.href || "#",
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme && `rgba(253, 248, 245, 0.10)`};
  border: 1px solid ${({ theme }) => theme && `rgba(253, 248, 245, 0.20)`};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.rosaPardo};
    border-color: ${({ theme }) => theme.colors.rosaPardo};
    transform: translateY(-3px);
  }
`;

const ColumnHeading = styled.h4`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: 1px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const LinksColumn = styled.div`
  /* En tablets movemos esta columna si es necesario, o la dejamos fluir */
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 12px;
  }
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 16px;
  opacity: 0.8;
  transition: opacity 0.2s, color 0.2s;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.rosaPardo};
  }
`;

const ContactColumn = styled.div`
  /* En tablets la columna de contacto ocupará todo el ancho abajo si es necesario */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span 2;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: span 1;
  }
`;

const ContactLink = styled.a.attrs((props) => ({
  href: props.href || "#",
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  color: ${props => props.theme.colors.white};
  transition: color 0.2s ease-in-out;
  display: flex;
  align-items: flex-start;
  gap: 12px;

  &:hover {
    color: ${props => props.theme.colors.oro};
    svg { transform: scale(1.15); }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.4;

  .icon-fixed {
    color: ${({ theme }) => theme.colors.rosaPardo};
    margin-top: 3px;
    width: 16px;
    text-align: center;
  }
  
  span {
    opacity: 0.85;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.marronClaro};
  margin-top: 32px;
  padding-top: 16px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  opacity: 0.6;
`;
