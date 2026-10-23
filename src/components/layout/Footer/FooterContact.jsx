import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { ContactColumn, ColumnHeading, ContactItem, ContactLink } from './Footer.styles';

export const FooterContact = () => {
  // Reemplazar con los datos reales (Formato sin espacios ni símbolos)
  const googleMapsAddress = encodeURIComponent("Sixto Laspiur 2251, Bahia Blanca, Buenos Aires");
  const whatsappNumber = "542915221742"; // Código país + código área + número sin el 15
  const emailAddress = "sonia_noemi@live.com.ar";

  const contactItems = [
    {
      icon: faMapMarkerAlt,
      text: "Sixto Laspiur 2251, Bahia Blanca",
      href: `https://google.com/maps/place/${googleMapsAddress}`,
      isExternal: true,
    },
    {
      icon: faPhone,
      text: "Enviar Mensaje (WhatsApp)",
      href: `https://wa.me/${whatsappNumber}`,
      isExternal: true,
    },
    {
      icon: faEnvelope,
      text: `Envíanos un correo a: ${emailAddress}`,
      href: `mailto:${emailAddress}`,
      isExternal: false,
    },
    {
      icon: faClock,
      text: "Lun a Sáb - 09:00 a 13:00hs y 16:30 a 20:30hs",
      href: null, // No es enlace
    },
  ];

  return (
    <ContactColumn>
      <ColumnHeading>CONTACTOS</ColumnHeading>
      {contactItems.map((item, index) => (
        <ContactItem key={index}>
          {item.href ? (
            <ContactLink href={item.href}>
              <FontAwesomeIcon icon={item.icon} className="icon-fixed" />
              <span>{item.text}</span>
            </ContactLink>
          ) : (
            <>
              <FontAwesomeIcon icon={item.icon} className="icon-fixed" />
              <span>{item.text}</span>
            </>
          )}
        </ContactItem>
      ))}
    </ContactColumn>
  );
};
