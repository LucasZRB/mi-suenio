import { theme } from "../theme";

export default function Footer() {
  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: theme.fonts.body,
        fontSize: theme.fontSizes.lg,
      }}
    >
      Catálogo de Productos
    </div>
  );
}
