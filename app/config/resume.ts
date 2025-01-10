// config.ts
export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Experience {
  company: string;
  technologies: string[];
  role: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  responsibilities: string[];
}
export interface CertificatesManual {
  institution: string;
  title: string[];
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  link: string;
  duration: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface Project {
  title: string;
  description: string;
  url?: string;
  technologies: string[];
  image?: string;
}

export interface competencies {
  category: string;
  items: string[];
}
export interface Skill {
  category: string;
  items: string[];
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface ResumeConfig {
  personal: {
    name: string;
    title: string;
    locations: string[];
    email: string;
    phone: string;
    about: string;
  };
  social: SocialLink[];
  githubUsername?: string;
  certificatesRepo?: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  competencies: competencies[];
  languages: Language[];
  projects: Project[];
  certificatesManual: CertificatesManual[];
}

export const config: ResumeConfig = {
  personal: {
    name: "Junior Ribeiro",
    title: "Desenvolvedor",
    locations: ["São Paulo, Brasil"],
    email: "contato@jotacode.dev",
    phone: "11 93721-8191",
    about:
      "Sou desenvolvedor fullstack com experiência em desenvolvimento de software e Suporte tecnico e monitoramente de sistemas. No meu trabalho anterior, atuei com ferramentas voltadas para a produção no setor automotivo, com ênfase em automação industrial e implementação de soluções para a Indústria 4.0. Fiz implemetações de sistemas internos e manutençao, como Zabbix e Grafana, além do suporte tenico de diferentes niveis. Tenho paixão por aprender novas tecnologias e resolver problemas. Graduado em Gestão de TI pela USCS e cursando uma Pós-Graduação em Desenvolvimento Fullstack na PUC-SP e iniciando meus estudos em graduaçao em Engenharia de Software.",
  },
  social: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/juniorjota/",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/codejota",
      icon: "github",
    },
    {
      platform: "NPM",
      url: "https://npmjs.com/~jotacode",
      icon: "package",
    },
    {
      platform: "Telegram",
      url: "https://t.me/codejota",
      icon: "send",
    },
    {
      platform: "Website",
      url: "https://blog.jotacode.dev",
      icon: "globe",
    },
    // {
    //   platform: "Twitter",
    //   url: "https://twitter.com/username",
    //   icon: "twitter",
    // },
    // {
    //   platform: "Calendar",
    //   url: "https://calendly.com/username",
    //   icon: "calendar",
    // },
    // voce pode adicionar mais redes sociais aqui e apenas configurar no arquivo Header.tsx para exibir o icone correto
  ],
  githubUsername: "codejota",
  certificatesRepo: "codejota/certificates",
  experience: [
    {
      company: "Magna Cosma do Brasil",
      technologies: [
        "C#",
        ".NET",
        "Python",
        "Power BI",
        "Power Automate",
        "MQTT",
        "SVN",
        "Bash",
        "OracleSQL",
        "MySQL",
        "Suporte Técnico",
      ],
      role: "Desenvolvedor Fullstack",
      location: "São Bernardo do Campo (Híbrido)",
      startDate: "Jan 2023",
      endDate: "Mai 2024",
      responsibilities: [
        "Desenvolvimento de projetos voltados à sustentabilidade, usando protocolo MQTT para monitoramento do consumo elétrico, produção etc",
        "Reescrita de projetos legados para Python.",
        "Criação e implementação de Dashboard em Power BI para acompanhamento de chamados do time de Infraestrutura e Sistemas.",
        "Implementação de projetos voltados ao MES e ERP.",
        "Uso de SVN, Git, GitHub e Bash.",
        "Uso das Stacks .NET C#, Python, Protocolo MQTT e Power BI.",
        "Uso de OracleSQL & MySQL para bancos de dados.",
        "Melhoria de sistemas legados.",
        "Desenvolvimento de ferramentas para o chão de fábrica.",
        "Continuação de atividades voltadas para infraestrutura e análise de sistemas.",
        "Prestação de suporte técnico e atendimento nos níveis N1, N2 e N3.",
        "Documentação de procedimentos e configurações.",
        "Participação na implementação de projetos de infraestrutura e sistemas.",
        "Resolução de problemas relacionados a hardware e software.",
        "Monitoramento de sistemas e rede com Zabbix e Grafana.",
        "Desenvolvimento com .NET, C#, Power BI, Power Automate e outras tecnologias.",
      ],
    },
    {
      company: "Magna Cosma do Brasil",
      technologies: [
        "C#",
        ".NET",
        "OracleDB",
        "PowerApps",
        "Power Automate",
        "Power BI",
        "Suporte Técnico",
      ],
      role: "Analista de Sistemas",
      location: "São Bernardo do Campo (Híbrido)",
      startDate: "Jun 2021",
      endDate: "Jan 2023",
      responsibilities: [
        "Participação ativa em sprints ágeis e desenvolvimento do produto principal.",
        "Adaptação e atualização de uma ferramenta legada para atender às demandas do chão de fábrica.",
        "Uso de C e .NET para desenvolvimento de front-end e back-end.",
        "Uso de OracleDB para banco de dados.",
        "Desenvolvimento no-code com PowerApps e Power Automate.",
        "Desenvolvimento de dashboards usando Power BI para monitoramento de qualidade e segurança.",
        "Monitoramento de sistemas e rede com Zabbix e Grafana.",
        "Continuação das atividades da posição anterior relacionadas à infraestrutura.",
      ],
    },
    {
      company: "Magna Cosma do Brasil",
      technologies: [
        "C#",
        ".NET",
        "Power BI",
        "Power Automate",
        "Cisco Networking",
        "SVN",
        "Suporte Técnico",
      ],
      role: "Estagiário de Infraestrutura",
      location: "São Bernardo do Campo (Presencial)",
      startDate: "Jun 2018",
      endDate: "Jun 2021",
      responsibilities: [
        "Configuração e manutenção de servidores e equipamentos de rede, incluindo impressoras, switches e access points Cisco.",
        "Prestação de suporte técnico e atendimento nos níveis N1, N2 e N3.",
        "Documentação de procedimentos e configurações.",
        "Participação na implementação de projetos de infraestrutura.",
        "Resolução de problemas relacionados a hardware e software.",
        "Experiência em desenvolvimento com .NET, C#, Power BI e Power Automate junto ao time de Sistemas.",
      ],
    },
  ],

  education: [
    {
      institution: "Engenharia de Software - FIAP",
      degree: "Bacharelado",
      field: "Engenharia de Software - Inicio em Fevereiro",
      startDate: "2025",
      endDate: "2029",
      location: "São Paulo, Brasil",
    },
    {
      institution: "Desenvolvimento Fullstack - PUC-SP",
      degree: "Pós-Graduação",
      field: "Desenvolvimento Fullstack",
      startDate: "2024",
      endDate: "2026",
      location: "EAD",
    },
    {
      institution: "Gestão de Tecnologia da Informação - USCS",
      degree: "Tecnólogo",
      field: "Gestão de TI",
      startDate: "2018",
      endDate: "2021",
      location: "São Caetano do Sul, Brasil",
    },
    {
      institution: "curso.dev - Felipe Deschamps",
      degree: "Curso",
      field: "Desenvolvimento Web",
      startDate: "2024",
      endDate: "Cursando",
      location: "Online",
    },
    {
      institution: "Alura",
      degree: "Curso",
      field: "Desenvolvimento Web - Frontend",
      startDate: "2021",
      endDate: "2022",
      location: "Online",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "HTML & CSS",
        "Javascript",
        "TypeScript",
        "React",
        "Next.js",
        "TailwindCSS",
      ],
    },
    {
      category: "Backend",
      items: [
        ".NET/C#",
        "Node.js",
        "Python",
        "Ruby on Rails",
        "Ruby",
        "FastAPI",
      ],
    },
    {
      category: "Data & Databases",
      items: [
        "Oracle SQL",
        "MySQL",
        "PostgreSQL",
        "LocalStorage",
        "MDX",
        "SQL & NoSQL",
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        "Git",
        "GitHub",
        "Docker",
        "Linux",
        "Bash",
        "SVN",
        "Cisco",
        "WSL",
        "Grafana",
        "Zabbix",
        "Logix",
      ],
    },
    {
      category: "BI & Automation (Power Platform)",
      items: ["Power BI", "Power Automate", "Power Apps"],
    },
    {
      category: "Protocols & Messaging",
      items: ["MQTT", "WebSockets"],
    },
  ],
  competencies: [
    {
      category: "Soft Skills",
      items: [
        "Trabalho em equipe",
        "Gestão de tempo",
        "Resolução de problemas",
        "Liderança",
        "Adaptabilidade",
        "Criatividade",
      ],
    },
  ],
  certificatesManual: [
    {
      institution: "Cisco Networking Academy",
      title: [" CCNA 1 - Introdução a Redes"],
      location: "Online",
      startDate: "January 2023",
      endDate: "June 2023",
      description:
        "Curso introdutório de redes de computadores da Cisco, com foco em fundamentos de redes. Apresenta conceitos básicos de redes, como protocolos, endereçamento IP, sub-redes, VLANs, roteamento estático e dinâmico, NAT, ACLs, entre outros.",
      link: "https://github.com/codejota", // segue e deixa uma star, se puder :)
      duration: "6 meses",
    },
  ],

  languages: [
    {
      name: "Portugues (BR)",
      proficiency: "Nativo",
    },
    {
      name: "Inglês",
      proficiency: "Mediano",
    },
    {
      name: "Alemão",
      proficiency: "Aprendendo",
    },
  ],
  projects: [
    {
      image: "/images/projects/blog_project.png",
      title: "blog",
      description:
        "Blog  com intuito de compartilhar conhecimento e experiências na minha carreira. Assuntos Diversos.",
      url: "https://blog.jotacode.dev",
      technologies: [
        "TypeScript",
        "Next.Js",
        "Tailwind",
        "PostgreSQL",
        "Vercel",
      ],
    },
    {
      image: "/images/projects/minhagrana_project.png",
      title: "minhagrana.pro",
      description:
        "Meu primeiro projeto comercial, para gerenciar despesas facilmente, com categorização e registro.",
      url: "https://minhagrana.pro/",
      technologies: ["React", "Node.js", "PostgreSQL"],
    },
    {
      image: "/images/projects/linktree_project.png",
      title: "linktree like",
      description:
        " Contendo todos os links para minhas redes sociais e projetos, de simples e de fácil acesso.",
      url: "https://jotacode.dev/",
      technologies: ["TypeScript", "Next.js", "Vercel"],
    },
    {
      image: "/images/projects/cv_project.png",
      title: "cv.jotacode.dev",
      description:
        "Projeto OpenSource de um currículo minimalista. Feito com Next.js e Shadc/UI. Você pode usar para criar o seu.",
      url: "https://cv.jotacode.dev/",
      technologies: ["React", "Next.js", "Shadc/UI", "Vercel"],
    },
    {
      image: "/images/projects/factoryflow_project.png",
      title: "FactoryFlow - Indústria 4.0",
      description:
        "Projeto voltado para a Indústria 4.0, com foco em automação industrial e monitoramento de processos.",
      url: "https://factoryflow-static.vercel.app/",
      technologies: [
        "TypeScript",
        "Next.js",
        "Python",
        "FastAPI",
        "MQTT",
        "React",
        "PostgreSQL",
      ],
    },
    {
      image: "/images/projects/vsctask.png",
      title: "VSC Task Creator",
      description:
        "Projeto para criação de tasks no VSCode, com foco em produtividade e organização.",
      url: "https://vsc-taskcreator.vercel.app/",
      technologies: ["TypeScript", "React", "TailwindCSS", "Next.js"],
    },
  ],
};
