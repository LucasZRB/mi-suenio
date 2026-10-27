import styled from 'styled-components';

export const PromotionsContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.transparenciaOro};
  padding: 64px 5%;
  text-align: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding-block: 32px;
  }
`;

export const PromoMiniTitle = styled.p`
  color: ${({ theme }) => theme.colors.oro};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.title};

  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const PromoMainHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.marronOscuro};
  margin-top: 16px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.title};

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.rosaPardo};
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const DividingLine = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.marronOscuro};
  width: 400px;
  margin: 32px auto;

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 200px;
  }
`;

export const PromoGridContainer = styled.div`
  display: grid;
  /* Por defecto colocamos el Banner a la izquierda (2fr), y los (¿el? ¿las?) Side Cards en columna a la derecha (1fr) */
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
  align-items: stretch;

  /* En Tablet cambiamos la distribución si es necesario, o adaptamos los side-cards */
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const PromoSideCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* Únicamente en tablet: los side-cards se ponen uno al lado del otro (en fila) */
  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
  }

  /* En mobile volvemos a ponerlos uno debajo del otro */
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
