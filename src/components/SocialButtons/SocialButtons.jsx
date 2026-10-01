import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import "./SocialButtons.css";

const socials = [
  {
    id: "facebook",
    name: "Facebook",
    handle: "blowup.cia",
    url: "https://www.facebook.com/blowup.cia",
    icon: FaFacebookF,
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@blowup.cia",
    url: "https://www.instagram.com/blowup.cia/",
    icon: FaInstagram,
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "@corpo999",
    url: "https://www.youtube.com/@corpo999",
    icon: FaYoutube,
  },
];

export default function SocialButtons() {
  return (
    <nav className="blow-socials" aria-label="Blow Up social media">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.id}
            className={`blow-social blow-social--${social.id}`}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Blow Up on ${social.name}`}
          >
            {/* BLOQUES DE COLOR DECORATIVOS */}
            <span className="blow-social__mosaic" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </span>

            {/* ICONO */}
            <span className="blow-social__icon">
              <Icon />
            </span>

            {/* TEXTO */}
            <span className="blow-social__content">
              <span className="blow-social__name">{social.name}</span>

              <span className="blow-social__handle">{social.handle}</span>
            </span>

            {/* FLECHA */}
            <span className="blow-social__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        );
      })}
    </nav>
  );
}
