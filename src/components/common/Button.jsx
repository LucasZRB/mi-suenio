import styled from 'styled-components';

export const Button = ({ href, onClick, children }) => {
  return (
    <CtaButton href={href} onClick={onClick}>
      {children}
    </CtaButton>
  );
};

const CtaButton = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: ${({ theme }) => theme.colors.rosaPardo};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 32px;
  border-radius: 32px;
  /* Este también, comprueba si te gusta más con
  o sin el bold */
  font-weight: bold;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.rosa20};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.rosaPardo};
    box-shadow: ${({ theme }) => theme.shadows.black30};
    transform: translateY(-2px);
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    text-align: center;
  }

  /* Comportamiento específico en Mobile: pasa a ser un link plano acorde al resto */
  ${({ theme }) => theme.breakpoints.mobile} {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.marronOscuro};
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: normal;
    width: 100%;
    text-align: center;

    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.oro};
      box-shadow: none;
      transform: none;
    }
  }
`;
