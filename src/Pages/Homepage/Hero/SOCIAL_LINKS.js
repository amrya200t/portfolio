import { BsLinkedin, BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";

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
    name: "Facebook",
    url: "https://www.facebook.com/amrezzatofficial/",
    icon: (
      <BsFacebook
        size="2rem"
        className="ease-in transition-all duration-300 cursor-pointer hover:text-gold"
      />
    ),
  },
];

export default SOCIAL_LINKS;
