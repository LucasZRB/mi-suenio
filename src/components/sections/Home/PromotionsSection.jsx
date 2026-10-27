import { PromoBanner } from './PromoBanner';
import { PromoSideCard } from './PromoSideCard';
import { COUPONS_DATA } from '../../../data/coupons'; // Ajusta la ruta a tu archivo de datos
import { 
  PromotionsContainer, 
  PromoMiniTitle, 
  PromoMainHeading, 
  PromoGridContainer, 
  PromoSideCardsWrapper, 
  DividingLine
} from './PromotionsSection.styles';

export const PromotionsSection = ({ bannerInfo }) => {
  return (
    <PromotionsContainer>
      <PromoMiniTitle>Exclusivo para vos</PromoMiniTitle>
      <PromoMainHeading>
        Promociones <span>especiales</span>
      </PromoMainHeading>

      <DividingLine />

      <PromoGridContainer>
        {/* Banner principal dinámico */}
        <PromoBanner bannerData={bannerInfo} />

        {/* Tarjetas laterales dinámicas consumidas desde coupons.js */}
        <PromoSideCardsWrapper>
          {COUPONS_DATA.map((coupon, index) => (
            <PromoSideCard key={coupon.id} coupon={coupon} type={index % 2 ? "rosa" : "oro"} />
          ))}
        </PromoSideCardsWrapper>
      </PromoGridContainer>
    </PromotionsContainer>
  );
};
