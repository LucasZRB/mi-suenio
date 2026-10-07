export const theme = {
  colors: {
    white: '#FDF8F5',
    rosaPardo: '#D4788E',
    oro: '#C9A96E',
    marronOscuro: '#3D2420',
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
    black30: '0 4px 12px rgba(0, 0, 0, 0.30)',
    oro20: '0 4px 12px rgba(201, 169, 110, 0.20)',
    oro50: '0 4px 12px rgba(201, 169, 110, 0.50)',
    rosa50: '0 4px 12px rgba(212, 120, 142, 0.50)'
  },
  // Media query para adaptar fácilmente de dispositivos
  breakpoints: {
    mobile: '@media (max-width: 576px)',
    tablet: '@media (max-width: 992px)' // Aplica a tablets y celulares
  }
};
