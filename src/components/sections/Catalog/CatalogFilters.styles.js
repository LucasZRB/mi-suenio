import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.transparenciaBlanca};
  padding: 24px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.rosa20};
  margin-bottom: 40px;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 16px;
  }
`;

// Botón para desplegar/colapsar en móviles y tablet
export const MobileToggleBtn = styled.button`
  display: none; // Por defecto oculto en desktop
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.rosaPardo};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.rosaPardoHover};
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    display: flex; // Visible en tablet/mobile
  }
`;

// Wrapper colapsable para los filtros avanzados
export const FiltersContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.tablet} {
    /* Si está colapsado en mobile, lo ocultamos. Si está abierto, se muestra */
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    margin-top: 10px;
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.marronOscuro};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.rosaPardo};
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.rosaPardo};
    opacity: 0.7;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.oro};
    box-shadow: ${({ theme }) => theme.shadows.oro20};
  }
`;

export const FiltersRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.marronOscuro};
    font-weight: 600;
  }

  select {
    padding: 10px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.marronOscuro};
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.rosaPardo};
    border-radius: 8px;
    outline: none;
    cursor: pointer;

    &:focus {
      border-color: ${({ theme }) => theme.colors.oro};
    }
  }
`;

export const CheckboxGroup = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.marronOscuro};
  cursor: pointer;
  margin-top: auto;
  padding-bottom: 8px;

  input[type="checkbox"] {
    accent-color: ${({ theme }) => theme.colors.rosaPardo};
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .sale-icon {
    color: ${({ theme }) => theme.colors.oro};
  }
`;

export const ResetButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.rosaPardo};
  border: 1px dashed ${({ theme }) => theme.colors.rosaPardo};
  padding: 10px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  cursor: pointer;
  transition: all 0.2s ease;
  grid-column: 1 / -1;

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparenciaRosa};
    color: ${({ theme }) => theme.colors.rosaPardoHover};
  }
`;
