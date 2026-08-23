export type Lang = "ru" | "en";

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  year: string;
  stack: string[];
  intro: string;
  problem?: string;
  task: string;
  done: string[];
  process: string[];
  result: string;
  highlight?: string;
  testimonial?: { quote: string; author: string };
};

type Dict = {
  meta: { title: string; description: string };
  nav: { work: string; services: string; about: string; contact: string; menu: string; close: string };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    signature: string;
  };
  stats: { value: string; label: string }[];
  work: { title: string; label: string; view: string };
  services: { title: string; label: string; items: { title: string; text: string }[] };
  about: { title: string; label: string; paragraphs: string[] };
  process: { title: string; label: string; steps: { n: string; title: string; text: string }[] };
  contact: { title: string; subtitle: string; button: string; label: string };
  footer: { role: string; rights: string };
  caseUi: {
    back: string;
    intro: string;
    problem: string;
    task: string;
    done: string;
    process: string;
    screens: string;
    result: string;
    testimonial: string;
    next: string;
  };
  cases: CaseStudy[];
};

export const TELEGRAM = "https://t.me/Resbelief";

const ru: Dict = {
  meta: {
    title: "Resul Niazdurdyev — Веб-дизайн и разработка сайтов",
    description:
      "Resul Niazdurdyev создаёт современные сайты, интерфейсы и цифровые продукты — от идеи и дизайна до разработки и запуска.",
  },
  nav: { work: "Работы", services: "Услуги", about: "Обо мне", contact: "Контакты", menu: "Меню", close: "Закрыть" },
  hero: {
    kicker: "Веб-дизайн и разработка под ключ",
    title: "Создаю сайты, которые выглядят сильно и работают как продукт.",
    subtitle:
      "Веб-дизайн и разработка под ключ — от структуры и визуальной концепции до адаптива, интерактива и запуска.",
    cta1: "Посмотреть работы",
    cta2: "Обсудить проект",
    signature: "Resul Niazdurdyev — Web Designer & Developer",
  },
  stats: [
    { value: "1,5 года", label: "в веб-дизайне и разработке" },
    { value: "2 продукта", label: "запущены в реальную работу" },
    { value: "1 специалист", label: "от идеи до запуска" },
  ],
  work: { title: "Избранные работы", label: "Работы", view: "Смотреть кейс" },
  services: {
    title: "Что я могу сделать",
    label: "Услуги",
    items: [
      { title: "Лендинг", text: "Современный сайт под продукт, услугу или запуск." },
      { title: "Сайт для бизнеса", text: "Сайт компании, агентства или бренда." },
      {
        title: "Интернет-магазин",
        text: "Каталог, карточки товаров, корзина, интеграции и необходимые API.",
      },
      { title: "Web App", text: "Интерфейсы сервисов, личные кабинеты и внутренние системы." },
      { title: "UI / UX", text: "Продумывание структуры и пользовательского сценария." },
      {
        title: "Интерактив и анимации",
        text: "Плавные переходы, scroll-анимации, интерактивные элементы и визуальные эффекты.",
      },
    ],
  },
  about: {
    title: "Обо мне",
    label: "Обо мне",
    paragraphs: [
      "Я создаю сайты самостоятельно — от первой идеи и структуры до дизайна, разработки, анимаций и запуска.",
      "Мне нравится делать не просто красивые страницы, а цельные цифровые продукты, которыми удобно пользоваться.",
      "За последние 1,5 года я работал с разными форматами проектов — от сайтов брендов до сервисов с личными кабинетами и системами отслеживания.",
      "В каждом проекте стараюсь соединить сильную визуальную подачу, понятную структуру и техническую реализацию.",
    ],
  },
  process: {
    title: "Как проходит работа",
    label: "Процесс",
    steps: [
      { n: "01", title: "Идея", text: "Разбираемся с задачей, аудиторией и структурой." },
      { n: "02", title: "Дизайн", text: "Создаём визуальное направление и интерфейс." },
      { n: "03", title: "Разработка", text: "Собираю сайт, адаптив и необходимую функциональность." },
      { n: "04", title: "Запуск", text: "Проверяю всё на устройствах и готовлю проект к публикации." },
    ],
  },
  contact: {
    title: "Есть идея для сайта?",
    subtitle:
      "Расскажи, что хочешь создать — обсудим задачу и подумаем, как лучше её реализовать.",
    button: "Написать в Telegram",
    label: "Контакты",
  },
  footer: { role: "Web Designer & Developer", rights: "Все права защищены" },
  caseUi: {
    back: "Все работы",
    intro: "Кратко",
    problem: "Проблема",
    task: "Задача",
    done: "Что было сделано",
    process: "Процесс",
    screens: "Экраны",
    result: "Результат",
    testimonial: "Отзыв",
    next: "Следующий проект",
  },
  cases: [
    {
      slug: "tate-track",
      name: "TATE Track",
      category: "Сервис отслеживания заказов",
      year: "Tracking System / Web App",
      stack: ["React", "Supabase", "Auth", "UI/UX", "Frontend"],
      intro: "Я создавал сервис для бренда одежды и байеров.",
      problem:
        "Менеджеры постоянно получали сообщения от клиентов с вопросами о том, где находится их заказ.",
      task:
        "Создать удобную систему отслеживания заказов, которая позволила бы клиенту самостоятельно видеть статус своего заказа.",
      done: [
        "адаптивный интерфейс для мобильных устройств и ПК",
        "личный кабинет клиента",
        "отслеживание заказов",
        "система статусов",
        "привязка заказов к пользователям",
        "административная часть",
        "разные уровни доступа",
        "интерфейсы для байера, модератора и клиента",
        "продумывание пользовательского сценария",
        "дизайн и разработка",
      ],
      process: [
        "Разбор пользовательского сценария: клиент, байер, модератор.",
        "Структура статусов заказа и логика их смены.",
        "Дизайн интерфейсов личного кабинета и админ-части.",
        "Разработка, адаптив и проверка на устройствах.",
      ],
      result:
        "Сервис использовался в реальной работе бренда и помогал клиентам самостоятельно отслеживать свои заказы, снижая количество однотипных вопросов к поддержке.",
      testimonial: {
        quote:
          "Сайт очень классный, нам все понравилось. Будем им пользоваться ежедневно. Желаем всего хорошего и успехов в дальнейшем программисту!",
        author: "Отзыв клиента TATE",
      },
    },
    {
      slug: "koda",
      name: "KODA",
      category: "Сайт премиум-агентства",
      year: "Premium Agency Website",
      stack: ["React", "Tailwind CSS", "3D / Motion", "Адаптив"],
      intro:
        "Для агентства KODA был создан современный сайт в премиальном технологичном стиле.",
      task:
        "Создать выразительный сайт для премиум-сегмента с сильной визуальной подачей, адаптивностью и интерактивом.",
      done: [
        "визуальная концепция",
        "дизайн",
        "разработка",
        "адаптивная версия",
        "тёмная цветовая система",
        "кислотно-лаймовые акценты",
        "металлический 3D-логотип",
        "анимации",
        "интерактив",
        "оптимизация под мобильные устройства",
        "работа со структурой и контентом",
      ],
      process: [
        "Визуальная концепция и выбор направления.",
        "Дизайн ключевых экранов и системы акцентов.",
        "Разработка с анимациями и интерактивом.",
        "Адаптив и оптимизация под мобильные устройства.",
      ],
      result: "Полностью собранный сайт за 2 дня.",
      highlight: "Сайт создан за 2 дня",
    },
  ],
};

const en: Dict = {
  meta: {
    title: "Resul Niazdurdyev — Web Design & Development",
    description:
      "Resul Niazdurdyev creates modern websites, interfaces and digital products from concept and design to development and launch.",
  },
  nav: { work: "Work", services: "Services", about: "About", contact: "Contact", menu: "Menu", close: "Close" },
  hero: {
    kicker: "End-to-end web design & development",
    title: "I build websites that look striking and work like a product.",
    subtitle:
      "Web design and development end to end — from structure and visual concept to responsive layouts, interaction and launch.",
    cta1: "View work",
    cta2: "Start a project",
    signature: "Resul Niazdurdyev — Web Designer & Developer",
  },
  stats: [
    { value: "1.5 years", label: "in web design and development" },
    { value: "2 products", label: "launched and in real use" },
    { value: "1 specialist", label: "from idea to launch" },
  ],
  work: { title: "Selected work", label: "Work", view: "View case" },
  services: {
    title: "What I can build",
    label: "Services",
    items: [
      { title: "Landing page", text: "A modern site for a product, a service or a launch." },
      { title: "Business website", text: "A site for a company, an agency or a brand." },
      {
        title: "Online store",
        text: "Catalogue, product pages, cart, integrations and the APIs you need.",
      },
      { title: "Web app", text: "Service interfaces, user dashboards and internal systems." },
      { title: "UI / UX", text: "Structure and user flow thought through end to end." },
      {
        title: "Interaction & motion",
        text: "Smooth transitions, scroll animations, interactive elements and visual effects.",
      },
    ],
  },
  about: {
    title: "About me",
    label: "About",
    paragraphs: [
      "I build websites on my own — from the first idea and structure to design, development, motion and launch.",
      "I care about making complete digital products that are genuinely comfortable to use, not just good-looking pages.",
      "Over the past 1.5 years I've worked on different kinds of projects — from brand websites to services with user dashboards and order tracking.",
      "In every project I try to combine strong visuals, a clear structure and solid technical execution.",
    ],
  },
  process: {
    title: "How we work",
    label: "Process",
    steps: [
      { n: "01", title: "Idea", text: "We clarify the goal, the audience and the structure." },
      { n: "02", title: "Design", text: "We shape the visual direction and the interface." },
      { n: "03", title: "Development", text: "I build the site, the responsive layout and the functionality." },
      { n: "04", title: "Launch", text: "I test everything on real devices and prepare the project to go live." },
    ],
  },
  contact: {
    title: "Got an idea for a website?",
    subtitle: "Tell me what you want to build — we'll talk it through and find the best way to make it.",
    button: "Message on Telegram",
    label: "Contact",
  },
  footer: { role: "Web Designer & Developer", rights: "All rights reserved" },
  caseUi: {
    back: "All work",
    intro: "Overview",
    problem: "Problem",
    task: "Goal",
    done: "What I did",
    process: "Process",
    screens: "Screens",
    result: "Outcome",
    testimonial: "Client feedback",
    next: "Next project",
  },
  cases: [
    {
      slug: "tate-track",
      name: "TATE Track",
      category: "Order tracking service",
      year: "Tracking System / Web App",
      stack: ["React", "Supabase", "Auth", "UI/UX", "Frontend"],
      intro: "A service I built for a clothing brand and its buyers.",
      problem:
        "Managers constantly received messages from customers asking where their order was.",
      task:
        "Build a convenient order tracking system so a customer could check the status of their order themselves.",
      done: [
        "responsive interface for mobile and desktop",
        "customer dashboard",
        "order tracking",
        "order status system",
        "orders linked to users",
        "admin area",
        "different access levels",
        "interfaces for buyer, moderator and customer",
        "user flow design",
        "design and development",
      ],
      process: [
        "Mapping the user flow for customer, buyer and moderator.",
        "Order status structure and the logic behind status changes.",
        "Designing the dashboard and admin interfaces.",
        "Development, responsive layout and device testing.",
      ],
      result:
        "The service was used in the brand's day-to-day work and let customers track their orders themselves, reducing repetitive questions to support.",
      testimonial: {
        quote:
          "The site is really great, we loved it. We'll be using it every day. All the best and continued success to the developer!",
        author: "TATE client feedback",
      },
    },
    {
      slug: "koda",
      name: "KODA",
      category: "Premium agency website",
      year: "Premium Agency Website",
      stack: ["React", "Tailwind CSS", "3D / Motion", "Responsive"],
      intro: "A modern website in a premium, technical style built for the KODA agency.",
      task:
        "Create an expressive website for the premium segment with strong visuals, responsive layout and interaction.",
      done: [
        "visual concept",
        "design",
        "development",
        "responsive version",
        "dark colour system",
        "acid lime accents",
        "metallic 3D logo",
        "animation",
        "interaction",
        "mobile optimisation",
        "structure and content work",
      ],
      process: [
        "Visual concept and direction.",
        "Design of the key screens and the accent system.",
        "Development with motion and interaction.",
        "Responsive layout and mobile optimisation.",
      ],
      result: "A complete website delivered in 2 days.",
      highlight: "Built in 2 days",
    },
  ],
};

export const content: Record<Lang, Dict> = { ru, en };
