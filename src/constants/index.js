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
} from "../assets";
  
export const navLinks = [
    {
      id: "about",
      title: "Про меня",
    },
    {
      id: "work",
      title: "Мои работы",
    },
    {
      id: "contact",
      title: "Контакты",
    },
];
  
const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: ".Net Developer",
      icon: creator,
    },
];
  
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: 'dotnet',
      icon: dotnet,
    },
    {
      name: 'csharp',
      icon: csharp,
    },
    {
      name: 'postgre',
      icon: postgre,
    },
    {
      name: 'microsoftsql',
      icon: microsoftsql,
    }
];
  
const experiences = [
    {
      title: ".Net Developer",
      company_name: "Хакатон Makers",
      icon: makers,
      iconBg: "#383E56",
      date: "Март 2023 - Апрель 2023",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad. Cumque eos soluta, dolore id itaque amet ex modi ullam recusandae velit?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad. Cumque eos soluta, dolore id itaque amet ex modi ullam recusandae velit?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad. Cumque eos soluta, dolore id itaque amet ex modi ullam recusandae velit?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad. Cumque eos soluta, dolore id itaque amet ex modi ullam recusandae velit?",
      ],
    },
    {
      title: ".Net Developer",
      company_name: "Timely Soft",
      icon: timely,
      iconBg: "#383E5",
      date: "Май 2023 - Октябрь 2023",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad. Cumque eos soluta, dolore id itaque amet ex modi ullam recusandae velit?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad. Cumque eos soluta, dolore id itaque amet ex modi ullam recusandae velit?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad. Cumque eos soluta, dolore id itaque amet ex modi ullam recusandae velit?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad. Cumque eos soluta, dolore id itaque amet ex modi ullam recusandae velit?",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Booster IT School",
      icon: boosterLogo,
      iconBg: "#383E56",
      date: "Январь 2022 - настоящее время",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad. Cumque eos soluta, dolore id itaque amet ex modi ullam recusandae velit?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad. Cumque eos soluta, dolore id itaque amet ex modi ullam recusandae velit?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad. Cumque eos soluta, dolore id itaque amet ex modi ullam recusandae velit?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad. Cumque eos soluta, dolore id itaque amet ex modi ullam recusandae velit?",
      ],
    },
];
  
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
  
const projects = [
    {
      name: "Booster IT School",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: booster,
      source_code_link_icon: gitlab,
      source_code_link: "https://gitlab.com/diligen1/booste_front/-/tree/dev?ref_type=heads",
      site_link: 'https://booster-school.vercel.app/',
    },
    {
      name: "Marvel Fan Site",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: marvel,
      source_code_link_icon: github,
      source_code_link: "https://github.com/KimIlia91/marvel",
      site_link: 'https://marvel-comics-db.netlify.app/',
    },
    {
      name: "Food Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque excepturi rem dolorem explicabo obcaecati ducimus ipsum necessitatibus ad.",
      tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: food,
      source_code_link_icon: github,
      source_code_link: "https://github.com/KimIlia91/food",
      site_link: 'https://food-ilia-kim.netlify.app/',
    },
];
  
export { services, technologies, experiences, testimonials, projects };