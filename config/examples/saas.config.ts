import { LandingConfig } from '../landing.config';

// Ejemplo de configuración para un producto SaaS
export const saasConfig: LandingConfig = {
  product: {
    name: "TaskFlow",
    tagline: "Gestión de proyectos simplificada",
    description: "La plataforma todo-en-uno para equipos que quieren crecer",
  },

  hero: {
    badge: "🚀 Usado por +1000 equipos",
    title: "Gestiona proyectos como un profesional",
    subtitle: "Todo lo que tu equipo necesita en un solo lugar",
    cta: {
      primary: "Prueba Gratis 14 Días",
      secondary: "Ver Demo",
    },
    stats: {
      users: "50K+",
      rating: "4.9",
    },
  },

  features: {
    title: "Todo lo que necesitas",
    subtitle: "Herramientas poderosas para equipos productivos",
    items: [
      {
        title: "Tableros Kanban",
        description: "Visualiza el flujo de trabajo de tu equipo con tableros intuitivos",
        icon: "Target",
      },
      {
        title: "Colaboración en Tiempo Real",
        description: "Trabaja junto a tu equipo sin importar dónde estén",
        icon: "Link",
      },
      {
        title: "Reportes Inteligentes",
        description: "Insights automáticos sobre el progreso de tus proyectos",
        icon: "TrendingUp",
      },
    ],
  },

  benefits: {
    title: "¿Por qué TaskFlow?",
    subtitle: "La herramienta que tu equipo va a amar",
    items: [
      {
        title: "Ahorra tiempo",
        description: "Automatiza tareas repetitivas y enfócate en lo importante. Reduce el tiempo de gestión hasta un 40%.",
        icon: "Clock",
      },
      {
        title: "Integra todo",
        description: "Conecta con Slack, GitHub, Google Drive y más de 100 herramientas que ya usas.",
        icon: "Link",
      },
      {
        title: "Escala sin límites",
        description: "Desde startups hasta empresas, TaskFlow crece contigo sin perder rendimiento.",
        icon: "TrendingUp",
      },
    ],
  },

  testimonials: {
    title: "Lo que dicen nuestros clientes",
    subtitle: "Equipos de todo el mundo confían en TaskFlow",
    items: [
      {
        name: "María González",
        role: "CEO en TechStart",
        content: "TaskFlow cambió completamente cómo trabajamos. Ahora somos 3x más productivos.",
        rating: 5,
      },
      {
        name: "Carlos Ruiz",
        role: "Product Manager",
        content: "La mejor inversión que hicimos este año. Interfaz limpia y potente.",
        rating: 5,
      },
      {
        name: "Ana Martínez",
        role: "Team Lead",
        content: "Por fin una herramienta que todo el equipo usa sin necesitar capacitación.",
        rating: 5,
      },
    ],
  },

  finalCta: {
    title: "¡Comienza tu prueba gratuita hoy!",
    subtitle: "14 días gratis. No se requiere tarjeta de crédito.",
    buttonText: "Crear Cuenta Gratis",
  },

  links: {
    website: "https://taskflow.com",
    social: {
      twitter: "https://twitter.com/taskflow",
      linkedin: "https://linkedin.com/company/taskflow",
    },
  },
};

