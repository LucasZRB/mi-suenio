import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 80vh;
  align-items: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 10%;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 48px 32px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 32px 16px;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-style: italic;
  color: ${({ theme }) => theme.colors.rosaPardo};
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.marronOscuro};

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.rosaPardo};
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 2.5rem;
  }
`;

export const HeroText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 32px;
  color: #665a5c;
  opacity: 0.9;
  max-width: 500px;
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
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    min-height: 350px;
  }
`;
