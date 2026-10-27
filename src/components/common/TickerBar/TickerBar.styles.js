import styled, { keyframes } from 'styled-components';

// Animación de desplazamiento infinito para el Ticker
const scrollAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

export const TickerContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.rosaPardo};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 0;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;

  /* En Desktop: se mantiene estático, centrado y distribuido */
  .desktop-view {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    gap: 16px;

    ${({ theme }) => theme.breakpoints.tablet} {
      display: none; /* Ocultamos la versión estática en tablet/mobile */
    }
  }

  /* En Tablet y Mobile: Activamos la marquesina fluida infinita */
  .mobile-ticker-wrapper {
    display: none;
    width: 100%;
    overflow: hidden;
    position: relative;

    ${({ theme }) => theme.breakpoints.tablet} {
      display: flex;
    }
  }
`;

export const TickerTrack = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  /* Si ves que es muy lento, ponle más segundos para
  acelerarlo un poco :P */
  animation: ${scrollAnimation} 30s linear infinite;

  &:hover {
    animation-play-state: paused; /* Pausa opcional al poner el mouse/dedo encima */
  }
`;

export const TickerGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding-right: 32px; /* Espacio para que no se peguen al reiniciar el loop */
`;

export const TickerItem = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;
