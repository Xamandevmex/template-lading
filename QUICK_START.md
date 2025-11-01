# 🚀 Guía Rápida - Landing Template

## Inicio Rápido en 3 Pasos

### 1️⃣ Instalar Dependencias

```bash
npm install
```

### 2️⃣ Personalizar Contenido

Abre `config/landing.config.ts` y edita el objeto `defaultConfig`:

```typescript
export const defaultConfig: LandingConfig = {
  product: {
    name: "Tu Producto",           // 👈 Cambia esto
    tagline: "Tu tagline aquí",    // 👈 Y esto
    description: "Tu descripción", // 👈 Y esto
  },
  // ... resto de la configuración
};
```

### 3️⃣ Ejecutar

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) 🎉

---

## 📝 Personalización Completa

### Cambiar el Hero

```typescript
hero: {
  badge: "🎉 Tu badge aquí",
  title: "Tu Título Principal",
  subtitle: "Tu subtítulo descriptivo",
  cta: {
    primary: "Botón Principal",
    secondary: "Botón Secundario",
  },
  stats: {
    users: "10K+",
    rating: "4.8",
  },
}
```

### Añadir Features

```typescript
features: {
  title: "¿Qué incluye?",
  items: [
    {
      title: "Nombre de la Feature",
      description: "Descripción detallada",
      icon: "Zap", // Iconos disponibles: Camera, Database, Brain, Zap, Shield, TrendingUp
    },
    // Añade más items...
  ],
}
```

### Personalizar Benefits

```typescript
benefits: {
  title: "¿Por qué elegir tu producto?",
  items: [
    {
      title: "Beneficio 1",
      description: "Explicación del beneficio",
      icon: "Clock", // Iconos: Clock, Link, TrendingDown, Sparkles, Target, Heart
    },
    // Añade más items...
  ],
}
```

### Añadir Testimonios

```typescript
testimonials: {
  title: "Lo que dicen los usuarios",
  items: [
    {
      name: "Nombre Usuario",
      role: "Cargo/Rol",
      content: "Su testimonio aquí",
      rating: 5,
    },
    // Añade más testimonios...
  ],
}
```

### CTA Final

```typescript
finalCta: {
  title: "¡TU LLAMADO A LA ACCIÓN!",
  subtitle: "Mensaje secundario",
  buttonText: "Texto del Botón",
}
```

---

## 🎨 Cambiar Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // 👈 Color principal
    600: '#0284c7',  // 👈 Color hover/activo
    // ... más tonos
  },
}
```

Los colores se aplicarán automáticamente en:
- Botones
- Gradientes
- Iconos
- Highlights

---

## 🖼️ Añadir Imágenes

### Hero Image

Edita `components/Hero.tsx`, línea ~85:

```typescript
<div className="aspect-video bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
  <img src="/tu-imagen.png" alt="Tu producto" />
</div>
```

### Avatares de Testimonios

Los avatares muestran la inicial del nombre por defecto. Para usar imágenes:

```typescript
{
  name: "Juan Pérez",
  avatar: "/avatars/juan.jpg", // 👈 Añade esta propiedad
  // ...
}
```

---

## 📱 Links y Redes Sociales

```typescript
links: {
  appStore: "https://apps.apple.com/tu-app",
  playStore: "https://play.google.com/store/apps/tu-app",
  website: "https://tu-sitio.com",
  social: {
    twitter: "https://twitter.com/tu-usuario",
    instagram: "https://instagram.com/tu-usuario",
    linkedin: "https://linkedin.com/company/tu-empresa",
    tiktok: "https://tiktok.com/@tu-usuario",
  },
}
```

---

## 🎯 Usar Ejemplos Pre-configurados

Tenemos 3 ejemplos listos para usar:

### SaaS / Plataforma

```typescript
// app/page.tsx
import { saasConfig } from '@/config/examples/saas.config';

export default function Home() {
  return (
    <main>
      <Hero config={saasConfig.hero} productName={saasConfig.product.name} />
      <Features config={saasConfig.features} />
      {/* ... */}
    </main>
  );
}
```

### App Móvil

```typescript
import { mobileAppConfig } from '@/config/examples/mobile-app.config';
```

### E-commerce

```typescript
import { ecommerceConfig } from '@/config/examples/ecommerce.config';
```

---

## 🔧 Customizaciones Avanzadas

### Añadir Nueva Sección

1. Crea un nuevo componente en `components/`
2. Impórtalo en `app/page.tsx`
3. Añade su configuración en `config/landing.config.ts`

### Cambiar Animaciones

Los componentes usan Framer Motion. Ejemplo:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}      // Estado inicial
  animate={{ opacity: 1, y: 0 }}       // Estado final
  transition={{ duration: 0.5 }}       // Duración
>
```

### Añadir Más Iconos

```typescript
// En el componente
import { NuevoIcono } from 'lucide-react';

const iconMap = {
  ...existingIcons,
  NuevoIcono,
};
```

Ver todos los iconos: [lucide.dev](https://lucide.dev/)

---

## 🚀 Deploy a Producción

### Vercel (1 click)

1. Push a GitHub
2. Importa en [vercel.com](https://vercel.com)
3. Deploy automático ✨

### Netlify

```bash
npm run build
# Sube la carpeta .next
```

---

## ❓ FAQ

**¿Puedo usar esto comercialmente?**
✅ Sí, licencia MIT

**¿Funciona con Next.js 13?**
✅ Sí, pero recomendamos Next.js 14

**¿Es responsive?**
✅ 100% responsive para móvil, tablet y desktop

**¿Puedo cambiar los componentes?**
✅ Totalmente, todos los componentes son editables

**¿Necesito saber TypeScript?**
⚠️ Ayuda, pero puedes copiar los ejemplos

---

## 🆘 Soporte

¿Problemas? Revisa:
1. ¿Instalaste las dependencias? `npm install`
2. ¿Node.js v18+? `node --version`
3. ¿Puerto 3000 ocupado? Usa `npm run dev -- -p 3001`

---

**¡Listo para validar tu producto!** 🎉

Para más detalles, consulta el [README.md](./README.md) completo.

