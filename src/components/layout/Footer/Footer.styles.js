import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.marronOscuro};
  color: ${({ theme }) => theme.colors.white};
  padding: 64px 64px 32px;
  font-family: ${({ theme }) => theme.fonts.body};

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 32px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 16px;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;

  /* Adaptación automática para TABLETS */
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  /* Adaptación automática para MÓVILES */
  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr; /* Colapsa todo en una sola columna vertical */
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrandTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 400;
  margin-bottom: 4px;
`;

export const BrandSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: 32px;
`;

export const BrandText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.85;
  max-width: 400px;
`;

export const SocialContainer = styled.div`
  margin-top: 32px;
`;

export const SocialList = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

export const SocialIconLink = styled.a.attrs((props) => ({
  href: props.href || "#",
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(253, 248, 245, 0.10);
  border: 1px solid rgba(253, 248, 245, 0.20);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.rosaPardo};
    border-color: ${({ theme }) => theme.colors.rosaPardo};
    transform: translateY(-3px);
  }
`;

export const ColumnHeading = styled.h4`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: 1px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const LinksColumn = styled.div`
  /* En tablets movemos esta columna si es necesario, o la dejamos fluir */
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 12px;
  }
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 16px;
  opacity: 0.8;
  transition: opacity 0.2s, color 0.2s;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.rosaPardo};
  }
`;

export const ContactColumn = styled.div`
  /* En tablets la columna de contacto ocupará todo el ancho abajo si es necesario */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span 2;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: span 1;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.4;

  .icon-fixed {
    color: ${({ theme }) => theme.colors.rosaPardo};
    margin-top: 3px;
    width: 16px;
    text-align: center;
  }
  
  span {
    opacity: 0.85;
  }
`;

export const ContactLink = styled.a.attrs(({ href, $isExternal }) => ({
  href: href || "#",
  target: $isExternal ? "_blank" : "_self",
  rel: $isExternal ? "noopener noreferrer" : undefined,
}))`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.colors.oro};
    svg { transform: scale(1.15); }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.marronClaro};
  margin-top: 32px;
  padding-top: 16px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  opacity: 0.6;
`;
