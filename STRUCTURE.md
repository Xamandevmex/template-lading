# 📁 Estructura del Proyecto

```
landing-template/
│
├── 📄 package.json              # Dependencias del proyecto
├── 📄 tsconfig.json             # Configuración TypeScript
├── 📄 tailwind.config.ts        # Configuración Tailwind CSS
├── 📄 next.config.js            # Configuración Next.js
├── 📄 postcss.config.js         # Configuración PostCSS
├── 📄 .gitignore                # Archivos ignorados por Git
├── 📄 .eslintrc.json            # Configuración ESLint
│
├── 📖 README.md                 # Documentación completa
├── 📖 QUICK_START.md            # Guía rápida de inicio
├── 📖 STRUCTURE.md              # Este archivo
│
├── 📁 app/                      # Directorio principal de Next.js
│   ├── 📄 layout.tsx            # Layout principal (HTML, fuentes)
│   ├── 📄 page.tsx              # Página principal (Landing page)
│   ├── 📄 globals.css           # Estilos globales y utilidades
│   └── 📄 favicon.ico           # Icono del sitio
│
├── 📁 components/               # Componentes reutilizables
│   ├── 📄 Hero.tsx              # Sección Hero (primera pantalla)
│   ├── 📄 Features.tsx          # Grid de características
│   ├── 📄 Benefits.tsx          # Lista de beneficios
│   ├── 📄 Testimonials.tsx      # Testimonios de usuarios
│   ├── 📄 FinalCTA.tsx          # CTA final con gradiente
│   └── 📄 Footer.tsx            # Footer con links y social
│
└── 📁 config/                   # Configuraciones de contenido
    ├── 📄 landing.config.ts     # Config por defecto (Cal AI)
    ├── 📄 custom.config.ts.template  # Plantilla para crear tu config
    └── 📁 examples/             # Ejemplos pre-configurados
        ├── 📄 saas.config.ts         # Ejemplo: SaaS/Plataforma
        ├── 📄 mobile-app.config.ts   # Ejemplo: App Móvil
        └── 📄 ecommerce.config.ts    # Ejemplo: E-commerce
```

---

## 🗂️ Descripción de Carpetas

### `/app`
Carpeta principal de Next.js 14 (App Router):
- **layout.tsx**: Estructura HTML base, fuentes, metadata
- **page.tsx**: Landing page que integra todos los componentes
- **globals.css**: Estilos CSS globales, utilidades Tailwind, animaciones

### `/components`
Componentes React reutilizables y modulares:
- **Hero**: Primera impresión, CTA principal, stats
- **Features**: Grid de características con iconos
- **Benefits**: Beneficios con diseño alternado
- **Testimonials**: Cards de testimonios con ratings
- **FinalCTA**: Sección final con gradiente animado
- **Footer**: Footer completo con links y redes sociales

### `/config`
Archivos de configuración de contenido:
- **landing.config.ts**: Configuración por defecto
- **custom.config.ts.template**: Plantilla para crear tus configs
- **/examples**: Ejemplos listos para usar (SaaS, Mobile, E-commerce)

---

## 🔄 Flujo de Datos

```
config/landing.config.ts
         ↓
    app/page.tsx
         ↓
    components/*
         ↓
   Browser (UI)
```

1. Defines el contenido en **config**
2. **page.tsx** importa la config y pasa a componentes
3. Los **componentes** renderizan el UI con la data
4. El usuario ve la **landing page** completa

---

## 🎨 Sistema de Estilos

```
tailwind.config.ts    → Define colores y tema
        ↓
app/globals.css       → Estilos base y utilidades
        ↓
components/*.tsx      → Aplican clases Tailwind
        ↓
Browser               → CSS compilado y optimizado
```

---

## 🧩 Componentes y Props

### Hero
```typescript
<Hero 
  config={hero}           // Config del hero
  productName={name}      // Nombre del producto
/>
```

### Features
```typescript
<Features 
  config={features}       // Array de features
/>
```

### Benefits
```typescript
<Benefits 
  config={benefits}       // Array de beneficios
/>
```

### Testimonials
```typescript
<Testimonials 
  config={testimonials}   // Array de testimonios
/>
```

### FinalCTA
```typescript
<FinalCTA 
  config={finalCta}       // Config del CTA
/>
```

### Footer
```typescript
<Footer 
  config={{
    product,              // Info del producto
    links                 // Links y social
  }}
/>
```

---

## 🎯 Archivos Clave para Personalizar

| Archivo | Propósito | Prioridad |
|---------|-----------|-----------|
| `config/landing.config.ts` | Contenido principal | 🔴 Alta |
| `tailwind.config.ts` | Colores y tema | 🟡 Media |
| `app/page.tsx` | Estructura de la página | 🟢 Baja |
| `app/layout.tsx` | Metadata y SEO | 🟡 Media |
| `components/*.tsx` | Diseño de componentes | 🟢 Baja |

---

## 📦 Dependencias Principales

```json
{
  "next": "^14.2.0",              // Framework React
  "react": "^18.3.0",             // Biblioteca UI
  "framer-motion": "^11.0.0",     // Animaciones
  "lucide-react": "^0.344.0",     // Iconos
  "tailwindcss": "^3.4.0",        // Estilos
  "typescript": "^5.3.0"          // Type safety
}
```

---

## 🚀 Scripts Disponibles

```bash
npm run dev      # Desarrollo (localhost:3000)
npm run build    # Compilar para producción
npm run start    # Servidor de producción
npm run lint     # Verificar código
```

---

## 📝 Notas Importantes

1. **No modifiques archivos en `.next/`** - Se regeneran automáticamente
2. **Los archivos en `app/`** usan el App Router de Next.js 14
3. **Todos los componentes** son "use client" para usar Framer Motion
4. **La config** usa TypeScript para type-safety
5. **Los iconos** provienen de lucide-react

---

## 🔗 Enlaces Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

**¿Preguntas?** Consulta el [README.md](./README.md) completo o el [QUICK_START.md](./QUICK_START.md)

