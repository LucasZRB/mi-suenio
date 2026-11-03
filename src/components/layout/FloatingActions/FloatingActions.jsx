import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FloatingContainer, FloatingButton } from './FloatingActions.styles';

export const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Detectar la posición del scroll para mostrar/ocultar el botón de subir
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Reemplaza con tu número de teléfono real (con código de país y área, sin espacios ni símbolos)
  const whatsappNumber = '5491112345678'; 
  const whatsappMessage = encodeURIComponent('Hola! Me gustaría hacer una consulta sobre los productos del catálogo.');

  return (
    <FloatingContainer>
      {/* Botón de Volver Arriba (Solo aparece si se hizo scroll) */}
      <FloatingButton
        as="button"
        onClick={scrollToTop}
        $isVisible={showScrollTop}
        title="Volver arriba"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </FloatingButton>

      {/* Botón de WhatsApp (Siempre visible, cómodo y estético) */}
      <FloatingButton
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        $isWhatsApp={true}
        $isVisible={true}
        title="Contactar por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </FloatingButton>
    </FloatingContainer>
  );
};
