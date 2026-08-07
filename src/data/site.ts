export type Locale = "it" | "en";

export const locales: Locale[] = ["it", "en"];
export const defaultLocale: Locale = "it";

export const person = {
  name: "Filippo Bratti",
  email: "filippobratti3@gmail.com",
  phone: "+39 320 288 6459",
  cvUrl: "/cv.pdf",
  avatarInitials: "FB",
};

export type SocialLink = {
  label: string;
  url: string;
};

export const socials: SocialLink[] = [
  // TODO: sostituisci con i tuoi profili reali (non presenti nel CV caricato).
  { label: "LinkedIn", url: "https://www.linkedin.com/in/tuo-profilo" },
  { label: "GitHub", url: "https://github.com/tuo-utente" },
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
};

export type LocaleContent = {
  meta: { title: string; description: string };
  nav: { label: string; href: string }[];
  hero: {
    location: string;
    role: string;
    tagline: string;
    ctaContact: string;
    ctaCv: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  experience: {
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
    items: Project[];
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
      { label: "Chi sono", href: "#about" },
      { label: "Percorso", href: "#experience" },
      { label: "Competenze", href: "#skills" },
      { label: "Progetti", href: "#projects" },
      { label: "Contatti", href: "#contact" },
    ],
    hero: {
      location: "Bologna, Italia",
      role: "Sviluppatore Full-Stack",
      tagline:
        "Sviluppo applicazioni web front-end e back-end con tecnologie moderne, dall'idea alla produzione.",
      ctaContact: "Contattami",
      ctaCv: "Scarica CV",
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
    experience: {
      eyebrow: "Percorso",
      heading: "Percorso formativo e professionale",
      items: [
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
      items: [
        {
          title: "Nome Progetto Uno",
          description:
            "Descrizione sintetica del progetto: il problema affrontato, l'approccio adottato e il risultato ottenuto.",
          tags: ["Tag 1", "Tag 2"],
          link: "#",
          linkLabel: "Vedi il progetto",
        },
        {
          title: "Nome Progetto Due",
          description:
            "Descrizione sintetica del progetto: il problema affrontato, l'approccio adottato e il risultato ottenuto.",
          tags: ["Tag 3", "Tag 4"],
          link: "#",
          linkLabel: "Vedi il progetto",
        },
        {
          title: "Nome Progetto Tre",
          description:
            "Descrizione sintetica del progetto: il problema affrontato, l'approccio adottato e il risultato ottenuto.",
          tags: ["Tag 5", "Tag 6"],
          link: "#",
          linkLabel: "Vedi il progetto",
        },
      ],
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
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      location: "Bologna, Italy",
      role: "Full-Stack Developer",
      tagline:
        "Building front-end and back-end web applications with modern technologies, from idea to production.",
      ctaContact: "Get in touch",
      ctaCv: "Download CV",
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
    experience: {
      eyebrow: "Path",
      heading: "Education & professional path",
      items: [
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
      items: [
        {
          title: "Project Name One",
          description:
            "Short project description: the problem tackled, the approach taken, and the result achieved.",
          tags: ["Tag 1", "Tag 2"],
          link: "#",
          linkLabel: "View project",
        },
        {
          title: "Project Name Two",
          description:
            "Short project description: the problem tackled, the approach taken, and the result achieved.",
          tags: ["Tag 3", "Tag 4"],
          link: "#",
          linkLabel: "View project",
        },
        {
          title: "Project Name Three",
          description:
            "Short project description: the problem tackled, the approach taken, and the result achieved.",
          tags: ["Tag 5", "Tag 6"],
          link: "#",
          linkLabel: "View project",
        },
      ],
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
