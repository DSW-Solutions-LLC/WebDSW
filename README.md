# 🌐 WebDSW – Sitio oficial de DSW Solutions

Bienvenido al repositorio del sitio web de **DSW Solutions**, una empresa de tecnología que impulsa la transformación digital a través de soluciones de software personalizadas, modernas y escalables.

---

## 🧹 Sobre el proyecto

Este sitio está diseñado como una landing page moderna y profesional que refleja la identidad y capacidades de DSW Solutions. Cuenta con navegación fluida, diseño responsive, animaciones sutiles y un enfoque visual enfocado en captar la atención de nuevos clientes y talento tecnológico.

---

## 🚀 Tecnologías utilizadas

| Tecnología                | Descripción                                       |
| ------------------------- | ------------------------------------------------- |
| **React**                 | Framework principal para construir la UI          |
| **Tailwind CSS**          | Sistema de diseño y utilidades CSS modernas       |
| **Framer Motion**         | Librería de animaciones fluidas y performantes    |
| **React Slick**           | Carrusel responsivo para banners dinámicos        |
| **CSS Modules**           | Estilizado por secciones con separación de lógica |
| **GitHub Pages** / Vercel | Hosting y despliegue continuo del sitio           |

---

## 📦 Instalación local

1. **Clonar el repositorio**:

```bash
git clone https://github.com/DSW-Solutions-LLC/WebDSW.git
cd WebDSW
```

2. **Instalar dependencias**:

```bash
npm install
```

3. **Iniciar el proyecto en modo desarrollo**:

```bash
npm run dev
```

> Asegurate de tener instalado **Node.js v18+** y **npm**.

---

## 📁 Estructura del proyecto

```
WEBDSW/
├── build/ # Archivos generados al compilar
├── node_modules/ # Dependencias del proyecto
├── public/ # Archivos públicos (index.html, favicon, etc)
├── src/ # Código fuente principal
│ ├── components/ # Componentes reutilizables (Header, Footer, etc.)
│ ├── icono/ # Íconos personalizados o SVGs
│ ├── images/ # Imágenes del sitio
│ ├── styles/ # Archivos CSS organizados
│ ├── App.css # Estilos globales de la App
│ ├── App.js # Componente principal
│ ├── App.test.js # Test inicial de React
│ ├── index.css # Estilos base importados en index.js
│ ├── index.js # Entrada de React DOM
│ ├── logo.svg # Logo usado por defecto
│ ├── reportWebVitals.js # Métricas de rendimiento
│ └── setupTests.js # Setup para tests
├── .gitignore # Archivos y carpetas ignorados por git
├── .nvmrc # Versión de Node recomendada
├── .prettierrc # Configuración de Prettier
├── package.json # Dependencias y scripts del proyecto
├── tailwind.config.js # Configuración de TailwindCSS
└── README.md # Este archivo
```

---

## 🛍 Navegación y secciones

- `/#solutions` → Sección de **Soluciones**
- `/#apps` → Presentación de nuestras **Apps**
- `/#projects` → Portafolio de **Proyectos**
- `/#contactus` → Datos de contacto y llamada a la acción

Cada sección está optimizada con `scroll-margin` para que el header no tape los títulos al navegar.

---

## 🎨 Diseño y experiencia

- ✨ Transiciones suaves al hacer scroll
- 📱 Adaptado a pantallas móviles, tablets y desktops
- 🎮 Animaciones que aparecen al hacer scroll (con `framer-motion`)
- 🗒️ Menú colapsable en móviles con íconos accesibles (`react-icons`)
- 📸 Banners atractivos con imágenes dinámicas y llamadas a la acción

---

## 🧑‍💻 Buenas prácticas implementadas

- Código modular y reutilizable
- Separación clara entre lógica, estilo y contenido
- Scroll anchor corregido para que el `Header` no tape secciones
- Animaciones no invasivas con `framer-motion`
- Tipografía y diseño elegidos para máxima legibilidad en fondo oscuro

---

## 🛠 Contribución

¿Querés colaborar con el proyecto?

1. Hacé un fork del repo
2. Creá tu rama: `git checkout -b feature/nueva-feature`
3. Subí tus cambios: `git commit -am 'Agrega nueva feature'`
4. Push: `git push origin feature/nueva-feature`
5. Abrí un Pull Request 🚀

---

## 🧑‍💼 Autor y contacto

**DSW Solutions**
📍 Buenos Aires, Argentina
📧 [info@dswsolutions.com.ar](mailto:info@dswsolutions.com.ar)
🌐 [https://www.dswsolutions.com.ar](https://www.dswsolutions.com.ar)

---

## 📝 Licencia

Este repositorio es propiedad privada de **DSW Solutions SRL**. Su uso, distribución o modificación requiere autorización expresa.

---

## 💡 Próximas mejoras

- Integración de formularios con backend (Node/Express o Formspree)
- Página de blog o novedades
- Animaciones más avanzadas por sección
- Soporte multilenguaje
