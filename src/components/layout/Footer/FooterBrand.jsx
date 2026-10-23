import { 
  BrandColumn, 
  BrandTitle, 
  BrandSubtitle, 
  BrandText, 
  SocialContainer, 
  ColumnHeading 
} from './Footer.styles';
import { SocialIcons } from '../../common/SocialIcons';

export const FooterBrand = () => {
  return (
    <BrandColumn>
      <BrandTitle>Mi Sueño</BrandTitle>
      <BrandSubtitle>El local de tu barrio</BrandSubtitle>
      <BrandText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo minus, nisi sem senectus litora gravida vivamus.
      </BrandText>
      <SocialContainer>
        <ColumnHeading>¡SEGUINOS!</ColumnHeading>
        <SocialIcons />
      </SocialContainer>
    </BrandColumn>
  );
};
