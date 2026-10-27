import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 64px 5%;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.breakpoints.tablet} {
    padding-block: 32px;
  }
`;

export const SectionHeader = styled.div`
  margin: 0 auto;
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

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.rosaPardo};
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const SectionDescription = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.marronOscuro};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  span {
    display: block;
  }

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

  /* Tablet: Agrupamos de 2x2 */
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile: Una sola columna vertical */
  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;
