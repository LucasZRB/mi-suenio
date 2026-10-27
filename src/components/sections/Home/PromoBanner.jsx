import { BannerContainer, PromoBadge } from './PromoBanner.styles';

export const PromoBanner = ({ bannerData }) => {
  const { discountPersent, discountText, bgImage } = bannerData || {
    discountPersent: 20,
    discountText: "Sección Invierno",
    bgImage: null
  };

  return (
    <BannerContainer $bgImage={bgImage}>
      <PromoBadge>
        {discountPersent}% off
        <span>{discountText}</span>
      </PromoBadge>
    </BannerContainer>
  );
};
