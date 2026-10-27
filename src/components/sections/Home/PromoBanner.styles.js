import styled from 'styled-components';

export const BannerContainer = styled.div`
  background-color: rgba(201, 169, 110, 0.50);
  /* Si el banner tiene imagen de fondo dinámica, podemos inyectarla aquí */
  background-image: ${({ $bgImage }) => ($bgImage ? `url(${$bgImage})` : 'none')};
  background-size: cover;
  background-position: center;
  height: 350px;
  border-radius: 40px;
  display: flex;
  align-items: flex-end;
  padding: 30px;
  text-align: left;
  position: relative;
  overflow: hidden;

  /* Overlay sutil para oscurecer la imagen de fondo si la hubiera y mejorar lectura */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%);
    pointer-events: none;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    height: 280px;
  }
`;

export const PromoBadge = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  position: relative;
  z-index: 1;
  font-family: ${({ theme }) => theme.fonts.title};

  span {
    display: block;
    font-weight: 400;
    font-style: italic;
  }
`;
