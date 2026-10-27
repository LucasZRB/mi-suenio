import { CategoryCard } from '../../Cards';
import { CATEGORIES_DATA } from '../../../data/categories';
import { 
  SectionContainer, 
  SectionHeader, 
  SectionSubtitle, 
  SectionTitle, 
  SectionDescription, 
  ProductsGrid, 
  DividingLine
} from './CategoriesSection.styles';

export const CategoriesSection = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionSubtitle>Delicadeza y moda al alcance de todas</SectionSubtitle>
        <SectionTitle>Moda que te <span>entiende</span></SectionTitle>
        <SectionDescription>
          <span>Porque cada etapa de la vida merece su propio estilo.</span>
          <span>Encontrá tu temporada y vestite como sos vos.</span>
        </SectionDescription>
      </SectionHeader>

      <DividingLine />

      <ProductsGrid>
        {CATEGORIES_DATA.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ProductsGrid>
    </SectionContainer>
  );
};
