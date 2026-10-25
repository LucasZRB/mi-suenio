import { 
  HeroContainer, 
  HeroContent, 
  HeroSubtitle, 
  HeroTitle, 
  HeroText, 
  HeroButtons, 
  HeroImageContainer 
} from './Hero.styles';
import { Button } from '../../common/Button';

export const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroSubtitle>Delicadeza y moda al alcance de todas.</HeroSubtitle>
        <HeroTitle>
          Moda para <span>todas</span> nosotras
        </HeroTitle>
        <HeroText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo minus, nisi sem senectus litora gravida vivamus netus odio, tellus turpis habitasse auctor ante inceptos porta omnis.
        </HeroText>
        <HeroButtons>
          <Button href="#" variant="outline" type="Cormorant">+500 clientas felices</Button>
          <Button href="#" variant="solid" type="Cormorant">Novedades</Button>
        </HeroButtons>
      </HeroContent>

      <HeroImageContainer>
        {/* El Lazy Loading lo usamos por su el usuario
        tiene una conexión lenta y descargue poco a poco
        las imágenes según las mire y no todas de golpe */}
        <img 
          src="/assets/images/hero-model.jpg" 
          alt="Moda y delicadeza - Mi Sueño" 
          loading="lazy" 
        />
      </HeroImageContainer>
    </HeroContainer>
  );
};
