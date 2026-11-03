import { 
  HeroContainer, 
  HeroContent, 
  HeroSubtitle, 
  HeroTitle, 
  HeroText, 
  HeroButtons, 
  HeroImageContainer, 
  HeroSectionWrapper
} from './Hero.styles';
import { Button } from '../../common/Button';
import presentacion from "../../../assets/images/presentacion.jpg";
import presentacionTablet from "../../../assets/images/presentacion_tablet.png";

export const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <HeroContainer>
        <HeroContent>
          <HeroSubtitle>Delicadeza y moda al alcance de todas.</HeroSubtitle>
          <HeroTitle>
            Moda para <span>todas</span> nosotras
          </HeroTitle>
          <HeroText>
            Desde las adolescentes del barrio hasta las abuelas más elegantes. En Mi Sueño encontrás tu prenda favorita sin importar cuántas velas soplaste.
          </HeroText>
          <HeroButtons>
            <Button href="#" variant="outline" type="Cormorant">+500 clientas felices</Button>
            <Button href="#" variant="solid" type="Cormorant">Novedades</Button>
          </HeroButtons>
        </HeroContent>

        <HeroImageContainer>
          <picture>
            {/* Solo se mostrará en pantallas mayores a 993px */}
            <source media="(min-width: 993px)" srcSet={presentacion} />

            {/* La etiqueta <img> sirve como fallback para mobile y navegadores antiguos */}
            {/* El Lazy Loading lo usamos por su el usuario
            tiene una conexión lenta y descargue poco a poco
            las imágenes según las mire y no todas de golpe */}
            <img 
              src={presentacionTablet} 
              alt="Moda y delicadeza - Mi Sueño" 
              loading="lazy" 
              aria-hidden
              onError={(e) => {
                // Si falla la carga, ocultamos la imagen y evitamos que rompa el layout
                e.target.style.display = 'none';
              }}
            />
          </picture>
        </HeroImageContainer>
      </HeroContainer>
    </HeroSectionWrapper>
  );
};
