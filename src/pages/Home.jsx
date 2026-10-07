import { theme } from '../theme';

export default function Footer() {
  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: theme.fonts.title,
        fontSize: theme.fontSizes.h2,
        color: theme.colors.marronOscuro,
      }}
    >
      Presentación del Negocio
    </div>
  );
}
