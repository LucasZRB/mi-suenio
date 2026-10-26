import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { SocialList, SocialIconLink } from '../layout/Footer/Footer.styles';

const socialLinksData = [
  // Luego solo cambia los links por las urls correctas
  // El resto déjalo
  // Los labels son para accesibilidad, así que no te preocupes
  { icon: faInstagram, url: 'https://www.instagram.com/mi_sueno6?utm_source=ig_web_button_share_sheet&obrf=ZDNlZDc0MzIxNw==', label: 'Instagram' },
  { icon: faTiktok, url: 'https://www.tiktok.com/@sonia.noemi.ladre?_r=1&_t=ZS-9AtCmXOr2Pw', label: 'TikTok' },
  { icon: faFacebookF, url: 'https://www.facebook.com/profile.php?id=100054559114286', label: 'Facebook' },
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
