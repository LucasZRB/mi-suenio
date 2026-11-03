import { useMemo } from 'react';
import { useSearch } from 'wouter';
import { ProductCard } from './ProductCard';
import { PRODUCTS_DATA } from '../../../data/products';
import { CatalogFilters } from './CatalogFilters';
import { 
  CatalogContainer, 
  CatalogHeader, 
  ProductsGrid, 
  EmptyMessage, 
  SectionSubtitle,
  SectionTitle,
  SectionDescription,
  DividingLine
} from './CatalogSection.styles';

export const CatalogSection = () => {
  // Obtenemos los query params (ej: "?categoria=verano")
  const searchString = useSearch();
  // Parseamos la URL para extraer el valor del parámetro 'categoria'
  const searchParams = new URLSearchParams(searchString);

  // Leemos los parámetros de la URL
  const searchQuery = searchParams.get('busqueda')?.toLowerCase() || '';
  const selectedCategory = searchParams.get('categoria')?.toLowerCase() || ''; // ej: "verano"
  const selectedType = searchParams.get('tipo')?.toLowerCase() || ''; // ej: "camperas"
  const selectedSize = searchParams.get('talla')?.toLowerCase() || '';
  const onlyOnSale = searchParams.get('oferta') === 'true';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  // Se extraen opciones únicas (set) dinámicamente para los selects de los filtros
  const categoriesList = useMemo(() => [...new Set(PRODUCTS_DATA.map(p => p.category))], []);
  const typesList = useMemo(() => [...new Set(PRODUCTS_DATA.map(p => p.type))], []);
  const sizesList = useMemo(() => [...new Set(PRODUCTS_DATA.map(p => p.size))], []);

  // Lógica de filtrado avanzada
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // 1. Filtro por Búsqueda (nombre o descripción)
      if (searchQuery) {
        const matchesName = product.name.toLowerCase().includes(searchQuery);
        const matchesDesc = product.description.toLowerCase().includes(searchQuery);
        if (!matchesName && !matchesDesc) return false;
      }

      // 2. Filtro por Categoría
      if (selectedCategory && product.category.toLowerCase() !== selectedCategory) {
        return false;
      }

      // 3. Filtro por Tipo
      if (selectedType && product.type.toLowerCase() !== selectedType) {
        return false;
      }

      // 4. Filtro por Talla
      if (selectedSize && product.size.toLowerCase() !== selectedSize) {
        return false;
      }

      // 5. Filtro por Oferta
      if (onlyOnSale && !product.onSale) {
        return false;
      }

      // 6. Filtro por Rango de Precios Dinámico
      if (minPrice || maxPrice) {
        const effectivePrice = product.onSale ? product.salePrice : product.price;
        if (minPrice && effectivePrice < Number(minPrice)) return false;
        if (maxPrice && effectivePrice > Number(maxPrice)) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedType, selectedSize, onlyOnSale, minPrice, maxPrice]);

  return (
    <CatalogContainer>
      <CatalogHeader>
        <SectionSubtitle>La mejor calidad de ropa la podes encontrar en nuestro</SectionSubtitle>
        <SectionTitle>Catálogo</SectionTitle>
        <SectionDescription>
          {selectedCategory
                          ? `Categoría: ${selectedCategory}`
                          : "Explorá nuestra selección pensada para vos"
          }
        </SectionDescription>
      </CatalogHeader>

      <DividingLine />

      <CatalogFilters 
        categories={categoriesList} 
        types={typesList} 
        sizes={sizesList} 
      />

      <ProductsGrid>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <EmptyMessage>
            No encontramos productos que coincidan con los filtros seleccionados.
          </EmptyMessage>
        )}
      </ProductsGrid>
    </CatalogContainer>
  );
};
