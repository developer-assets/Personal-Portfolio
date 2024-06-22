import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FooterLinks } from "../typescript/types";

const Footer: React.FC = () => {
  const links: FooterLinks = [
    {
      icon: <Mail />,
      link: "mailto:999patrickobama@gmail.com",
    },
    {
      icon: <Github />,
      link: "https://github.com/developer-assets",
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/patrick-obama-8269152bb/",
    },
  ];

  return (
    <footer>
      <section>
        <h4>Get in touch:</h4>
        <address>
          {links.map((item, index) => {
            return (
              <a key={index} href={item.link} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            );
          })}
        </address>
      </section>
    </footer>
  );
};

export default Footer;
