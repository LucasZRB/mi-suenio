import styled from 'styled-components';
import { Link } from 'wouter';

export const Logo = ({ $sendHome = false, ...props }) => {
  return (
    <LogoWrapper {...props}>
      {$sendHome ? (
        <LogoLink href="/">
          Mi Sueño
        </LogoLink>
      ) : (
        <>Mi Sueño</>
      )}
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  /* No se ve mal de esta forma, pero comparálo por las dudas
  a ver si mantenemos este o dejamos el que elejiste */
  /* font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold; */
  font-size: ${({ theme }) => theme.fontSizes.xl};
  /* Sección para inyectar bloques de CSS adicionales directamente
  y detectar cuando es una fución (útil para cuando necesitamos inyectar props)
  Creeme, es útil a futuro xd */
  ${(props) => typeof props.$customStyles === 'function' 
    ? props.$customStyles(props) 
    : props.$customStyles}
`;

const LogoLink = styled(Link)`
  color: ${({ theme }) => theme.colors.marronOscuro};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.rosaPardo};
  }
`;
