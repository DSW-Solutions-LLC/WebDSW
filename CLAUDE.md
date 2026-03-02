# DSW Solutions - Webpage

## Proyecto
Landing page corporativa de DSW Solutions, una software factory. Single page con scroll y navegación por anclas.

## Stack
- React (Create React App, .js no .tsx)
- CSS puro con variables CSS (sin Tailwind ni frameworks de UI)
- Lucide React para iconos
- Nginx + Docker + Let's Encrypt (SSL)
- Node 20

## Estructura de archivos
```
src/
  components/
    layout/         → Header.js, Footer.js
    sections/       → Hero.js, Services.js, Stats.js, SuccessStories.js, Partners.js, Contact.js
  constants/
    index.js        → TODOS los datos y textos de la app van aquí
  hooks/
    useForm.js      → manejo de formulario de contacto
    useCountUp.js   → animación de contadores en Stats
    useScroll.js    → scroll activo, sección visible, scrollToSection()
  styles/
    base/
      variables.css → design tokens (colores, tipografía, espaciado, breakpoints)
      reset.css
    components/     → un .css por componente
    utils/          → utilities.css
  utils/
    index.js        → classNames(), debounce() y otros helpers
  assets/           → imágenes y logos
```

## Convenciones importantes
- **Datos y textos** siempre en `src/constants/index.js`, nunca hardcodeados en componentes
- **Estilos** con variables CSS de `variables.css`, nunca valores mágicos
- **Componentes** en .js (no .tsx), funcionales con hooks
- **CSS** en archivo separado por componente en `src/styles/components/`
- **Iconos** de lucide-react

## Design tokens clave
- Paleta principal: púrpura (`--primary-*`, base `--primary-500: #953ae9`)
- Fondo oscuro: `--black: #08020d`
- Texto claro: `--white: #f6f6f6`
- Fuente: Inter
- Contenedor: 80% del ancho en todos los breakpoints
- Sección padding: `--section-padding: 80px`

## Breakpoints (mobile-first)
- xs: 480px | sm: 640px | md: 768px | lg: 1024px | xl: 1280px
- Usar siempre `min-width` en media queries (mobile-first), no `max-width`

## Prioridades de desarrollo frontend
- **Mobile-first siempre**: diseñar y codear para móvil primero, luego escalar con `min-width`
- **Performance**: lazy loading en imágenes (`loading="lazy"`), evitar re-renders innecesarios
- **Accesibilidad**: `alt` en imágenes, `aria-label` en botones sin texto, HTML semántico (`<section>`, `<nav>`, `<main>`, `<header>`, `<footer>`)
- **CSS**: usar variables de `variables.css`, nunca valores mágicos hardcodeados
- **Sin dependencias innecesarias**: si se puede hacer con CSS o React puro, no agregar librería
- **Imágenes**: siempre con `width` y `height` explícitos para evitar CLS (layout shift)

## Imágenes - Casos de Éxito (SuccessStories)
- **Ubicación**: `public/images/cases/`
- **Nombres**: `ecommerce.webp`, `logistica.webp`, `hoteleria.webp`, `analytics.webp`, `fintech.webp`, `educacion.webp`
- **Formato**: WebP (soporte universal en 2024+). Exportar también `.jpg` como fallback si es necesario
- **Dimensiones**: 680×400px (se muestra a 340×200, el doble es para pantallas retina)
- **Peso máximo**: 100KB por imagen
- **Aspect ratio**: 17:10
- **Contenido recomendado**: screenshots reales de proyectos, mockups, o fotos de contexto del sector (retail, logística, hotel, etc.)
- **NO usar**: imágenes genéricas de stock con marca de agua, imágenes demasiado oscuras (el texto de categoría se superpone)

## Hooks disponibles
- `useScroll()` → `{ scrollY, isScrolling, activeSection, scrollToSection }`
- `useCountUp(target, duration)` → número animado
- `useForm(initialValues)` → manejo de formulario

## Secciones (IDs para anclas)
`#home` → `#services` → `#stats` → `#success-stories` → `#partners` → `#contact`

## Despliegue
- Dominio: dswsolutions.io
- VPS Hostinger, archivos en `/docker/webdsw`
- Repo: https://github.com/DSW-Solutions-LLC/WebDSW (rama `main`)
- `make upweb` → primera vez (configura SSL + levanta)
- `make deploy` → actualizar con último commit del repo
- `make logs` → ver logs en vivo
