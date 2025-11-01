# 🚀 Landing Template - Validación de Productos

Template moderno y reutilizable de landing page construido con **Next.js 14**, **TypeScript**, **Tailwind CSS** y **Framer Motion**. Perfecto para validar productos como apps, SaaS, o páginas web.

## ✨ Características

- 🎨 **Diseño Moderno y Atractivo** - Inspirado en las mejores landing pages del mercado
- 🔧 **Completamente Personalizable** - Cambia todo el contenido desde un único archivo de configuración
- 🎭 **Animaciones Fluidas** - Usando Framer Motion para una experiencia premium
- 📱 **100% Responsive** - Perfecto en móviles, tablets y desktop
- ⚡ **Performance Optimizado** - Construido con Next.js 14 y App Router
- 🧩 **Componentes Modulares** - Fácil de extender y modificar
- 🎯 **TypeScript** - Type-safety completo

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🎨 Personalización

### Método 1: Archivo de Configuración (Recomendado)

Edita el archivo `config/landing.config.ts` para personalizar todo el contenido de tu landing page:

```typescript
export const defaultConfig: LandingConfig = {
  product: {
    name: "Tu Producto",
    tagline: "Tu tagline aquí",
    description: "Descripción de tu producto",
  },

  hero: {
    badge: "🎉 Nuevo lanzamiento",
    title: "Tu Título Principal",
    subtitle: "Tu subtítulo descriptivo",
    cta: {
      primary: "Comenzar Gratis",
      secondary: "Ver Demo",
    },
    stats: {
      users: "10K+",
      rating: "4.8",
    },
  },

  features: {
    title: "¿Qué incluye?",
    items: [
      {
        title: "Característica 1",
        description: "Descripción de la característica",
        icon: "Zap", // Iconos de lucide-react
      },
      // ... más características
    ],
  },

  // ... más secciones
};
```

### Método 2: Crear Múltiples Configuraciones

Puedes crear múltiples archivos de configuración para diferentes productos:

```typescript
// config/producto-a.config.ts
export const productoAConfig: LandingConfig = { ... }

// config/producto-b.config.ts
export const productoBConfig: LandingConfig = { ... }

// app/page.tsx
import { productoAConfig } from '@/config/producto-a.config';
```

## 🧩 Componentes Incluidos

### Hero
Sección principal con título, subtítulo, CTAs y estadísticas.

```typescript
<Hero 
  config={config.hero} 
  productName={config.product.name}
/>
```

### Features
Muestra las características principales en un grid.

```typescript
<Features config={config.features} />
```

### Benefits
Destaca los beneficios con diseño alternado.

```typescript
<Benefits config={config.benefits} />
```

### Testimonials
Muestra testimonios de usuarios con calificaciones.

```typescript
<Testimonials config={config.testimonials} />
```

### Final CTA
Llamado a la acción final con diseño impactante.

```typescript
<FinalCTA config={config.finalCta} />
```

### Footer
Footer completo con links y redes sociales.

```typescript
<Footer config={{ product, links }} />
```

## 🎨 Personalización de Estilos

### Colores

Edita `tailwind.config.ts` para cambiar los colores principales:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... más tonos
    900: '#0c4a6e',
  },
}
```

### Animaciones

Los componentes usan Framer Motion. Personaliza las animaciones en cada componente:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* contenido */}
</motion.div>
```

## 🎯 Iconos Disponibles

El template usa [Lucide React](https://lucide.dev/) para los iconos. Iconos disponibles por defecto:

- `Camera`, `Database`, `Brain`, `Zap`, `Shield`, `TrendingUp`
- `Clock`, `Link`, `TrendingDown`, `Sparkles`, `Target`, `Heart`

Para añadir más iconos, actualiza el `iconMap` en cada componente:

```typescript
import { NuevoIcono } from 'lucide-react';

const iconMap = {
  ...existingIcons,
  NuevoIcono,
};
```

## 📱 Secciones de la Landing Page

1. **Hero** - Primera impresión con CTA principal
2. **Features** - Características del producto en grid
3. **Benefits** - Beneficios con diseño alternado
4. **Testimonials** - Testimonios y reseñas
5. **Final CTA** - Último llamado a la acción
6. **Footer** - Links y contacto

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

O conecta tu repositorio de GitHub con [Vercel](https://vercel.com) para deploys automáticos.

### Otras Plataformas

- **Netlify**: `npm run build` y sube la carpeta `.next`
- **Railway**: Conecta tu repo y selecciona Next.js
- **Docker**: Usa el Dockerfile incluido (si está disponible)

## 📝 Ejemplos de Uso

### Landing para App Móvil

```typescript
export const mobileAppConfig: LandingConfig = {
  product: {
    name: "Mi App",
    tagline: "La mejor app para tu día a día",
  },
  hero: {
    title: "Simplifica tu vida",
    subtitle: "Todo lo que necesitas en una app",
    cta: {
      primary: "Descargar en App Store",
      secondary: "Descargar en Google Play",
    },
  },
  // ...
};
```

### Landing para SaaS

```typescript
export const saasConfig: LandingConfig = {
  product: {
    name: "Mi SaaS",
    tagline: "Gestiona tu negocio fácilmente",
  },
  hero: {
    title: "La plataforma todo-en-uno",
    subtitle: "Para equipos que quieren crecer",
    cta: {
      primary: "Prueba Gratis 14 Días",
      secondary: "Ver Precios",
    },
  },
  // ...
};
```

## 🛠️ Tecnologías Utilizadas

- [Next.js 14](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Lucide React](https://lucide.dev/) - Iconos

## 📄 Estructura del Proyecto

```
landing-template/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Benefits.tsx
│   ├── Testimonials.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── config/
│   └── landing.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 💡 Tips y Mejores Prácticas

1. **Imágenes**: Reemplaza los placeholders con imágenes reales de tu producto
2. **SEO**: Actualiza el `metadata` en `app/layout.tsx`
3. **Analytics**: Añade Google Analytics o Plausible
4. **A/B Testing**: Prueba diferentes versiones del contenido
5. **Performance**: Usa `next/image` para optimizar imágenes

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar este template:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo para tus proyectos personales o comerciales.

## 🙏 Créditos

Inspirado en las mejores landing pages del mercado, incluyendo [Cal AI](https://www.calai.app/).

---

**¿Necesitas ayuda?** Abre un issue en GitHub o contacta al equipo de desarrollo.

¡Feliz validación de productos! 🚀

# template-lading
# template-lading
