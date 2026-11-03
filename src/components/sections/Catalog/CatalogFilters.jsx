import { useState } from 'react';
import { useLocation, useSearch } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown, faChevronUp, faTag } from '@fortawesome/free-solid-svg-icons';
import {
  FiltersContainer,
  MobileToggleBtn,
  FiltersContent,
  SearchInput,
  FiltersRow,
  FilterGroup,
  CheckboxGroup,
  ResetButton
} from './CatalogFilters.styles';

export const CatalogFilters = ({ categories = [], types = [], sizes = [] }) => {
  const [location, setLocation] = useLocation();
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);

  // Estado para colapsar/expandir en mobile
  const [isExpanded, setIsExpanded] = useState(false);

  // Extraer valores actuales de los query params
  const search = searchParams.get('busqueda') || '';
  const category = searchParams.get('categoria') || '';
  const type = searchParams.get('tipo') || '';
  const size = searchParams.get('talla') || '';
  const onSale = searchParams.get('oferta') === 'true';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  // Función para actualizar los query params dinámicamente sin perder los demás
  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchString);
    if (value) params.set(key, value);
    else params.delete(key);

    // Al cambiar filtros, es recomendable volver a la página 1 para evitar desajustes
    params.delete('pagina');
    setLocation(`${location.split('?')[0]}?${params.toString()}`);
  };

  const handleReset = () => {
    setLocation(location.split('?')[0]); // Limpia todos los query params
  };

  const hasActiveFilters = search || category || type || size || onSale || minPrice || maxPrice;

  // Función auxiliar para formatear número con puntos (ej: 1500 -> 1.500)
const formatPriceInput = (value) => {
  if (!value) return '';
  const numbers = value.toString().replace(/\D/g, '');
  return Number(numbers).toLocaleString('es-AR');
};

const handlePriceChange = (field, rawValue) => {
  const numbersOnly = rawValue.replace(/\D/g, '');
  let newMin = minPrice;
  let newMax = maxPrice;

  if (field === 'min') newMin = numbersOnly;
  if (field === 'max') newMax = numbersOnly;

  // Validación automática: si el mínimo es mayor que el máximo, los intercambiamos o ajustamos
  if (newMin && newMax && Number(newMin) > Number(newMax)) {
    if (field === 'min') [newMax, newMin] = [newMin, newMax];
    else [newMin, newMax] = [newMax, newMin];
  }

  const params = new URLSearchParams(searchString);
  if (newMin) params.set('minPrice', newMin); else params.delete('minPrice');
  if (newMax) params.set('maxPrice', newMax); else params.delete('maxPrice');
  
  // Al cambiar filtros, es recomendable volver a la página 1 para evitar desajustes
  params.delete('pagina');

  setLocation(`${location.split('?')[0]}?${params.toString()}`);
};

  return (
    <FiltersContainer>
      <SearchInput
        type="text"
        placeholder="Buscar productos por nombre o descripción..."
        value={search}
        onChange={(e) => updateParam('busqueda', e.target.value)}
      />

      {/* Botón desplegable exclusivo para Mobile/Tablet */}
      <MobileToggleBtn onClick={() => setIsExpanded(!isExpanded)}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FontAwesomeIcon icon={faFilter} /> 
          {hasActiveFilters ? 'Filtros aplicados (Toca para ver)' : 'Filtrar y Ordenar'}
        </span>
        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
      </MobileToggleBtn>

      {/* Contenido colapsable */}
      <FiltersContent $isOpen={isExpanded}>
        <FiltersRow>
          <FilterGroup>
            <label>Categoría</label>
            <select
              value={category}
              onChange={(e) => updateParam('categoria', e.target.value)}
            >
              <option value="">Todas las categorías</option>
              {categories.map((cat) => (
                <option key={cat} value={cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>
          </FilterGroup>

          <FilterGroup>
            <label>Tipo</label>
            <select
              value={type}
              onChange={(e) => updateParam('tipo', e.target.value)}
            >
              <option value="">Todos los tipos</option>
              {types.map((t) => (
                <option key={t} value={t.toLowerCase()}>
                  {t}
                </option>
              ))}
            </select>
          </FilterGroup>

          <FilterGroup>
            <label>Talla</label>
            <select
              value={size}
              onChange={(e) => updateParam('talla', e.target.value)}
            >
              <option value="">Todas las tallas</option>
              {sizes.map((s) => (
                <option key={s} value={s.toLowerCase()}>
                  {s}
                </option>
              ))}
            </select>
          </FilterGroup>

          {/* Rango de Precios Personalizado (Mín y Máx) */}
          <FilterGroup>
            <label>Precio Mínimo ($)</label>
            <input
              type="text"
              placeholder="Ej: 10.000"
              value={formatPriceInput(minPrice)}
              onChange={(e) => handlePriceChange('min', e.target.value)}
              style={{
                padding: '10px',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                borderRadius: '8px',
                border: '1px solid #D4788E',
                outline: 'none',
                backgroundColor: '#FFF'
              }}
            />
          </FilterGroup>

          <FilterGroup>
            <label>Precio Máximo ($)</label>
            <input
              type="text"
              placeholder="Ej: 200.000"
              value={formatPriceInput(maxPrice)}
              onChange={(e) => handlePriceChange('max', e.target.value)}
              style={{
                padding: '10px',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                borderRadius: '8px',
                border: '1px solid #D4788E',
                outline: 'none',
                backgroundColor: '#FFF'
              }}
            />
          </FilterGroup>

          <CheckboxGroup>
            <input
              type="checkbox"
              checked={onSale}
              onChange={(e) => updateParam('oferta', e.target.checked ? 'true' : '')}
            />
            <FontAwesomeIcon icon={faTag} className="sale-icon" />
            Solo en Oferta
          </CheckboxGroup>
        </FiltersRow>

        {hasActiveFilters && (
          <ResetButton onClick={handleReset}>Limpiar todos los filtros</ResetButton>
        )}
      </FiltersContent>
    </FiltersContainer>
  );
};
