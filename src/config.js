import { ReactComponent as HeroImage } from "./assets/hero.svg";
import { ReactComponent as DownloadIcon } from "./assets/download_icon.svg";
import { ReactComponent as AboutImage } from "./assets/about.svg";
import HomeIcon from "./assets/home_icon.svg";
import AboutMeIcon from "./assets/about_me_icon.svg";
import LinkedInLogo from "./assets/LinkedIn_Logo.png";
import GithubLogo from "./assets/Github_logo.png";
import ChatbotImage from "./assets/bot.jpeg";
import mapImage from "./assets/map.jpeg";

export const CONFIG = {
  design: [
    {
      name: "Vaishnavi Chaudhari",
      url: "https://www.linkedin.com/in/vaishanavichaudhari/"
    }
  ],

  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vaishanavichaudhari/",
      icon: LinkedInLogo
    },
    {
      name: "Github",
      url: "https://github.com/Vaishnavi022/",
      icon: GithubLogo
    }
  ],

  logo: [
    {
      name: "Vaishnavi Chaudhari",
      url: "#home"
    }
  ],
  hero: [
    {
      first_line: "DATA SCIENCE",
      main_line: "ENGINEERING STUDENT",
      image: <HeroImage />,
      primary_button: "Hire me",
      primary_button_url: "#contact",
      primary_button_icon: "",
      secondary_button: "Download CV",
      secondary_button_url: "/Vaishnavi Narendra Chaudhari.pdf",
      secondary_button_icon: <DownloadIcon />,
      show_arrow_doodle: true
    }
  ],
  about: [
    {
      first_text: "About",
      second_text: "me",
      paragraph_lines_to_show: "7",
      paragraph:
        "I am a dedicated and hardworking Data Science and Engineering student at R. C. Patel Institute of Technology, Shirpur. I have strong skills in programming, web technologies, and problem solving, along with leadership and communication abilities. I have completed Japanese N5 certification and am currently learning N4. I enjoy building practical software solutions and continuously improving my technical and professional skills. I am eager to contribute my skills and enthusiasm to a dynamic team in the tech industry.",
      image: <AboutImage />,
      button_text: {
        more: "Read More",
        less: "Show Less"
      },
      show_doodles: true
    }
  ],
  projects: [
    {
      first_text: "My",
      second_text: "Projects",
      tabs: [
        {
          id: 1,
          title: "Web & Software",
          project_detail: [
            {
              id: 1,
              name: "Convolutional Image Recognition Chatbot",
              image: ChatbotImage,
              url: "https://github.com/Vaishnavi022/ChatBot.git"
            },
            {
              id: 2,
              name: "CivicMap: Local Issue Mapping Platform",
              image: mapImage,
              url: "https://github.com/Vaishnavi022/Civic-Map.git"
            },
            {
              id: 1,
              name: "Visit Github for more projects",
              image: "https://avatars.githubusercontent.com/u/138233760?v=4",
              url: "https://github.com/Vaishnavi022/"
            }
          ]
        }
      ]
    }
  ],
  footer: [
    {
      showNavLinks: true,
      showSocialMedia: true,
      footerText: "© 2025 Vaishnavi Narendra Chaudhari. All rights reserved."
    }
  ],
  navLinks: [
    {
      name: "Home",
      url: "#home",
      icon: HomeIcon
    },
    {
      name: "About Me",
      url: "#about",
      icon: AboutMeIcon
    },
    {
      name: "Contact",
      url: "mailto:chaudharivaishanavi4@gmail.com"
      // icon: ContactIcon
    }
  ]
};
