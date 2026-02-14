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

const experiences = [
  {
    title: ".Net Developer",
    company_name: "Участие в хакатоне (Makers Juniors dev)",
    icon: makers,
    iconBg: "#383E56",
    date: "Март 2023 - Апрель 2023",
    points: [
      "Проект «Онлайн-кинотеатра» — веб-приложение, разработка серверной части на платформе ASP.NET Core WebAPI",
      "Серверная часть: ASP.NET Core Web API, Entity Framework Core для работы с базой данных",
      "Применяли принципы N-Layer для улучшения модульности, управляемости и масштабируемости приложения",
      "MS SQL для хранения данных",
      "Библиотека упарвления аутентификацией и авторизацией ASP.NET Core Identity",
      "Библиотека ASP.NET Core Identity, модель управления правами на основе ролей (RBAC)",
      "Использовали Azure Blob Storage (Учебная подписка) для хранения видео файлов, обеспечивая эффективное и масштабируемое хранение медиаконтента",
    ],
  },
  {
    title: "Стажёр .NET Developer",
    company_name: "Timely Soft",
    icon: timely,
    iconBg: "#383E5",
    date: "Май 2023 - Октябрь 2023",
    points: [
      "Разработка серверной части CRM системы для удобной сдачи квартальных отчётов резидентов Парка Высоких технологий.",
      "В проекте успешно использовали библиотеку MediatR в сочетании с паттерном CQRS (Command Query Responsibility Segregation) и применяли принципы Clean Architecture для улучшения модульности, управляемости и масштабируемости приложения",
      "Работа с базами данных PostgreSQL",
      "Взаимодействие с базой данных с помощью Entity Framework Core",
      "Работа в команде из 9 человек, использующих методологии Scrum и Kanban в Azure DevOp",
      "Библиотека ASP.NET Core Identity, модель управления правами на основе ролей (RBAC)",
    ],
  },
  {
    title: "Стажер Frontend Developer",
    company_name: "Booster IT School",
    icon: boosterLogo,
    iconBg: "#383E56",
    date: "Январь 2023 - Февраль 2023",
    points: [
      "Веб-приложение для школы IT, разработанное с использованием Next.js. Моя обязанность включала разработку веб-версии приложения включала верстку веб-страниц согласно макету дизайнера и реализацию UI/UX элементов для создания интерактивного и понятного пользовательского интерфейса.",
      "Разработка Frontend части приложения с применением стека технологий: Next.js, React, TypeScript, Tailwind CSS, RTK Query, Formik",
      "Внедрение адаптивного дизайна, обеспечивающего корректное отображение сайта на различных устройствах и экранах",
      "Улучшение производительности и оптимизация загрузки страниц и сокращению времени загрузки и улучшению пользовательского опыта",
      "Работа в команде из 6 человек, использующих методологии Scrum и Kanban в Asana",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "ОсОО Цифровые инновации",
    icon: innovationDigital,
    iconBg: "#383E56",
    date: "Октябрь 2024 – Сентябрь 2025",
    points: [
      "Разработка и поддержка клиентской части веб-приложения (Frontend)",
      "Реализация пользовательских интерфейсов и бизнес-логики на стороне клиента",
      "Интеграция с backend API и участие в проектировании взаимодействия фронтенда и бэкенда",
      "Стек: Svelte, TypeScript",
      "HTML5, CSS3, PostCSS, Tailwind CSS, SCSS",
      "UI libraries: Swiper, Cupertino UI",
      "REST API integration",
    ],
  },
  {
    title: "Junior Java Backend Developer",
    company_name: "Smart City",
    icon: smartCity,
    iconBg: "#383E56",
    date: "Ноябрь 2024 – Декабрь 2025",
    points: [
      "Работа в команде из 4 человек (Frontend, Backend, Team Lead, PM)",
      "Разработка backend-системы для загрузки, хранения и показа рекламных видео на цифровых рекламных щитах",
      "Реализация API для управления контентом (загрузка видео, метаданные, публикация, показ)",
      "Стек: Java 17, Spring Boot (Web, Security, Data JPA, Validation)",
      "gRPC, REST API",
      "JWT, OAuth2, Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC)",
      "PostgreSQL",
      "MinIO / S3-compatible storage для хранения медиафайлов",
      "Microservices architecture",
      "Clean Architecture, DDD principles",
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
  // {
  //   name: "Booster IT School",
  //   description:
  //     "Веб-платформа, которая позволяет пользователям искать, записываться и ознакамливаться с разлиными курсами IT школы BOOSTER, предоставляя удобное и эффективное решение для поиска и ознакомления с курсами IT школы, а также с информацией о жизни школы и ее новостями.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "next.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: booster,
  //   source_code_link_icon: gitlab,
  //   source_code_link: "https://gitlab.com/diligen1/booste_front/-/tree/dev?ref_type=heads",
  //   site_link: 'https://booster-school.vercel.app/',
  // },
  // {
  //   name: "Marvel Fan Site",
  //   description:
  //     "Пет-проект Marvel Fan Site - это фан-база комиксов MARVEL с подробным описанием героев и комиксов. Можно воспользоваться удобным поиском героя MARVEL с его полным описанием. На сайте можно ознакомиться с ценами на комиксы и найти необходимые издания для пополнения своей коллекции.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: marvel,
  //   source_code_link_icon: github,
  //   source_code_link: "https://github.com/KimIlia91/marvel",
  //   site_link: 'https://marvel-comics-db.netlify.app/',
  // },
  // {
  //   name: "Food Delivery",
  //   description:
  //     "Пет-проект сайта, посвященного правильному питанию. На сайте можно сделать заказ еды, выбрав из разнообразных и полезных блюд. Уникальным инструментом сайта является калькулятор калорийности, который позволяет подобрать подходящие блюда в зависимости от массы тела и калорийных потребностей.",
  //   tags: [
  //     {
  //       name: "js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: food,
  //   source_code_link_icon: github,
  //   source_code_link: "https://github.com/KimIlia91/food",
  //   site_link: 'https://food-ilia-kim.netlify.app/',
  // },
  {
    name: "Irsen Media",
    description:
      "Landing page компании предоставляющей услуги наружной рекламы на Медиабордах. На сайте есть интерактивный Медиаборд чтобы клиент мог загрузить свой рекламный ролик и прмерно посмотреть как его реклама будет выглядеть на Медиаборде, присуствует форма для отправки контактной информации.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "framermotion",
        color: "pink-text-gradient",
      },
    ],
    image: irsen,
    source_code_link_icon: github,
    source_code_link: "https://github.com/KimIlia91/irsen",
    site_link: 'https://irsen.vercel.app/',
  },
  {
    name: "FOEL",
    description:
      "Мультистраничный корпоративный сайт на Next.js. На сайте представлена интерактивная карта, где можно просматривать экраны/медиаборды по локациям, переходить к деталям и удобно ориентироваться по объектам на карте. Сайт адаптивный, с понятной навигацией по разделам и страницам.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "map",
        color: "pink-text-gradient",
      },
    ],
    image: foel,
    source_code_link_icon: gitlab,
    source_code_link: "",
    site_link: "https://foel.kg/ru",
  },
];

export { services, technologies, experiences, testimonials, projects };