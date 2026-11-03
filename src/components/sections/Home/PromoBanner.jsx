import { BannerContainer, PromoBadge } from './PromoBanner.styles';

export const PromoBanner = ({ bannerData }) => {
  const { discountPersent, discountText, bgImage } = bannerData || {
    discountPersent: 20,
    discountText: "Sección Invierno",
    bgImage: "peluche.jpg"
  };
  const imageUrl = bgImage 
    ? new URL(`../../../assets/images/${bgImage}`, import.meta.url).href 
    : null;

  return (
    <BannerContainer $bgImage={imageUrl}>
      <PromoBadge>
        {discountPersent}% off
        <span>{discountText}</span>
      </PromoBadge>
    </BannerContainer>
  );
};
