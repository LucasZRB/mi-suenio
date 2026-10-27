import { 
  TickerContainer, 
  TickerTrack, 
  TickerGroup, 
  TickerItem 
} from './TickerBar.styles';

export const TickerBar = ({ items = [] }) => {
  const defaultItems = [
    "Envíos a todo el país",
    "Atención personalizada",
    "Pagos y reserva de prendas",
    "Cambios y devoluciones"
  ];

  const listToRender = items.length > 0 ? items : defaultItems;

  return (
    <TickerContainer>
      {/* Versión estática para Desktop */}
      <div className="desktop-view">
        {listToRender.map((text, index) => (
          <TickerItem key={`desktop-${index}`}>
            ✦ {text}
          </TickerItem>
        ))}
      </div>

      {/* Versión con marquesina infinita para Tablet y Mobile (duplicado interno limpio) */}
      <div className="mobile-ticker-wrapper">
        <TickerTrack>
          {/* Grupo 1 */}
          <TickerGroup>
            {listToRender.map((text, index) => (
              <TickerItem key={`mobile-1-${index}`}>
                ✦ {text}
              </TickerItem>
            ))}
          </TickerGroup>
          {/* Grupo 2 (Duplicado exacto para hacer el loop infinito sin cortes) */}
          <TickerGroup aria-hidden="true">
            {listToRender.map((text, index) => (
              <TickerItem key={`mobile-2-${index}`}>
                ✦ {text}
              </TickerItem>
            ))}
          </TickerGroup>
        </TickerTrack>
      </div>
    </TickerContainer>
  );
};