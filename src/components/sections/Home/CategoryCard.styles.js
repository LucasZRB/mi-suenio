import styled from 'styled-components';

export const CardContainer = styled.div`
  background: none;
  text-align: left;
  font-style: italic;
  max-width: 256px;
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.oro};
  margin-bottom: 8px;
  font-weight: 500;

  ${props => props.theme.breakpoints.mobile} {
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;

export const CardImageWrapper = styled.div`
  width: 256px;
  height: 368px;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.black30};
  transition: transform 0.3s ease-in-out;

  img {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    color: ${props => props.theme.colors.rosaPardo};
    text-align: center;

    &:after {
      content: " ⚠️ (Imagen no disponible)";
      display: block;
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      font-size: 14px;
      color: ${props => props.theme.colors.marronClaro};
    }
  }

  &:hover {
    transform: scale(1.05); /* Efecto hover de agrandado */
  }
`;

export const CardDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.marronOscuro};
  margin-top: 16px;
  line-height: 1.5;

  ${props => props.theme.breakpoints.mobile} {
    font-size: ${props => props.theme.fontSizes.xs};
  }
`;
