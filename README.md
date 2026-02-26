# 🚀 DSW Solutions - Software Factory Website

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modular-orange?style=for-the-badge&logo=css3)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-red?style=for-the-badge&logo=html5)
![ESLint](https://img.shields.io/badge/ESLint-Code%20Quality-lightblue?style=for-the-badge&logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-Code%20Formatting-pink?style=for-the-badge&logo=prettier)

</div>

## 📋 Descripción

Un sitio web moderno y profesional para una empresa de desarrollo de software, construido con **React** y siguiendo los principios **SOLID** y las mejores prácticas de desarrollo frontend. El proyecto implementa un diseño responsive con tema oscuro y acentos púrpuras, optimizado para SEO y accesibilidad.

## ✨ Características Principales

- 🎨 **Diseño Moderno**: Tema oscuro con acentos púrpuras
- 📱 **Responsive Design**: Mobile-first approach
- ⚡ **Performance**: Optimizado para velocidad y SEO
- ♿ **Accesibilidad**: ARIA labels y navegación por teclado
- 🧹 **Código Limpio**: Principios SOLID y mejores prácticas
- 🎯 **SEO Optimizado**: Meta tags y estructura semántica
- 🔧 **Developer Experience**: ESLint, Prettier y configuración VS Code

## 🛠️ Stack Tecnológico

### Frontend

- **React 18.2.0** - Biblioteca de UI
- **JavaScript ES6+** - Sintaxis moderna
- **CSS3 Modular** - Estilos organizados por componentes
- **HTML5 Semántico** - Estructura accesible

### Herramientas de Desarrollo

- **ESLint** - Linting y calidad de código
- **Prettier** - Formateo automático
- **VS Code** - Configuración optimizada
- **Git** - Control de versiones

### Librerías

- **Lucide React** - Iconografía moderna
- **Framer Motion** - Animaciones (preparado)
- **React Router DOM** - Navegación (preparado)

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/dswwebpage.git
cd dswwebpage

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm start
```

### Scripts Disponibles

```bash
# Desarrollo
npm start          # Inicia servidor de desarrollo
npm run build      # Construye para producción
npm run test       # Ejecuta tests

# Linting y Formateo
npm run lint       # Ejecuta ESLint
npm run lint:fix   # Corrige errores de ESLint
npm run format     # Formatea código con Prettier
npm run format:check # Verifica formato
npm run lint:format # Lint + Format en un comando
```

## 📁 Estructura del Proyecto

```
dswwebpage/
├── public/                 # Archivos estáticos
│   ├── index.html         # HTML principal
│   └── favicon.ico        # Icono del sitio
├── src/
│   ├── components/        # Componentes React
│   │   ├── layout/       # Componentes de layout
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   └── sections/     # Secciones de la página
│   │       ├── Hero.js
│   │       ├── Services.js
│   │       ├── Projects.js
│   │       └── Contact.js
│   ├── hooks/            # Custom hooks
│   │   ├── useForm.js
│   │   └── useScroll.js
│   ├── styles/           # Estilos CSS
│   │   ├── base/        # Variables y reset
│   │   ├── components/  # Estilos de componentes
│   │   └── utils/       # Utilidades CSS
│   ├── constants/       # Constantes y datos
│   ├── utils/          # Funciones utilitarias
│   ├── assets/         # Imágenes y recursos
│   └── App.js          # Componente principal
├── package.json
└── README.md
```

## 🎨 Sistema de Diseño

### Paleta de Colores

- **Primarios**: Escala de púrpura (#7728c0, #c992fc, etc.)
- **Grises**: Escala de grises (#08020d, #f6f6f6, etc.)
- **Base**: Blanco (#F6F6F6) y Negro (#08020D)

### Tipografía

- **Fuente Principal**: Inter, Roboto, Signika
- **Pesos**: 300, 400, 500, 600, 700
- **Tamaños**: Sistema de escala consistente

### Componentes

- **Responsive Design**: Mobile-first approach
- **Accesibilidad**: ARIA labels y navegación por teclado
- **Performance**: Lazy loading y optimizaciones

## 🔧 Configuración de Desarrollo

### VS Code Extensions

El proyecto incluye configuración automática para:

- **ESLint** - Linting en tiempo real
- **Prettier** - Formateo automático
- **Auto-save** - Guardado automático
- **Format on Save** - Formateo al guardar

### Configuración de ESLint

```json
{
  "extends": ["react-app", "react-app/jest"],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "warn"
  }
}
```

### Configuración de Prettier

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Características Responsive

- **Mobile-first**: Diseño optimizado para móviles
- **Grid System**: CSS Grid y Flexbox
- **Typography**: Escala responsiva
- **Images**: Optimizadas para diferentes pantallas

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch

# Generar reporte de coverage
npm test -- --coverage
```

## 🚀 Deployment

### Build para Producción

```bash
npm run build
```

### Deployment en Hostinger VPS + Docker

Para desplegar en Hostinger con Docker + HTTPS:

📖 **[Ver guía completa de deployment →](./DEPLOYMENT.md)**

Resumen rápido:
```bash
# 1. Clone y configure certificados
bash init-certbot.sh

# 2. Levante Docker
docker-compose up -d --build

# 3. Visite https://dswsolutions.io ✅
```

### Optimizaciones de Producción

- **Code Splitting**: Carga lazy de componentes
- **Minificación**: CSS y JS optimizados
- **Compresión**: Gzip habilitado
- **Caching**: Headers de cache configurados
- **HTTPS**: Let's Encrypt + Certificados renovación automática
- **Docker**: Multi-stage build optimizado
- **Nginx**: Configuración de seguridad y performance

## 📚 Documentación

| Documento | Descripción |
|-----------|------------|
| **[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)** | 📊 Análisis completo del proyecto, estructura y tech stack |
| **[DEPLOYMENT.md](./DEPLOYMENT.md)** | 🚀 Guía paso a paso para deployment en Hostinger + Docker |
| **[HTTPS_SETUP.md](./HTTPS_SETUP.md)** | 🔐 Configuración de HTTPS con Let's Encrypt |
| **[DEVELOPMENT.md](./DEVELOPMENT.md)** | 🛠️ Guía de desarrollo local |

## 📊 Performance

### Métricas Objetivo

- **Lighthouse Score**: > 90 en todas las categorías
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Optimizaciones Implementadas

- **Lazy Loading**: Componentes cargados bajo demanda
- **Image Optimization**: WebP y formatos modernos
- **Code Splitting**: Bundles optimizados
- **Tree Shaking**: Eliminación de código no usado

## 🔒 Seguridad

### Mejores Prácticas Implementadas

- **HTTPS**: Redirección automática
- **CSP Headers**: Content Security Policy
- **XSS Protection**: Headers de seguridad
- **Input Validation**: Validación de formularios

## 🤝 Contribución

### Guía de Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código

- **ESLint**: Configuración estricta
- **Prettier**: Formateo consistente
- **Conventional Commits**: Estándar de commits
- **Code Review**: Revisión obligatoria

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- **DSW Solutions** - _Desarrollo inicial_ - [DSW Solutions](https://github.com/dswsolutions)

## 🙏 Agradecimientos

- **React Team** - Por el increíble framework
- **Lucide** - Por los iconos modernos
- **Figma** - Por el diseño original
- **Comunidad Open Source** - Por las herramientas utilizadas

## 📞 Contacto

- **Email**: contacto@dswsolutions.com
- **Website**: [dswsolutions.com](https://dswsolutions.com)
- **GitHub**: [@dswsolutions](https://github.com/dswsolutions)

---

<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella en GitHub!**

</div>
