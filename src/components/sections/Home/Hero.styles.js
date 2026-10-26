import styled from 'styled-components';

export const HeroSectionWrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding-inline: 64px;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding-inline: 32px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 0;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 48px;

  ${({ theme }) => theme.breakpoints.tablet} {
    gap: 32px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: 64px;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding-block: 32px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding-inline: 16px;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.title};
  font-style: italic;
  color: ${({ theme }) => theme.colors.oro};
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSizes.lg};

  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.display};
  line-height: 1.2;
  margin-bottom: 16px;
  font-weight: 400;
  text-wrap: nowrap;
  color: ${({ theme }) => theme.colors.marronOscuro};

  span {
    display: block;
    font-style: italic;
    color: ${({ theme }) => theme.colors.rosaPardo};
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    /* Elige otro tamaño, en movil es muy grande
    Esto es temporal hasta que eligas uno nuevo que
    te convenza */
    font-size: ${({ theme }) => theme.fontSizes.h2};
  }
`;

export const HeroText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  margin-bottom: 64px;
  color: ${({ theme }) => theme.colors.marronOscuro};
  opacity: 0.9;
  max-width: 500px;

  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const HeroImageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  background-color: ${({ theme }) => theme.colors.transparenciaMarron};
  background-image: linear-gradient(45deg, #f4f4f4 25%, transparent 25%), linear-gradient(-45deg, #f4f4f4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f4f4f4 75%), linear-gradient(-45deg, transparent 75%, #f4f4f4 75%);
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.oro20};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    align-content: center;
    text-align: center;
  }

  /* Ocultamos completamente la imagen decorativa en dispositivos móviles */
  ${({ theme }) => theme.breakpoints.mobile} {
    display: none;
  }
`;
