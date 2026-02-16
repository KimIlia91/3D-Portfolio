import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  docker,
  booster,
  marvel,
  food,
  boosterLogo,
  timely,
  makers,
  dotnet,
  csharp,
  postgre,
  microsoftsql,
  github,
  gitlab,
  nextjs,
  irsen,
  innovationDigital,
  smartCity,
  foel,
} from "../assets";
import { translations } from "../i18n";

export const getNavLinks = (language = 'ru') => [
  {
    id: "about",
    title: translations[language].navbar.links.about,
  },
  {
    id: "work",
    title: translations[language].navbar.links.work,
  },
  {
    id: "contact",
    title: translations[language].navbar.links.contact,
  },
];

export const getServices = (language = 'ru') => [
  {
    title: translations[language].services.webDeveloper,
    icon: web,
  },
  {
    title: translations[language].services.reactDeveloper,
    icon: mobile,
  },
  {
    title: translations[language].services.backendDeveloper,
    icon: backend,
  },
  {
    title: translations[language].services.dotnetDeveloper,
    icon: creator,
  },
];

export const navLinks = getNavLinks('ru');
const services = getServices('ru');

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: '.Net',
    icon: dotnet,
  },
  {
    name: 'C#',
    icon: csharp,
  },
  {
    name: 'Postgre',
    icon: postgre,
  },
  {
    name: 'Microsoft SQL',
    icon: microsoftsql,
  }
];

export const getExperiences = (language = 'ru') => {
  const experiencesData = translations[language].experience.experiences;

  return [
    {
      title: experiencesData[0].title,
      company_name: experiencesData[0].company,
      icon: makers,
      iconBg: "#383E56",
      date: experiencesData[0].date,
      points: experiencesData[0].points,
    },
    {
      title: experiencesData[1].title,
      company_name: experiencesData[1].company,
      icon: timely,
      iconBg: "#383E5",
      date: experiencesData[1].date,
      points: experiencesData[1].points,
    },
    {
      title: experiencesData[2].title,
      company_name: experiencesData[2].company,
      icon: boosterLogo,
      iconBg: "#383E56",
      date: experiencesData[2].date,
      points: experiencesData[2].points,
    },
    {
      title: experiencesData[3].title,
      company_name: experiencesData[3].company,
      icon: innovationDigital,
      iconBg: "#383E56",
      date: experiencesData[3].date,
      points: experiencesData[3].points,
    },
    {
      title: experiencesData[4].title,
      company_name: experiencesData[4].company,
      icon: smartCity,
      iconBg: "#383E56",
      date: experiencesData[4].date,
      points: experiencesData[4].points,
    },
  ];
};

const experiences = getExperiences('ru');

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "Lorem ipsum",
    designation: "Lorem",
    company: "Lorem ipsum",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "Lorem ipsum",
    designation: "Lorem",
    company: "Lorem ipsum",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "Lorem ipsum",
    designation: "Lorem",
    company: "Lorem ipsum",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const getProjects = (language = 'ru') => {
  const projectsData = translations[language].projects.list;

  return [
    {
      name: projectsData[0].name,
      description: projectsData[0].description,
      tags: projectsData[0].tags,
      image: irsen,
      source_code_link_icon: github,
      source_code_link: "https://github.com/KimIlia91/irsen",
      site_link: 'https://irsen.vercel.app/',
    },
    {
      name: projectsData[1].name,
      description: projectsData[1].description,
      tags: projectsData[1].tags,
      image: foel,
      source_code_link_icon: gitlab,
      source_code_link: "",
      site_link: "https://foel.kg/ru",
    },
  ];
};

const projects = getProjects('ru');

export { services, technologies, experiences, testimonials, projects };