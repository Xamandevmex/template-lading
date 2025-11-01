import { LandingConfig } from '../landing.config';

// Ejemplo de configuración para una tienda e-commerce / marketplace
export const ecommerceConfig: LandingConfig = {
  product: {
    name: "ShopHub",
    tagline: "Tu tienda online en minutos",
    description: "La plataforma más fácil para crear tu tienda online",
  },

  hero: {
    badge: "🎉 +10,000 tiendas creadas",
    title: "Crea tu tienda online sin código",
    subtitle: "Vende productos y gestiona tu negocio desde un solo lugar",
    cta: {
      primary: "Crear Mi Tienda Gratis",
      secondary: "Ver Ejemplos",
    },
    stats: {
      users: "10K+",
      rating: "4.9",
    },
  },

  features: {
    title: "Todo incluido para vender online",
    subtitle: "Las herramientas que necesitas para crecer",
    items: [
      {
        title: "Diseño sin código",
        description: "Arrastra y suelta para crear una tienda hermosa en minutos",
        icon: "Sparkles",
      },
      {
        title: "Pagos integrados",
        description: "Acepta tarjetas, PayPal, transferencias y más métodos de pago",
        icon: "Shield",
      },
      {
        title: "Gestión de inventario",
        description: "Controla tu stock, variantes y productos desde un panel simple",
        icon: "Database",
      },
    ],
  },

  benefits: {
    title: "¿Por qué ShopHub?",
    subtitle: "La solución completa para tu negocio online",
    items: [
      {
        title: "Comienza hoy mismo",
        description: "No necesitas conocimientos técnicos. Crea tu tienda en menos de 30 minutos con nuestro asistente.",
        icon: "Zap",
      },
      {
        title: "Crece sin límites",
        description: "Desde tu primer producto hasta miles de ventas, la plataforma escala contigo sin complicaciones.",
        icon: "TrendingUp",
      },
      {
        title: "Soporte cuando lo necesites",
        description: "Equipo de soporte en español disponible 24/7 para ayudarte con cualquier duda.",
        icon: "Heart",
      },
    ],
  },

  testimonials: {
    title: "Emprendedores que confían en ShopHub",
    subtitle: "Miles de negocios creciendo cada día",
    items: [
      {
        name: "Pedro Ramírez",
        role: "Tienda de Ropa",
        content: "Lancé mi tienda en un fin de semana. En el primer mes vendí $5,000. Increíble!",
        rating: 5,
      },
      {
        name: "Carmen Díaz",
        role: "Productos Artesanales",
        content: "La mejor inversión para mi negocio. Las herramientas son súper fáciles de usar.",
        rating: 5,
      },
      {
        name: "Roberto Silva",
        role: "Electrónica",
        content: "Migré de otra plataforma y no puedo estar más feliz. ShopHub es 10x mejor.",
        rating: 5,
      },
    ],
  },

  finalCta: {
    title: "¡LANZA TU TIENDA ONLINE HOY!",
    subtitle: "30 días gratis. Sin tarjeta de crédito requerida.",
    buttonText: "Crear Mi Tienda Ahora",
  },

  links: {
    website: "https://shophub.com",
    social: {
      instagram: "https://instagram.com/shophub",
      twitter: "https://twitter.com/shophub",
      linkedin: "https://linkedin.com/company/shophub",
    },
  },
};

