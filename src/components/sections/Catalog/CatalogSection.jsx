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

export const CatalogSection = ({ selectedCategory }) => {
  // Lógica de filtrado: Si hay categoría seleccionada, filtramos; sino, devolvemos todo
  const filteredProducts = selectedCategory
    ? PRODUCTS_DATA.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : PRODUCTS_DATA;

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
