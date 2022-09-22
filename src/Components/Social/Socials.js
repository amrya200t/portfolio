import React from "react";
import SOCIAL_LINKS from "./SOCIAL_LINKS";
import SocialLink from "./SocialLink";

export default function Socials(props) {
  return (
    <aside className={`mt-8 text-gold ${props.className}`}>
      <h2>Find me on social media</h2>
      <ul
        className={`flex gap-4 text-light ${
          props.hireMe ? "" : "justify-center"
        } items-center mt-4`}
      >
        {SOCIAL_LINKS.map((link) => (
          <SocialLink
            key={link.name}
            title={link.name}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </ul>
    </aside>
  );
}
