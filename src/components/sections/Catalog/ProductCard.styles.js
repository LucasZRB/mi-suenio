import styled from 'styled-components';

export const CardContainer = styled.div`
  background: none;
  text-align: left;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 256px;
`;

export const CardCategory = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.oro};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  display: block;
  font-weight: 600;
`;

export const ImageWrapper = styled.div`
  width: 256px;
  height: 368px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.30);
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    color: ${props => props.theme.colors.rosaPardo};
    text-align: center;
    transition: transform 0.3s ease;

    &::before {
      width: 100%;
      position: absolute;
      top: 50px;
      left: 0;
    }

    &:after {
      content: " ⚠️ (Imagen no disponible)";
      display: block;
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      font-size: ${props => props.theme.fontSizes.xs};
      color: ${props => props.theme.colors.marronClaro};
    }
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

export const SizeBadge = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${props => props.theme.colors.transparenciaBlanca};
  color: ${({ theme }) => theme.colors.marronOscuro};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadows.black20};
  z-index: 2;
`;

export const SaleBadge = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  background-color: ${({ theme }) => theme.colors.rosaPardo};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xs};
  padding: 4px 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
  box-shadow: ${props => props.theme.shadows.black20};
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.marronOscuro};
  margin-bottom: 6px;
  font-weight: 500;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  .price-regular {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.sm};
    font-weight: bold;
    color: ${({ theme, $onSale }) => ($onSale ? theme.colors.oro : theme.colors.marronOscuro)};
    text-decoration: ${({ $onSale }) => ($onSale ? 'line-through' : 'none')};
  }

  .price-sale {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.md};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.rosaPardo};
  }
`;

export const CardDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.marronClaro};
  line-height: 1.4;
`;
