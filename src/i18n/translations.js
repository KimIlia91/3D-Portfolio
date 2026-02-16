export const translations = {
  en: {
    meta: {
      title: "Portfolio | Ilia Kim",
      description: "WEB-developer from Bishkek specializing in web application and website development"
    },
    navbar: {
      title: "Portfolio",
      name: "Ilia Kim",
      links: {
        about: "About",
        work: "My Works",
        contact: "Contact"
      },
      cv: "CV"
    },
    hero: {
      name: "Ilia Kim",
      description: "WEB-developer from Bishkek",
      description2: "specializing in web development",
      description3: "applications and websites"
    },
    about: {
      subtitle: "About me",
      title: "My name is",
      titleName: "Ilia",
      paragraph1: "I am a beginner programmer with experience in C# .NET and React NextJS. Currently, I am interested in web development, but my ambitions go far beyond frontend. My goal is to become a full-fledged full-stack developer, mastering both external and internal aspects of application development. I am motivated by creating high-load systems with complex architecture, covering both backend and user interface. With experience in C# and JS, I strive for constant skill growth and their practical application. I am confident that in the future this will open up many opportunities for development, creativity and financial well-being!",
      paragraph2: "Currently, I am actively looking for opportunities to practice, where I can confirm my knowledge and gain new experience. Ready to contribute and learn in practice to become an even more qualified developer."
    },
    experience: {
      subtitle: "Experience",
      title: "My experience",
      experiences: [
        {
          title: ".Net Developer",
          company: "Hackathon participation (Makers Juniors dev)",
          date: "March 2023 - April 2023",
          points: [
            "\"Online Cinema\" project - a web application, backend development on ASP.NET Core WebAPI platform",
            "Backend: ASP.NET Core Web API, Entity Framework Core for database work",
            "Applied N-Layer principles to improve modularity, manageability and scalability of the application",
            "MS SQL for data storage",
            "ASP.NET Core Identity library for authentication and authorization management",
            "ASP.NET Core Identity library, Role-Based Access Control (RBAC)",
            "Used Azure Blob Storage (Training subscription) for storing video files, providing efficient and scalable storage of media content"
          ]
        },
        {
          title: "Intern .NET Developer",
          company: "Timely Soft",
          date: "May 2023 - October 2023",
          points: [
            "Development of the backend of the CRM system for convenient submission of quarterly reports by residents of the High Technology Park.",
            "The project successfully used the MediatR library in combination with the CQRS (Command Query Responsibility Segregation) pattern and applied Clean Architecture principles to improve the modularity, manageability and scalability of the application",
            "Working with PostgreSQL databases",
            "Interaction with the database using Entity Framework Core",
            "Working in a team of 9 people using Scrum and Kanban methodologies in Azure DevOps",
            "ASP.NET Core Identity library, Role-Based Access Control (RBAC)"
          ]
        },
        {
          title: "Intern Frontend Developer",
          company: "Booster IT School",
          date: "January 2023 - February 2023",
          points: [
            "Web application for IT school developed using Next.js. My responsibility included developing the web version of the application, including layout of web pages according to the designer's layout and implementation of UI/UX elements to create an interactive and understandable user interface.",
            "Development of the Frontend part of the application using the technology stack: Next.js, React, TypeScript, Tailwind CSS, RTK Query, Formik",
            "Implementation of responsive design, ensuring correct display of the site on various devices and screens",
            "Performance improvement and optimization of page loading and reduction of loading time and improvement of user experience",
            "Working in a team of 6 people using Scrum and Kanban methodologies in Asana"
          ]
        },
        {
          title: "Junior Frontend Developer",
          company: "Digital Innovations LLC",
          date: "October 2024 – September 2025",
          points: [
            "Development and support of the client side of the web application (Frontend)",
            "Implementation of user interfaces and business logic on the client side",
            "Integration with backend API and participation in designing frontend-backend interaction",
            "Stack: Svelte, TypeScript",
            "HTML5, CSS3, PostCSS, Tailwind CSS, SCSS",
            "UI libraries: Swiper, Cupertino UI",
            "REST API integration"
          ]
        },
        {
          title: "Junior Java Backend Developer",
          company: "Smart City",
          date: "November 2024 – December 2025",
          points: [
            "Working in a team of 4 people (Frontend, Backend, Team Lead, PM)",
            "Development of a backend system for uploading, storing and displaying advertising videos on digital billboards",
            "Implementation of API for content management (video upload, metadata, publication, display)",
            "Stack: Java 17, Spring Boot (Web, Security, Data JPA, Validation)",
            "gRPC, REST API",
            "JWT, OAuth2, Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC)",
            "PostgreSQL",
            "MinIO / S3-compatible storage for storing media files",
            "Microservices architecture",
            "Clean Architecture"
          ]
        }
      ]
    },
    projects: {
      subtitle: "My works",
      title: "Projects",
      description: "The presented projects mainly show my experience in frontend development: layout, working with styles and JavaScript. Examples of backend and working with APIs can be viewed in my repositories on GitHub and GitLab. My CV can be downloaded in the site header.",
      list: [
        {
          name: "Irsen Media",
          description: "Landing page of a company providing outdoor advertising services on Mediaboards. The site has an interactive Mediaboard so that the client can upload their advertising video and see how their advertising will look on the Mediaboard, there is a form for sending contact information.",
          tags: [
            { name: "next.js", color: "blue-text-gradient" },
            { name: "tailwindcss", color: "green-text-gradient" },
            { name: "framermotion", color: "pink-text-gradient" }
          ]
        },
        {
          name: "FOEL",
          description: "Multi-page corporate website on Next.js. The site features an interactive map where you can view screens and mediaboards by location, go to details and easily navigate between objects on the map. The site is responsive, with clear and intuitive navigation through sections and pages.",
          tags: [
            { name: "next.js", color: "blue-text-gradient" },
            { name: "tailwindcss", color: "green-text-gradient" },
            { name: "map", color: "pink-text-gradient" }
          ]
        }
      ]
    },
    contact: {
      subtitle: "Get in touch",
      title: "Contact",
      form: {
        name: "Name",
        namePlaceholder: "What's your name?",
        email: "Email",
        emailPlaceholder: "What's your email?",
        message: "Message",
        messagePlaceholder: "What do you want to know?",
        sending: "Sending...",
        send: "Send"
      },
      successMessage: "Thank you {name}. Your message has been sent successfully! I will contact you as soon as possible",
      errorMessage: "An error occurred while sending the message. Please try again later.",
      alternativeTitle: "Contact me in a convenient way:"
    },
    footer: {
      copyright: "IliaKim all rights reserved"
    },
    services: {
      webDeveloper: "Web Developer",
      reactDeveloper: "React Developer",
      backendDeveloper: "Backend Developer",
      dotnetDeveloper: ".Net Developer"
    }
  },
  ru: {
    meta: {
      title: "Портфолио | Илья Ким",
      description: "WEB-разработчик из города Бишкек специализирующийся на разработке веб-приложений и сайтов"
    },
    navbar: {
      title: "Портфолио",
      name: "Илья Ким",
      links: {
        about: "Про меня",
        work: "Мои работы",
        contact: "Контакты"
      },
      cv: "CV"
    },
    hero: {
      name: "Илья Ким",
      description: "WEB-разработчик из города Бишкек",
      description2: "специализирующийся на разработке",
      description3: "веб-приложений и сайтов"
    },
    about: {
      subtitle: "Про меня",
      title: "Меня зовут",
      titleName: "Илья",
      paragraph1: "Я начинающий программист, с опытом в C# .NET и React NextJS. В данный момент я заинтересован в веб-разработке, однако мои амбиции выходят далеко за рамки фронтенда. Моя цель — стать полноценным full-stack разработчиком, владея как внешними, так и внутренними аспектами разработки приложений. Меня мотивирует создание высоконагруженных систем со сложной архитектурой, охватывая как бекенд, так и пользовательский интерфейс. С опытом работы в C# и JS я стремлюсь к постоянному росту навыков и их применению на практике. Я уверен, что в будущем это откроет мне множество возможностей для развития, творчества и финансового благополучия!",
      paragraph2: "В настоящее время я активно ищу возможности для практики, где смогу утвердить свои знания и получить новый опыт. Готов внести свой вклад и обучаться на практике, чтобы стать еще более квалифицированным разработчиком."
    },
    experience: {
      subtitle: "Опыт",
      title: "Чем я буду полезен",
      experiences: [
        {
          title: ".Net Developer",
          company: "Участие в хакатоне (Makers Juniors dev)",
          date: "Март 2023 - Апрель 2023",
          points: [
            "Проект «Онлайн-кинотеатра» — веб-приложение, разработка серверной части на платформе ASP.NET Core WebAPI",
            "Серверная часть: ASP.NET Core Web API, Entity Framework Core для работы с базой данных",
            "Применяли принципы N-Layer для улучшения модульности, управляемости и масштабируемости приложения",
            "MS SQL для хранения данных",
            "Библиотека упарвления аутентификацией и авторизацией ASP.NET Core Identity",
            "Библиотека ASP.NET Core Identity, модель управления правами на основе ролей (RBAC)",
            "Использовали Azure Blob Storage (Учебная подписка) для хранения видео файлов, обеспечивая эффективное и масштабируемое хранение медиаконтента"
          ]
        },
        {
          title: "Стажёр .NET Developer",
          company: "Timely Soft",
          date: "Май 2023 - Октябрь 2023",
          points: [
            "Разработка серверной части CRM системы для удобной сдачи квартальных отчётов резидентов Парка Высоких технологий.",
            "В проекте успешно использовали библиотеку MediatR в сочетании с паттерном CQRS (Command Query Responsibility Segregation) и применяли принципы Clean Architecture для улучшения модульности, управляемости и масштабируемости приложения",
            "Работа с базами данных PostgreSQL",
            "Взаимодействие с базой данных с помощью Entity Framework Core",
            "Работа в команде из 9 человек, использующих методологии Scrum и Kanban в Azure DevOp",
            "Библиотека ASP.NET Core Identity, модель управления правами на основе ролей (RBAC)"
          ]
        },
        {
          title: "Стажер Frontend Developer",
          company: "Booster IT School",
          date: "Январь 2023 - Февраль 2023",
          points: [
            "Веб-приложение для школы IT, разработанное с использованием Next.js. Моя обязанность включала разработку веб-версии приложения включала верстку веб-страниц согласно макету дизайнера и реализацию UI/UX элементов для создания интерактивного и понятного пользовательского интерфейса.",
            "Разработка Frontend части приложения с применением стека технологий: Next.js, React, TypeScript, Tailwind CSS, RTK Query, Formik",
            "Внедрение адаптивного дизайна, обеспечивающего корректное отображение сайта на различных устройствах и экранах",
            "Улучшение производительности и оптимизация загрузки страниц и сокращению времени загрузки и улучшению пользовательского опыта",
            "Работа в команде из 6 человек, использующих методологии Scrum и Kanban в Asana"
          ]
        },
        {
          title: "Junior Frontend Developer",
          company: "ОсОО Цифровые инновации",
          date: "Октябрь 2024 – Сентябрь 2025",
          points: [
            "Разработка и поддержка клиентской части веб-приложения (Frontend)",
            "Реализация пользовательских интерфейсов и бизнес-логики на стороне клиента",
            "Интеграция с backend API и участие в проектировании взаимодействия фронтенда и бэкенда",
            "Стек: Svelte, TypeScript",
            "HTML5, CSS3, PostCSS, Tailwind CSS, SCSS",
            "UI libraries: Swiper, Cupertino UI",
            "REST API integration"
          ]
        },
        {
          title: "Junior Java Backend Developer",
          company: "Smart City",
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
            "Clean Architecture"
          ]
        }
      ]
    },
    projects: {
      subtitle: "Мои работы",
      title: "Проекты",
      description: "Представленные проекты в основном показывают мой опыт во фронтенд-разработке: вёрстке, работе со стилями и JavaScript. Примеры бэкенд-части и работы с API можно посмотреть в моих репозиториях на GitHub и GitLab. Моё CV можно скачать в шапке сайта.",
      list: [
        {
          name: "Irsen Media",
          description: "Landing page компании предоставляющей услуги наружной рекламы на Медиабордах. На сайте есть интерактивный Медиаборд чтобы клиент мог загрузить свой рекламный ролик и прмерно посмотреть как его реклама будет выглядеть на Медиаборде, присуствует форма для отправки контактной информации.",
          tags: [
            { name: "next.js", color: "blue-text-gradient" },
            { name: "tailwindcss", color: "green-text-gradient" },
            { name: "framermotion", color: "pink-text-gradient" }
          ]
        },
        {
          name: "FOEL",
          description: "Мультистраничный корпоративный сайт на Next.js. На сайте представлена интерактивная карта, где можно просматривать экраны/медиаборды по локациям, переходить к деталям и удобно ориентироваться по объектам на карте. Сайт адаптивный, с понятной навигацией по разделам и страницам.",
          tags: [
            { name: "next.js", color: "blue-text-gradient" },
            { name: "tailwindcss", color: "green-text-gradient" },
            { name: "map", color: "pink-text-gradient" }
          ]
        }
      ]
    },
    contact: {
      subtitle: "Свяжитесь со мной",
      title: "Контакты",
      form: {
        name: "Имя",
        namePlaceholder: "Ваше имя?",
        email: "Email",
        emailPlaceholder: "Ваша электронная почта?",
        message: "Сообщение",
        messagePlaceholder: "Что вы хотите узнать?",
        sending: "Отправка...",
        send: "Отправить"
      },
      successMessage: "Спасибо {name}. Ваше сообщение успешно отправлено! Я свяжусь с Вами в ближайшее время",
      errorMessage: "Произошла ошибка во время отправки сообщения. Попробуйте ещё раз позже.",
      alternativeTitle: "Свяжитесь удобным для вас способом:"
    },
    footer: {
      copyright: "IliaKim all rights reserved"
    },
    services: {
      webDeveloper: "Web Developer",
      reactDeveloper: "React Developer",
      backendDeveloper: "Backend Developer",
      dotnetDeveloper: ".Net Developer"
    }
  }
};
