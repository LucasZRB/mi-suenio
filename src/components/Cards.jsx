import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

// 1. CARD DE CATEGORÍA
export function CategoryCard({ name, image, description }) {
  return (
    <CatCardContainer>
      <h3>{name}</h3>
      <ImageWrapper>
        <img src={image} alt={name} />
      </ImageWrapper>
      <p>{description}</p>
    </CatCardContainer>
  );
}

// 2. CARD DE PRODUCTO
export function ProductCard({ type, name, price, description }) {
  return (
    <ProdCardContainer>
      <ProdImagePlaceholder>
        <Badge>{type}</Badge>
        {/* Aquí iría tu tag <img>, uso un fondo de color como ejemplo */}
        <i className="fa-solid fa-image"></i> 
      </ProdImagePlaceholder>
      <h4>{name}</h4>
      <Price>\${price}</Price>
      <p>{description}</p>
    </ProdCardContainer>
  );
}

// 3. CARD DE DESCUENTOS / CUPONES
export function CouponCard({ icon, title, subtitle, description }) {
  // Buscamos dinámicamente el ícono de la librería instalada
  const faIcon = Icons[`fa${icon.charAt(0).toUpperCase() + icon.slice(1)}`] || Icons.faTicket;

  return (
    <CouponContainer>
      <IconSection>
        <FontAwesomeIcon icon={faIcon} />
      </IconSection>
      <TextSection>
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
        <p>{description}</p>
      </TextSection>
    </CouponContainer>
  );
}

// --- ESTILOS COMPARTIDOS Y ESPECÍFICOS ---

const CatCardContainer = styled.div`
  background: none;
  text-align: center;
  max-width: 320px;
  
  h3 {
    font-family: ${props => props.theme.fonts.title};
    font-size: ${props => props.theme.fontSizes.lg};
    color: ${props => props.theme.colors.marronOscuro};
    margin-bottom: 15px;
  }
  p {
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.sm};
    margin-top: 10px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 16px; /* Bordes redondeados solicitados */
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.black30};
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05); /* Efecto hover de agrandado */
  }
`;

const ProdCardContainer = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 20px;
  border-radius: 12px;
  max-width: 280px;

  h4 {
    font-family: ${props => props.theme.fonts.title};
    font-size: ${props => props.theme.fontSizes.lg};
    margin: 15px 0 5px 0;
  }
  p {
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.xs};
    color: #666;
  }
`;

const ProdImagePlaceholder = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: ${props => props.theme.colors.oro}20; /* 20% transparencia */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Badge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${props => props.theme.colors.marronOscuro};
  color: ${props => props.theme.colors.white};
  padding: 4px 10px;
  font-size: ${props => props.theme.fontSizes.xs};
  border-radius: 20px;
  font-family: ${props => props.theme.fonts.body};
`;

const Price = styled.span`
  display: block;
  font-family: ${props => props.theme.fonts.body};
  font-weight: bold;
  color: ${props => props.theme.colors.rosaPardo};
  font-size: ${props => props.theme.fontSizes.md};
  margin-bottom: 8px;
`;

const CouponContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.white};
  border-left: 5px dashed ${props => props.theme.colors.oro};
  box-shadow: ${props => props.theme.shadows.oro50};
  border-radius: 8px;
  max-width: 450px;
  overflow: hidden;

  /* En tablets o móviles achicamos el bloque */
  ${props => props.theme.breakpoints.tablet} {
    flex-direction: column;
    border-left: none;
    border-top: 5px dashed ${props => props.theme.colors.oro};
  }
`;

const IconSection = styled.div`
  background-color: ${props => props.theme.colors.rosaPardo};
  color: ${props => props.theme.colors.white};
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;

  ${props => props.theme.breakpoints.tablet} {
    padding: 15px;
  }
`;

const TextSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h5 { font-family: ${props => props.theme.fonts.title}; font-size: ${props => props.theme.fontSizes.lg}; }
  h6 { font-family: ${props => props.theme.fonts.body}; color: ${props => props.theme.colors.oro}; margin-bottom: 5px; }
  p { font-family: ${props => props.theme.fonts.body}; font-size: ${props => props.theme.fontSizes.xs}; }
`;
