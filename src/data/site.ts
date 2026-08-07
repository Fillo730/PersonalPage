export type Locale = "it" | "en";

export const locales: Locale[] = ["it", "en"];
export const defaultLocale: Locale = "it";

export const person = {
  name: "Filippo Bratti",
  email: "filippobratti3@gmail.com",
  cvUrl: "/cv.pdf",
  avatarInitials: "FB",
};

export type SocialLink = {
  label: string;
  url: string;
};

export const socials: SocialLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/filippobratti/" },
  { label: "GitHub", url: "https://github.com/Fillo730" },
];

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  inProgress?: boolean;
};

export type LocaleContent = {
  meta: { title: string; description: string };
  nav: { label: string; href: string }[];
  hero: {
    location: string;
    role: string;
    tagline: string;
    ctaContact: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  work: {
    eyebrow: string;
    heading: string;
    items: ExperienceItem[];
  };
  education: {
    eyebrow: string;
    heading: string;
    items: ExperienceItem[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    groups: SkillGroup[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    inProgressLabel: string;
    items: Project[];
  };
  cv: {
    eyebrow: string;
    heading: string;
    intro: string;
    downloadLabel: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
  footer: {
    backToTop: string;
  };
};

export const content: Record<Locale, LocaleContent> = {
  it: {
    meta: {
      title: `${person.name} — Sviluppatore Full-Stack`,
      description:
        "Sviluppatore full-stack neolaureato in Ingegneria Informatica, esperienza in progetti front-end e back-end.",
    },
    nav: [
      { label: "Chi sono", href: "/#about" },
      { label: "Esperienza", href: "/experience" },
      { label: "Formazione", href: "/education" },
      { label: "Competenze", href: "/skills" },
      { label: "Progetti", href: "/projects" },
      { label: "CV", href: "/cv" },
      { label: "Contatti", href: "/contact" },
    ],
    hero: {
      location: "Bologna, Italia",
      role: "Sviluppatore Full-Stack",
      tagline:
        "Sviluppo applicazioni web front-end e back-end con tecnologie moderne, dall'idea alla produzione.",
      ctaContact: "Contattami",
    },
    about: {
      eyebrow: "Chi sono",
      heading: "Chi sono",
      paragraphs: [
        "Sono uno sviluppatore full-stack, laureato in Ingegneria Informatica all'Università di Bologna, con esperienza maturata tramite stage e collaborazioni da freelance su progetti front-end e back-end.",
        "Ho lavorato con tecnologie come Angular, React, Astro, Blazor e .NET C#, oltre a basi di dati relazionali e NoSQL come SQL Server e MongoDB. Mi trovo a mio agio anche in ambiente Linux e con strumenti di controllo versione come Git.",
        "Al di fuori del lavoro mi dedico ad attività sportive e continuo a seguire da vicino le nuove tecnologie del mondo web.",
      ],
    },
    work: {
      eyebrow: "Esperienza",
      heading: "Esperienza lavorativa",
      items: [
        {
          role: "Software Engineer / Sviluppatore Full-Stack",
          organization: "Cybertec S.R.L. / Gruppo Zucchetti",
          period: "04/2026 — in corso",
          description:
            "Sviluppo di un MES (Manufacturing Execution System) per il settore industriale, con JavaScript lato front-end e .NET C# lato back-end.",
          tags: ["JavaScript", ".NET / C#", "MES"],
        },
        {
          role: "Stage consulente informatico",
          organization: "SI2001",
          period: "10/2025 — 02/2026",
          description:
            "Sviluppo front-end / back-end con tecnologie Angular e Bootstrap lato front-end, .NET C# lato back-end e SQL Server per la persistenza dei dati.",
          tags: ["Angular", "Bootstrap", ".NET / C#", "SQL Server"],
        },
        {
          role: "Stage e Freelancer",
          organization: "FMI s.r.l., Forlì (FC)",
          period: "09/2024 — 08/2025",
          description:
            "Sviluppo front-end / back-end utilizzando tecnologie come Blazor (ASP.NET), React/Astro, C#, linguaggi front-end (HTML, CSS, JS), MongoDB e Git (BitBucket).",
          tags: ["Blazor (ASP.NET)", "React / Astro", "C#", "MongoDB", "Git"],
        },
      ],
    },
    education: {
      eyebrow: "Formazione",
      heading: "Percorso formativo",
      items: [
        {
          role: "Laurea magistrale in Ingegneria Informatica",
          organization: "Università di Bologna",
          period: "2025 — in corso",
          description:
            "Percorso da studente lavoratore: proseguo gli studi in parallelo all'attività professionale.",
        },
        {
          role: "Laurea triennale in Ingegneria Informatica",
          organization: "Università di Bologna",
          period: "2021 — 2025",
          description:
            "Percorso di studi in ingegneria informatica, con approfondimenti in programmazione, basi di dati e sviluppo software.",
        },
        {
          role: "Diploma in Elettrotecnica ed Elettronica",
          organization: "Istituto Tecnico I.I.S. Archimede",
          period: "2016 — 2021",
          description:
            "Formazione tecnica in elettrotecnica ed elettronica, base per il successivo percorso in ingegneria informatica.",
        },
      ],
    },
    skills: {
      eyebrow: "Competenze",
      heading: "Cosa so fare",
      groups: [
        {
          category: "Linguaggi di programmazione",
          items: ["C", "C#", "Java (J2EE)", "Python", "SQL", "HTML", "CSS", "JavaScript"],
        },
        {
          category: "Framework & Tecnologie",
          items: [
            "Angular",
            "React",
            "Astro",
            "Next.js",
            "Blazor (ASP.NET)",
            "Bootstrap",
            ".NET",
            "Vite",
          ],
        },
        {
          category: "Strumenti & Piattaforme",
          items: [
            "Git (GitHub, BitBucket)",
            "MongoDB",
            "SQL Server",
            "Linux",
            "Bash",
            "Visual Studio Code",
            "IntelliJ",
            "Eclipse",
            "WebStorm",
          ],
        },
        {
          category: "Soft skill & Lingue",
          items: [
            "Lavoro di squadra",
            "Comunicazione",
            "Italiano (madrelingua)",
            "Inglese (B2)",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      heading: "Progetti",
      inProgressLabel: "In sviluppo",
      items: [
        {
          title: "MovieWorld",
          description:
            "Piattaforma e-commerce full-stack per la vendita di film: catalogo con ricerca e filtri avanzati, carrello, checkout multi-punto vendita, area utente con ordini/recensioni/wishlist e pannello di amministrazione con dashboard statistiche. Backend .NET a livelli (repository/service/mapper) con test unitari, frontend Angular.",
          tags: ["Angular", ".NET / C#", "SQL", "Docker"],
          link: "https://movieworld-9msm.onrender.com",
          linkLabel: "Demo live",
        },
        {
          title: "Memory Game",
          description:
            "Gioco di memoria web con account utente, punteggi salvati, classifica globale, achievement, sistema di amici, temi chiaro/scuro e localizzazione in più lingue. Backend .NET con test unitari sulla logica di gioco, frontend Angular, containerizzato con Docker.",
          tags: ["Angular", ".NET / C#", "Docker"],
          link: "https://memorygame-xrxa.onrender.com",
          linkLabel: "Demo live",
        },
        {
          title: "EasyCid",
          description:
            "App per automatizzare e velocizzare lo scambio di informazioni tra automobilisti in caso di sinistro: compilazione del CID (Constatazione Amichevole) con scambio dei dati tramite QR code. Backend .NET, frontend mobile in React Native.",
          tags: ["React Native", ".NET / C#"],
          inProgress: true,
        },
      ],
    },
    cv: {
      eyebrow: "CV",
      heading: "Curriculum",
      intro:
        "Qui trovi il mio curriculum aggiornato in PDF, con il riepilogo completo di percorso formativo, esperienze lavorative e competenze.",
      downloadLabel: "Scarica il CV",
    },
    contact: {
      eyebrow: "Contatti",
      heading: "Parliamone",
      intro:
        "Sono disponibile per nuove opportunità e collaborazioni. Scrivimi pure, rispondo il prima possibile.",
    },
    footer: {
      backToTop: "Torna su ↑",
    },
  },
  en: {
    meta: {
      title: `${person.name} — Full-Stack Developer`,
      description:
        "Full-stack developer, Computer Engineering graduate, experienced in front-end and back-end projects.",
    },
    nav: [
      { label: "About", href: "/#about" },
      { label: "Experience", href: "/experience" },
      { label: "Education", href: "/education" },
      { label: "Skills", href: "/skills" },
      { label: "Projects", href: "/projects" },
      { label: "CV", href: "/cv" },
      { label: "Contact", href: "/contact" },
    ],
    hero: {
      location: "Bologna, Italy",
      role: "Full-Stack Developer",
      tagline:
        "Building front-end and back-end web applications with modern technologies, from idea to production.",
      ctaContact: "Get in touch",
    },
    about: {
      eyebrow: "About",
      heading: "About me",
      paragraphs: [
        "I'm a full-stack developer with a Bachelor's degree in Computer Engineering from the University of Bologna, with experience gained through internships and freelance work on front-end and back-end projects.",
        "I've worked with technologies such as Angular, React, Astro, Blazor and .NET C#, along with relational and NoSQL databases like SQL Server and MongoDB. I'm also comfortable in Linux environments and with version control tools like Git.",
        "Outside of work, I enjoy sports and keep up closely with new technologies in the web development world.",
      ],
    },
    work: {
      eyebrow: "Experience",
      heading: "Work experience",
      items: [
        {
          role: "Software Engineer / Full-Stack Developer",
          organization: "Cybertec S.R.L. / Gruppo Zucchetti",
          period: "04/2026 — present",
          description:
            "Development of a MES (Manufacturing Execution System) for the industrial sector, using JavaScript on the front end and .NET C# on the back end.",
          tags: ["JavaScript", ".NET / C#", "MES"],
        },
        {
          role: "IT Consultant Intern",
          organization: "SI2001",
          period: "10/2025 — 02/2026",
          description:
            "Front-end / back-end development with Angular and Bootstrap on the front end, .NET C# on the back end, and SQL Server for data persistence.",
          tags: ["Angular", "Bootstrap", ".NET / C#", "SQL Server"],
        },
        {
          role: "Intern & Freelancer",
          organization: "FMI s.r.l., Forlì (FC)",
          period: "09/2024 — 08/2025",
          description:
            "Front-end / back-end development using technologies such as Blazor (ASP.NET), React/Astro, C#, front-end languages (HTML, CSS, JS), MongoDB and Git (BitBucket).",
          tags: ["Blazor (ASP.NET)", "React / Astro", "C#", "MongoDB", "Git"],
        },
      ],
    },
    education: {
      eyebrow: "Education",
      heading: "Education path",
      items: [
        {
          role: "Master's Degree in Computer Engineering",
          organization: "University of Bologna",
          period: "2025 — present",
          description:
            "Working-student path: continuing my studies alongside my professional activity.",
        },
        {
          role: "Bachelor's Degree in Computer Engineering",
          organization: "University of Bologna",
          period: "2021 — 2025",
          description:
            "Degree program in computer engineering, with focus on programming, databases, and software development.",
        },
        {
          role: "Diploma in Electrical Engineering and Electronics",
          organization: "I.I.S. Archimede Technical Institute",
          period: "2016 — 2021",
          description:
            "Technical education in electrical engineering and electronics, foundation for the later path in computer engineering.",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      heading: "What I do",
      groups: [
        {
          category: "Programming Languages",
          items: ["C", "C#", "Java (J2EE)", "Python", "SQL", "HTML", "CSS", "JavaScript"],
        },
        {
          category: "Frameworks & Technologies",
          items: [
            "Angular",
            "React",
            "Astro",
            "Next.js",
            "Blazor (ASP.NET)",
            "Bootstrap",
            ".NET",
            "Vite",
          ],
        },
        {
          category: "Tools & Platforms",
          items: [
            "Git (GitHub, BitBucket)",
            "MongoDB",
            "SQL Server",
            "Linux",
            "Bash",
            "Visual Studio Code",
            "IntelliJ",
            "Eclipse",
            "WebStorm",
          ],
        },
        {
          category: "Soft Skills & Languages",
          items: ["Teamwork", "Communication", "Italian (native)", "English (B2)"],
        },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      heading: "Projects",
      inProgressLabel: "In development",
      items: [
        {
          title: "MovieWorld",
          description:
            "Full-stack e-commerce platform for selling movies: catalog with search and advanced filters, cart, multi-store checkout, a user area with orders/reviews/wishlist, and an admin panel with a statistics dashboard. Layered .NET backend (repository/service/mapper) with unit tests, Angular frontend.",
          tags: ["Angular", ".NET / C#", "SQL", "Docker"],
          link: "https://movieworld-9msm.onrender.com",
          linkLabel: "Live demo",
        },
        {
          title: "Memory Game",
          description:
            "Web-based memory game with user accounts, saved scores, a global leaderboard, achievements, a friends system, dark/light themes and multi-language localization. .NET backend with unit tests on the game logic, Angular frontend, containerized with Docker.",
          tags: ["Angular", ".NET / C#", "Docker"],
          link: "https://memorygame-xrxa.onrender.com",
          linkLabel: "Live demo",
        },
        {
          title: "EasyCid",
          description:
            "App to automate and speed up the exchange of information between drivers after a car accident: fills in the CID (friendly accident report) form and exchanges data via QR code. .NET backend, React Native mobile frontend.",
          tags: ["React Native", ".NET / C#"],
          inProgress: true,
        },
      ],
    },
    cv: {
      eyebrow: "CV",
      heading: "Resume",
      intro:
        "Here you can find my up-to-date resume in PDF, with a full summary of my education, work experience and skills.",
      downloadLabel: "Download CV",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's talk",
      intro:
        "I'm open to new opportunities and collaborations. Feel free to reach out, I'll get back to you as soon as possible.",
    },
    footer: {
      backToTop: "Back to top ↑",
    },
  },
};
