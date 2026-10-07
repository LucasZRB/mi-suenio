import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  // Reemplazar con los datos reales (Formato sin espacios ni símbolos)
  const googleMapsAddress = encodeURIComponent("Calle Falsa 123, Bahía Blanca, Buenos Aires");
  const whatsappNumber = "541112345678"; // Código país + código área + número sin el 15

  return (
    <FooterContainer id="contacto">
      <FooterSection>
        <h5>NUESTRO LOCAL</h5>
        {/* Enlace dinámico a Google Maps */}
        <ContactLink 
          href={`https://google.com/maps/place/${googleMapsAddress}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Calle Falsa 123, Bahía Blanca
        </ContactLink>
        
        {/* Enlace directo a WhatsApp */}
        <ContactLink 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faPhone} /> Enviar Mensaje (WhatsApp)
        </ContactLink>
      </FooterSection>

      <FooterSection>
        <h5>HORARIOS</h5>
        <p><FontAwesomeIcon icon={faClock} /> Lun a Vie: 08:00 a 20:00</p>
        <p><FontAwesomeIcon icon={faClock} /> Sábados: 09:00 a 14:00</p>
      </FooterSection>

      <FooterBottom>
        <p>&copy; 2026 Nuestra Tienda Física. Todos los derechos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
}

// --- COMPONENTES ESTILIZADOS ---
const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.marronOscuro};
  color: ${props => props.theme.colors.white};
  padding: 40px 20px 20px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  margin-top: 60px;
  border-top: 3px solid ${props => props.theme.colors.oro};

  ${props => props.theme.breakpoints.tablet} {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h5 {
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.oro};
    font-size: ${props => props.theme.fontSizes.sm};
    margin-bottom: 12px;
    letter-spacing: 1px;
  }
  p {
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.xs};
    margin-bottom: 8px;
    svg { margin-right: 8px; color: ${props => props.theme.colors.rosaPardo}; }
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.2s ease-in-out;
  
  svg { 
    margin-right: 8px; 
    color: ${props => props.theme.colors.rosaPardo}; 
    transition: transform 0.2s;
  }

  &:hover {
    color: ${props => props.theme.colors.oro};
    svg { transform: scale(1.15); }
  }

  ${props => props.theme.breakpoints.tablet} { justify-content: center; }
`;

const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  margin-top: 20px;
  p { font-size: 12px; color: #aaa; }
`;
