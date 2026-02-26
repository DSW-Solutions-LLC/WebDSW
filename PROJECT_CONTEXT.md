# 📊 DSW Solutions Website - Contexto del Proyecto

**Última actualización:** 2026-02-26

## 🎯 Descripción General

Sitio web corporativo moderno para **DSW Solutions** (Software Factory). Es una aplicación web estática (SPA) que se sirve a través de **Nginx** en **Docker** con soporte completo para **HTTPS**.

---

## 📦 Tech Stack

| Capa | Tecnologías |
|------|------------|
| **Frontend** | React 19 + JavaScript ES6+ |
| **Styling** | CSS3 modular (Tema oscuro/púrpura) |
| **Componentes** | Lucide React (iconos), Framer Motion (animaciones) |
| **Ruteo** | React Router DOM v6.28 |
| **Build** | React Scripts 5.0.1 |
| **Dev Tools** | ESLint + Prettier |
| **Deployment** | Docker (Node 20 alpine) + Nginx alpine |
| **SSL** | Let's Encrypt + Certbot |

---

## 📁 Estructura del Proyecto

```
WebDSW/
├── public/
│   └── index.html           (HTML raíz)
│
├── src/
│   ├── assets/              (Imágenes y logos)
│   │   ├── logo_dsw*.png
│   │   ├── office-team.png
│   │   ├── proyEx.png
│   │   ├── contact.png
│   │   ├── code.png
│   │   └── pchero.png
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js    (Navegación)
│   │   │   └── Footer.js    (Pie de página)
│   │   │
│   │   └── sections/        (Secciones principales)
│   │       ├── Hero.js      (Banner principal)
│   │       ├── Services.js  (Servicios)
│   │       ├── Projects.js  (Proyectos)
│   │       ├── Partners.js  (Asociados)
│   │       ├── Stats.js     (Estadísticas)
│   │       └── Contact.js   (Contacto)
│   │
│   ├── App.js              (Componente raíz con rutas)
│   ├── App.css             (Estilos globales)
│   └── App.test.js         (Tests de App)
│
├── Dockerfile              (Build multi-stage)
├── docker-compose.yml      (Orquestación)
├── nginx.conf             (Config servidor web + SSL)
├── init-certbot.sh        (Script certificados SSL)
├── package.json           (Dependencias)
├── .prettierrc            (Config Prettier)
├── .dockerignore          (Archivos ignorados en build)
├── .gitignore            (Archivos ignorados en git)
├── README.md             (Documentación principal)
├── HTTPS_SETUP.md        (Setup HTTPS en Hostinger)
├── DEVELOPMENT.md        (Guía de desarrollo)
└── PROJECT_CONTEXT.md    (Este archivo)
```

---

## ✨ Características Implementadas

### 🎨 Frontend
- ✅ Responsive design (Mobile-first)
- ✅ Tema moderno oscuro/púrpura
- ✅ Animaciones suaves con Framer Motion
- ✅ Iconos con Lucide React
- ✅ React Router para navegación SPA
- ✅ Accesibilidad (ARIA labels, alt text)

### 🔒 Seguridad
- ✅ HTTPS con Let's Encrypt
- ✅ Headers de seguridad:
  - `Strict-Transport-Security` (HSTS)
  - `X-Frame-Options` (clickjacking)
  - `X-Content-Type-Options` (MIME sniffing)
  - `X-XSS-Protection`
- ✅ TLS 1.2 y 1.3
- ✅ Ciphers seguros

### ⚡ Performance
- ✅ Gzip compression
- ✅ Cache de assets estáticos (1 año)
- ✅ Build optimizado (multi-stage Docker)
- ✅ Minificación automática

### 🚀 DevOps
- ✅ Docker + Nginx
- ✅ Auto-restart en fallos
- ✅ Renovación automática de certificados (cron)
- ✅ Volúmenes persistentes para SSL

---

## 🐳 Docker & Deployment

### Dockerfile (Multi-stage)
```
Stage 1: Node 20 alpine → Build React (npm run build)
Stage 2: Nginx alpine → Servir build + SSL
```

### docker-compose.yml
```yaml
- Port 80 (HTTP) → 80 (redirige a HTTPS)
- Port 443 (HTTPS) → 443 (certificados SSL)
- Volúmenes:
  - /etc/letsencrypt (certificados, read-only)
  - /var/lib/letsencrypt (validación ACME)
- Restart: unless-stopped
```

### nginx.conf (Configuración Nginx)
- **Puerto 80:** Redirige HTTP → HTTPS
- **Puerto 443:** HTTPS con SSL/TLS
- **React Router:** `try_files $uri $uri/ /index.html`
- **Cache:** Assets estáticos (CSS, JS, imágenes) = 1 año
- **Gzip:** Activo para CSS, JS, JSON
- **Headers de seguridad:** HSTS, X-Frame-Options, etc.

---

## 🔐 HTTPS Setup

### Scripts
- `init-certbot.sh`: Genera certificados SSL de Let's Encrypt (ejecutar solo una vez)

### Certificados Let's Encrypt
- Ubicación en servidor: `/etc/letsencrypt/live/dswsolutions.io/`
- Validez: 90 días
- Renovación automática: Cron job cada domingo a las 3 AM

### Dominio Actual
- `dswsolutions.io`
- `www.dswsolutions.io`

---

## 📝 Scripts NPM

```bash
npm start          # Desarrollo local (port 3000)
npm run build      # Build producción (optimizado)
npm test           # Tests con Jest
npm run lint       # Verificar código ESLint
npm run lint:fix   # Corregir automáticamente
npm run format     # Formatear con Prettier
npm run format:check # Verificar formato
npm run lint:format # Lint + format en uno
npm run deploy     # Deploy a gh-pages (si aplica)
```

---

## 🚀 Deployment en Hostinger

### Requisitos
- VPS con Docker + Docker Compose
- Dominio apuntando al servidor
- SSH acceso

### Pasos de Deploy
1. Clone el repositorio
2. Edite `init-certbot.sh` (agregue su email)
3. Ejecute `bash init-certbot.sh` (una sola vez)
4. `docker-compose up -d --build`
5. Espere 2 minutos a que Nginx arranque
6. Visite `https://dswsolutions.io`

### Troubleshooting
| Error | Solución |
|-------|----------|
| Port 80 in use | `sudo systemctl stop apache2` |
| Certificado falla | Verificar dominio apunta correctamente |
| Nginx no arranca | Revisar logs: `docker logs container_id` |

---

## 🔄 Workflow de Desarrollo

### Local
```bash
npm install
npm start  # http://localhost:3000
```

### Testing
```bash
npm run lint:format  # Verificar código
npm test             # Ejecutar tests
```

### Production Build
```bash
npm run build
# Resultado: carpeta ./build lista para servidor
```

---

## 📚 Documentación Relacionada
- `README.md` - Descripción general del proyecto
- `DEVELOPMENT.md` - Guía de desarrollo local
- `HTTPS_SETUP.md` - Detalles de configuración HTTPS
- `DEPLOYMENT.md` - Instrucciones de deployment (crear)

---

## 👥 Contacto / Soporte
Proyecto: DSW Solutions Website
Mantenedor: DSW Solutions LLC
Última revisión: 2026-02-26
