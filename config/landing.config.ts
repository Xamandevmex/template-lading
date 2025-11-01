import { LucideIcon } from 'lucide-react';

export interface LandingConfig {
  // Información del producto
  product: {
    name: string;
    tagline: string;
    description: string;
    logo?: string;
  };

  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta: {
      primary: string;
      secondary?: string;
    };
    badge?: string;
    stats?: {
      users: string;
      rating: string;
    };
  };

  // Features
  features: {
    title: string;
    subtitle?: string;
    items: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };

  // Benefits / Why Choose
  benefits: {
    title: string;
    subtitle?: string;
    items: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };

  // Testimonials
  testimonials: {
    title: string;
    subtitle?: string;
    items: Array<{
      name: string;
      role?: string;
      content: string;
      avatar?: string;
      rating?: number;
    }>;
  };

  // CTA Final
  finalCta: {
    title: string;
    subtitle?: string;
    buttonText: string;
  };

  // Enlaces y contacto
  links: {
    appStore?: string;
    playStore?: string;
    website?: string;
    social?: {
      twitter?: string;
      instagram?: string;
      linkedin?: string;
      tiktok?: string;
    };
  };

  // Colores personalizables
  theme?: {
    primaryColor?: string;
    accentColor?: string;
  };
}

// Configuración de ejemplo (inspirada en Cal AI)
export const defaultConfig: LandingConfig = {
  product: {
    name: "Cal AI",
    tagline: "Track your calories with just a picture",
    description: "La app impulsada por IA para un seguimiento fácil de calorías",
  },

  hero: {
    badge: "Amado por 5M usuarios con ⭐ 4.9 rating",
    title: "Conoce Cal AI",
    subtitle: "Rastrea tus calorías con solo una foto",
    cta: {
      primary: "Descargar Ahora",
      secondary: "Ver Demo",
    },
    stats: {
      users: "5M+",
      rating: "4.9",
    },
  },

  features: {
    title: "¿Qué incluye Cal AI?",
    subtitle: "Todo lo que necesitas para alcanzar tus objetivos",
    items: [
      {
        title: "Escaneo Instantáneo",
        description: "Toma una foto de tu comida y obtén información nutricional al instante",
        icon: "Camera",
      },
      {
        title: "Base de Datos Masiva",
        description: "Acceso a millones de alimentos y sus valores nutricionales",
        icon: "Database",
      },
      {
        title: "Seguimiento Inteligente",
        description: "La IA aprende de tus hábitos y te da recomendaciones personalizadas",
        icon: "Brain",
      },
    ],
  },

  benefits: {
    title: "¿Por qué elegir Cal AI?",
    subtitle: "El rastreador de calorías más avanzado",
    items: [
      {
        title: "Libera tu tiempo",
        description: "Cal AI calcula automáticamente tus calorías, proteínas, carbohidratos y grasas. No necesitas calcular calorías manualmente.",
        icon: "Clock",
      },
      {
        title: "Integra con tus productos favoritos",
        description: "Cal AI se integra con tus productos fitness favoritos para un seguimiento completo.",
        icon: "Link",
      },
      {
        title: "Pierde peso sin esfuerzo",
        description: "Toma una foto con Cal AI y el sensor de profundidad calcula el volumen de comida automáticamente.",
        icon: "TrendingDown",
      },
    ],
  },

  testimonials: {
    title: "Miles de usuarios hablan de nosotros",
    subtitle: "Usado por tus influencers fitness favoritos",
    items: [
      {
        name: "Jeremiah Jones",
        role: "Fitness Influencer",
        content: "Haz una elección más saludable y usa Cal AI para rastrear tus calorías",
        rating: 5,
      },
      {
        name: "Alex Eubank",
        role: "Fitness Coach",
        content: "Cal AI es literalmente el mejor rastreador de calorías. El más rápido y preciso que he usado.",
        rating: 5,
      },
      {
        name: "Hussein Farhat",
        role: "Personal Trainer",
        content: "Si rastreas tus calorías correctamente con Cal AI, puedes ponerte en forma comiendo casi cualquier cosa.",
        rating: 5,
      },
    ],
  },

  finalCta: {
    title: "¡RECLAMA TU PRUEBA GRATUITA DE 3 DÍAS!",
    subtitle: "Sin compromiso. Cancela en cualquier momento.",
    buttonText: "Reclamar Mi Prueba Gratuita",
  },

  links: {
    playStore: "https://play.google.com",
    appStore: "https://apps.apple.com",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
  },
};

