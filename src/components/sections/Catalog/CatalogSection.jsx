import { useMemo } from 'react';
import { useSearch } from 'wouter';
import { ProductCard } from './ProductCard';
import { PRODUCTS_DATA } from '../../../data/products';
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
  const selectedCategory = searchParams.get('categoria'); // ej: "verano"

  // Lógica de filtrado: Si hay categoría seleccionada, filtramos; sino, devolvemos todo
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return PRODUCTS_DATA;
    
    return PRODUCTS_DATA.filter(
      (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  return (
    <CatalogContainer>
      <CatalogHeader>
        <SectionSubtitle>La mejor calidad de ropa la podes encontrar en nuestro</SectionSubtitle>
        <SectionTitle>Catálogo</SectionTitle>
        <SectionDescription>{selectedCategory ? `Categoría: ${selectedCategory}` : "Explorá nuestra selección pensada para vos"}</SectionDescription>
      </CatalogHeader>

      <DividingLine />

      <ProductsGrid>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <EmptyMessage>
            No encontramos productos disponibles en esta categoría por el momento.
          </EmptyMessage>
        )}
      </ProductsGrid>
    </CatalogContainer>
  );
};
