import { BsLinkedin, BsGithub, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const SOCIAL_LINKS = [
  {
    name: "Linked In",
    url: "https://www.linkedin.com/in/amrezzatofficial/",
    icon: (
      <BsLinkedin
        size="2rem"
        className="ease-in transition-all duration-300 cursor-pointer hover:text-gold"
      />
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/amrya200t",
    icon: (
      <BsGithub
        size="2rem"
        className="ease-in transition-all duration-300 cursor-pointer hover:text-gold"
      />
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/AmroEAhmed",
    icon: (
      <BsTwitter
        size="2rem"
        className="ease-in transition-all duration-300 cursor-pointer hover:text-gold"
      />
    ),
  },
  {
    name: "Whatsapp",
    url: "whatsapp://send?phone=+2001222978275",
    icon: (
      <BsWhatsapp
        size="2rem"
        className="ease-in transition-all duration-300 cursor-pointer hover:text-gold"
      />
    ),
  },
  {
    name: "Email",
    url: "mailto:amr@amrezzat.com",
    icon: (
      <MdEmail
        size="2.4rem"
        className="ease-in transition-all duration-300 cursor-pointer hover:text-gold"
      />
    ),
  },
];

export default SOCIAL_LINKS;
