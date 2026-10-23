export const theme = {
  colors: {
    white: '#FDF8F5',
    rosaPardo: '#D4788E',
    oro: '#C9A96E',
    marronOscuro: '#3D2420',
    // Variaciones y transparencias útiles para estados de interacción
    rosaPardoHover: '#c2657a',
    marronClaro: '#5a3b37',
    transparenciaMarron: 'rgba(61, 36, 32, 0.08)',
    transparenciaRosa: 'rgba(212, 120, 142, 0.15)',
  },
  fonts: {
    title: "'Cormorant Garamond', serif",
    body: "'Nunito', sans-serif"
  },
  fontSizes: {
    xs: '14px',   sm: '18px',   md: '20px',   lg: '24px',
    xl: '32px',   xxl: '36px',  h3: '40px',   h2: '48px',
    h1: '72px',   display: '80px', hero: '84px'
  },
  shadows: {
    white30: '0 4px 12px rgba(253, 248, 245, 0.30)',
    black30: '0 4px 12px rgba(0, 0, 0, 0.30)',
    black20: '0 4px 4px rgba(0, 0, 0, 0.20)',
    oro20: '0 4px 12px rgba(201, 169, 110, 0.20)',
    oro50: '0 4px 12px rgba(201, 169, 110, 0.50)',
    rosa20: '0 4px 12px rgba(212, 120, 142, 0.20)',
    rosa20b: '0 4px 4px rgba(212, 120, 142, 0.20)',
    rosa50: '0 4px 12px rgba(212, 120, 142, 0.50)'
  },
  // Media query para adaptar fácilmente de dispositivos
  breakpoints: {
    mobile: '@media (max-width: 600px)',
    tablet: '@media (max-width: 992px)' // Aplica a tablets y celulares
  }
};
