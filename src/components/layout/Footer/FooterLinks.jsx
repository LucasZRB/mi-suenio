import { LinksColumn, ColumnHeading, LinkList, FooterLink } from './Footer.styles';

const serviceLinks = [
  // Esto lo tenemos que dicutir también
  // Son más pantallas, así que habría que diseñarlas
  // O cambiar/quitar los enlaces
  { name: 'Preguntas Frecuentes', url: '#' },
  { name: 'Políticas de cambio', url: '#' },
  { name: 'Promociones', url: '#' },
];

export const FooterLinks = () => {
  return (
    <LinksColumn>
      <ColumnHeading>SERVICIO AL CLIENTE</ColumnHeading>
      <LinkList>
        {serviceLinks.map((link, index) => (
          <li key={index}>
            <FooterLink href={link.url}>{link.name}</FooterLink>
          </li>
        ))}
      </LinkList>
    </LinksColumn>
  );
};
