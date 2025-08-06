# Guía de Desarrollo - DSW Solutions

## 🛠️ Configuración del Entorno de Desarrollo

### Prerrequisitos

- Node.js 16+
- npm o yarn
- VS Code (recomendado)

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd dswwebpage

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

## 📝 Configuración de ESLint y Prettier

### ESLint

El proyecto está configurado con ESLint para mantener la calidad del código:

- **Reglas de React**: Mejores prácticas para componentes React
- **Reglas de Accesibilidad**: jsx-a11y para mejorar la accesibilidad
- **Reglas de Hooks**: Verificación de las reglas de React Hooks
- **Reglas de Prettier**: Integración con Prettier para formateo

### Prettier

Prettier se encarga del formateo automático del código:

- **Configuración**: `.prettierrc`
- **Archivos ignorados**: `.prettierignore`
- **Formateo automático**: Al guardar archivos

### Scripts Disponibles

```bash
# Linting
npm run lint          # Verificar errores de ESLint
npm run lint:fix      # Corregir errores automáticamente

# Formateo
npm run format        # Formatear código con Prettier
npm run format:check  # Verificar formato sin cambiar archivos

# Combinado
npm run lint:format   # Lint + Format en una sola ejecución
```

## 🔧 Configuración de VS Code

### Extensiones Recomendadas

El proyecto incluye `.vscode/extensions.json` con las extensiones recomendadas:

- **ESLint**: `dbaeumer.vscode-eslint`
- **Prettier**: `esbenp.prettier-vscode`
- **React**: `ms-vscode.vscode-typescript-next`
- **Path Intellisense**: `christian-kohler.path-intellisense`

### Configuración Automática

El archivo `.vscode/settings.json` configura:

- **Formateo automático al guardar**
- **Corrección automática de ESLint**
- **Configuración de Prettier como formateador por defecto**

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

```
src/
├── components/          # Componentes React
│   ├── layout/         # Header, Footer
│   ├── sections/       # Secciones principales
│   └── ui/            # Componentes reutilizables
├── hooks/              # Custom hooks
├── utils/              # Funciones utilitarias
├── constants/          # Configuración centralizada
├── styles/             # Estilos CSS organizados
│   ├── base/          # Variables, reset
│   ├── components/    # Estilos de componentes
│   └── utils/         # Clases utilitarias
├── types/              # Definiciones de tipos
└── services/           # Servicios y APIs
```

### Principios SOLID Aplicados

#### 1. **Single Responsibility Principle (SRP)**

- Cada componente tiene una única responsabilidad
- Hooks especializados para lógica específica
- Utilidades separadas por funcionalidad

#### 2. **Open/Closed Principle (OCP)**

- Componentes extensibles sin modificación
- Sistema de iconos dinámico
- Configuración centralizada

#### 3. **Liskov Substitution Principle (LSP)**

- Interfaces consistentes entre componentes
- Props tipadas y validadas
- Comportamiento predecible

#### 4. **Interface Segregation Principle (ISP)**

- Props específicas para cada componente
- Hooks especializados
- Utilidades modulares

#### 5. **Dependency Inversion Principle (DIP)**

- Dependencias inyectadas a través de props
- Uso de constantes centralizadas
- Hooks personalizados para lógica de negocio

## 🎨 Sistema de Diseño

### Variables CSS

El proyecto usa un sistema de variables CSS organizado en `src/styles/base/variables.css`:

- **Colores**: Paleta completa de púrpura y grises
- **Tipografía**: Sistema de fuentes y tamaños
- **Espaciado**: Sistema de espaciado consistente
- **Sombras**: Sistema de sombras
- **Transiciones**: Configuración de animaciones

### Clases Utilitarias

Archivo `src/styles/utils/utilities.css` con clases reutilizables:

- **Layout**: Flexbox, Grid, Container
- **Espaciado**: Gap, Padding, Margin
- **Tipografía**: Tamaños, pesos, alineación
- **Colores**: Text, Background
- **Responsive**: Breakpoints y media queries

## 🚀 Flujo de Trabajo

### Desarrollo

1. **Crear rama feature**: `git checkout -b feature/nombre-feature`
2. **Desarrollar**: El código se formatea automáticamente al guardar
3. **Verificar**: `npm run lint:format` antes de commit
4. **Commit**: `git commit -m "feat: descripción del cambio"`

### Commits

Usar [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: nueva funcionalidad
fix: corrección de bug
docs: documentación
style: cambios de formato
refactor: refactorización
test: tests
chore: tareas de mantenimiento
```

### Pull Request

1. **Crear PR** desde feature branch a main
2. **Verificar**: CI/CD debe pasar
3. **Code Review**: Revisión por pares
4. **Merge**: Solo después de aprobación

## 🧪 Testing

### Configuración

- **Jest**: Framework de testing
- **React Testing Library**: Testing de componentes
- **Coverage**: Reportes de cobertura

### Scripts

```bash
npm test              # Ejecutar tests
npm test -- --watch  # Modo watch
npm test -- --coverage  # Con cobertura
```

## 📦 Build y Deploy

### Build de Producción

```bash
npm run build
```

### Análisis de Bundle

```bash
npm run build --analyze
```

### Deploy

El proyecto está configurado para deploy en:

- **Vercel**: Deploy automático desde GitHub
- **Netlify**: Deploy automático desde GitHub
- **GitHub Pages**: Deploy manual

## 🔍 Debugging

### Herramientas de Desarrollo

- **React Developer Tools**: Extensión de Chrome
- **Redux DevTools**: Si se usa Redux
- **Network Tab**: Para debugging de APIs

### Logs

- **Console**: Para debugging básico
- **Error Boundaries**: Para capturar errores de React
- **Performance**: React Profiler

## 📚 Recursos Adicionales

### Documentación

- [React Docs](https://reactjs.org/docs/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)

### Herramientas

- [Create React App](https://create-react-app.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)

### Mejores Prácticas

- [React Best Practices](https://reactjs.org/docs/hooks-rules.html)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Performance Optimization](https://reactjs.org/docs/optimizing-performance.html)
