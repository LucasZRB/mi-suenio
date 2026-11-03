import styled from 'styled-components';

export const CatalogContainer = styled.section`
  padding: 64px 5%;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.breakpoints.tablet} {
    padding-block: 32px;
  }
`;

export const CatalogHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const SectionSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.oro};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fonts.title};

  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.marronOscuro};
  margin: 16px 0;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.title};

  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const SectionDescription = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.marronOscuro};
  font-size: ${({ theme }) => theme.fontSizes.sm};


  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
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

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  /* Tablet: Grilla de 2x2 */
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile: Columna vertical única */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyMessage = styled.div`
  text-align: center;
  grid-column: 1 / -1;
  padding: 40px;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.textMuted || '#777'};
  font-size: 1.1rem;
`;
