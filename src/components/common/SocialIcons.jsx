import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { SocialList, SocialIconLink } from '../layout/Footer/Footer.styles';

const socialLinksData = [
  // Luego solo cambia los links por las urls correctas
  // El resto déjalo
  // Los labels son para accesibilidad, así que no te preocupes
  { icon: faInstagram, url: 'https://instagram.com', label: 'Instagram' },
  { icon: faTiktok, url: 'https://tiktok.com', label: 'TikTok' },
  { icon: faFacebookF, url: 'https://facebook.com', label: 'Facebook' },
];

export const SocialIcons = () => {
  return (
    <SocialList>
      {socialLinksData.map((social, index) => (
        <SocialIconLink key={index} href={social.url} aria-label={social.label}>
          <FontAwesomeIcon icon={social.icon} />
        </SocialIconLink>
      ))}
    </SocialList>
  );
};
