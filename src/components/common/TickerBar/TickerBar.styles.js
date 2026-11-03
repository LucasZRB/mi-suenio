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

export const TickerTrack = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  /* Si ves que es muy lento, ponle más segundos para
  acelerarlo un poco :P */
  animation: ${scrollAnimation} 30s linear infinite;
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

  /* Al hacer hover en el contenedor principal, se detiene
  la animación del hijo que está dentro de este componente */
  /* Sino era un poco molesto que únicamente se pausara
  cuando seleccionabas el texto en específico en vez del
  componente en general. Con esto se solucionaría eso */
  /* Y si te lo pregunstas, sí, era completamente necesario
  invertir el orden de los componentes para que funcionara.
  Con cómo los veníamos trabajando (de lectura) acá no se puede */
  &:hover ${TickerTrack} {
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
