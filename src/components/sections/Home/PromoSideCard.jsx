import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SideCardContainer, IconSection, TextSection } from './PromoSideCard.styles';
import { theme } from '../../../theme';

export const PromoSideCard = ({ coupon, type }) => {
  const { icon, title, subtitle, description } = coupon;

  return (
    <SideCardContainer $type={type}>
      {icon && (
        <IconSection $type={type}>
          <FontAwesomeIcon icon={icon} />
        </IconSection>
      )}
      <TextSection $type={type}>
        <h4>{title}</h4>
        {subtitle && <p style={{ color: theme.colors.marronOscuro, fontSize: '0.85rem', fontStyle: 'italic' }}>{subtitle}</p>}
        <p>{description}</p>
      </TextSection>
    </SideCardContainer>
  );
};
