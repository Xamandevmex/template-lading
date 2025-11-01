import { LandingConfig } from '../landing.config';

// Ejemplo de configuración para una app móvil de fitness
export const mobileAppConfig: LandingConfig = {
  product: {
    name: "FitTrack Pro",
    tagline: "Tu entrenador personal en el bolsillo",
    description: "La app de fitness impulsada por IA que se adapta a ti",
  },

  hero: {
    badge: "⭐ Calificada 4.8 con +2M descargas",
    title: "Transforma tu cuerpo",
    subtitle: "Entrenamientos personalizados con IA en solo 15 minutos al día",
    cta: {
      primary: "Descargar Gratis",
      secondary: "Ver Funciones",
    },
    stats: {
      users: "2M+",
      rating: "4.8",
    },
  },

  features: {
    title: "Funciones que te encantarán",
    subtitle: "Todo lo que necesitas para alcanzar tus metas",
    items: [
      {
        title: "Entrenamientos con IA",
        description: "Rutinas personalizadas que se adaptan a tu nivel y objetivos",
        icon: "Brain",
      },
      {
        title: "Seguimiento Nutricional",
        description: "Escanea tus comidas y obtén información nutricional al instante",
        icon: "Camera",
      },
      {
        title: "Progreso en Tiempo Real",
        description: "Visualiza tu evolución con gráficos detallados y motivadores",
        icon: "TrendingUp",
      },
    ],
  },

  benefits: {
    title: "¿Por qué FitTrack Pro?",
    subtitle: "Más que una app, tu compañero de fitness",
    items: [
      {
        title: "Entrena en cualquier lugar",
        description: "Casa, gym o parque. Entrenamientos diseñados para cualquier espacio sin necesidad de equipo.",
        icon: "Zap",
      },
      {
        title: "Resultados comprobados",
        description: "El 89% de usuarios ven resultados en las primeras 4 semanas. Método respaldado por ciencia.",
        icon: "Target",
      },
      {
        title: "Comunidad motivadora",
        description: "Únete a miles de personas con tus mismos objetivos. Comparte logros y mantente motivado.",
        icon: "Heart",
      },
    ],
  },

  testimonials: {
    title: "Historias reales de transformación",
    subtitle: "Más de 2 millones de personas ya transformaron su vida",
    items: [
      {
        name: "Sofía López",
        role: "Perdió 15kg en 3 meses",
        content: "FitTrack Pro hizo que el fitness fuera divertido. Los entrenamientos cortos encajan perfectamente en mi rutina.",
        rating: 5,
      },
      {
        name: "Miguel Torres",
        role: "Ganó 8kg de músculo",
        content: "La IA realmente entiende mi progreso y ajusta los entrenamientos. Es como tener un PT personal.",
        rating: 5,
      },
      {
        name: "Laura Sánchez",
        role: "Corrió su primer maratón",
        content: "Pasé de no poder correr 5 minutos a completar un maratón. Esta app cambió mi vida.",
        rating: 5,
      },
    ],
  },

  finalCta: {
    title: "¡COMIENZA TU VIAJE FITNESS HOY!",
    subtitle: "7 días gratis. Cancela cuando quieras.",
    buttonText: "Descargar FitTrack Pro",
  },

  links: {
    appStore: "https://apps.apple.com/fittrack",
    playStore: "https://play.google.com/store/apps/fittrack",
    social: {
      instagram: "https://instagram.com/fittrackpro",
      tiktok: "https://tiktok.com/@fittrackpro",
      twitter: "https://twitter.com/fittrackpro",
    },
  },
};

