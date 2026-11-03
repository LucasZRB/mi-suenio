import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { 
  CardContainer, 
  CardCategory, 
  ImageWrapper, 
  SizeBadge, 
  SaleBadge, 
  CardTitle, 
  PriceContainer, 
  CardDescription
} from './ProductCard.styles';
import { theme } from '../../../theme';

export const ProductCard = ({ product }) => {
  const { category, size, name, price, image, alt, description, onSale, salePrice } = product;
  const imageUrl = image 
    ? new URL(`../../../assets/images/categorias/${image}`, import.meta.url).href 
    : null;

  return (
    <CardContainer>
      <CardCategory>{category}</CardCategory>

      <ImageWrapper>
        {size && <SizeBadge>{size}</SizeBadge>}
        {image ? (
          <img
            src={imageUrl}
            alt={alt || name}
            loading="lazy" 
            aria-hidden
            onError={(e) => {
              e.target.parentElement.style.backgroundImage = theme.placeholder.imageError;
            }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: theme.placeholder.imageNull, backgroundColor: theme.colors.transparenciaMarron }} />
        )}
        {onSale && (
          <SaleBadge>
            <FontAwesomeIcon icon={faTag} />
            <span>¡Oferta!</span>
          </SaleBadge>
        )}
      </ImageWrapper>

      <CardTitle>{name}</CardTitle>

      <PriceContainer $onSale={onSale}>
        <span className="price-regular">${price.toLocaleString()}</span>
        {onSale && salePrice && (
          <span className="price-sale">${salePrice.toLocaleString()}</span>
        )}
      </PriceContainer>

      {description && <CardDescription>{description}</CardDescription>}
    </CardContainer>
  );
};
