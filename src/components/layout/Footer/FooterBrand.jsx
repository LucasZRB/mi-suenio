import { css } from 'styled-components';
import { 
  BrandColumn,
  BrandSubtitle, 
  BrandText, 
  SocialContainer, 
  ColumnHeading 
} from './Footer.styles';
import { Logo } from '../../common/Logo';
import { SocialIcons } from '../../common/SocialIcons';

export const FooterBrand = () => {
  return (
    <BrandColumn>
      <Logo
        $customStyles={css`
          font-weight: 400;
          margin-bottom: 4px;
        `}
      />
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
