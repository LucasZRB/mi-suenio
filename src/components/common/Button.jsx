import styled, { css } from 'styled-components';

export const Button = ({ href = "#", variant = "solid", type = "Nunito", isNav = false, onClick, children }) => {
  return (
    <StyledButton href={href} $variant={variant} $type={type} $isNav={isNav} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.a`
  padding: 16px 32px;
  border-radius: 32px;
  /* Este también, comprueba si te gusta más con
  o sin el bold */
  /* Después de tantas actualizaciones, espero que
  te guste, porque se está complejizando esto */
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  ${({ $variant, theme }) => 
    $variant === 'solid' ? css`
      background-color: ${theme.colors.rosaPardo};
      color: ${theme.colors.white};
      box-shadow: ${theme.shadows.rosa20};

      &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.rosaPardo};
        box-shadow: ${({ theme }) => theme.shadows.black30};
        transform: translateY(-2px);
      }
    ` : css`
      border: 2px solid ${theme.colors.oro};
      color: ${theme.colors.oro};
      background-color: transparent;

      &:hover {
        border: 2px solid ${theme.colors.marronOscuro};
        color: ${theme.colors.marronOscuro};
        transform: translateY(-2px);
      }
    `
  }

  ${({ $type, theme }) => 
    $type === 'Nunito' ? css`
      font-family: ${theme.fonts.body};
      font-size: ${theme.fontSizes.xs};
    ` : css`
      font-family: ${theme.fonts.title};
      font-size: ${theme.fontSizes.md};
    `
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
    text-align: center;
  }

  ${({ $isNav, theme }) => 
    $isNav && css`
      /* Comportamiento específico en Mobile: pasa a ser un link plano acorde al resto */
      ${theme.breakpoints.mobile} {
        background-color: transparent;
        color: ${theme.colors.marronOscuro};
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        font-size: ${theme.fontSizes.sm};
        font-weight: normal;

        &:hover {
          background-color: transparent;
          color: ${theme.colors.oro};
          box-shadow: none;
          transform: none;
        }
      }
    `
  }
`;
