# 🚀 Guía Completa de Deployment

**Para:** Hostinger VPS + Docker + HTTPS

---

## ⚡ Quick Start (5 minutos)

```bash
# 1. SSH al servidor
ssh root@dswsolutions.io

# 2. Clone el proyecto
git clone https://github.com/DSW-Solutions-LLC/WebDSW.git
cd WebDSW

# 3. Edite email en el script
sed -i 's/your-email@example.com/tu-email@gmail.com/g' init-certbot.sh

# 4. Ejecute setup (una sola vez)
bash init-certbot.sh

# 5. Levante Docker
docker-compose up -d --build

# 6. Espere 2-3 minutos y visite https://dswsolutions.io ✅
```

---

## 📋 Checklist Pre-Deploy

- [ ] Dominio apunta a IP del servidor (verificar en registrador)
- [ ] SSH funciona correctamente
- [ ] Docker instalado: `docker --version`
- [ ] Docker Compose instalado: `docker-compose --version`
- [ ] Puertos 80 y 443 disponibles (sin Apache/Nginx corriendo)
- [ ] Email válido para certificados

---

## 🔧 Instalación Detallada

### 1. Preparar Servidor Hostinger

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker (si no está)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Instalar Docker Compose (si no está)
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verificar instalaciones
docker --version
docker-compose --version
```

### 2. Detener Apache (si está corriendo)

```bash
# En Hostinger suele estar Apache
sudo systemctl stop apache2
sudo systemctl disable apache2

# Liberar puertos 80 y 443
sudo lsof -i :80
sudo lsof -i :443
```

### 3. Obtener Certificados SSL

```bash
# Navegar al proyecto
cd /path/to/WebDSW

# Editar script con tu email
nano init-certbot.sh
# Buscar: your-email@example.com
# Reemplazar con: tu-email@ejemplo.com
# Ctrl+X → Y → Enter

# Ejecutar script
bash init-certbot.sh

# Este script:
# - Crea directorios /etc/letsencrypt/
# - Solicita certificados a Let's Encrypt
# - Válida dominio con ACME challenge
# - Guarda certificados por 90 días
```

**Verificar certificados:**
```bash
ls -la /etc/letsencrypt/live/dswsolutions.io/
# Debe mostrar: fullchain.pem, privkey.pem, chain.pem, cert.pem
```

### 4. Construir e Iniciar Docker

```bash
# Detener si hay algo corriendo
docker-compose down

# Construir imagen (primera vez tarda ~3-5 min)
docker-compose up -d --build

# Esperar a que Nginx arranque
sleep 5

# Ver logs
docker-compose logs web

# Debe mostrar: "nginx: master process"
```

### 5. Verificar que Funciona

```bash
# HTTP → HTTPS redirect
curl -I http://dswsolutions.io
# Debe mostrar: HTTP/1.1 301, Location: https://...

# HTTPS funciona
curl -I https://dswsolutions.io
# Debe mostrar: HTTP/2 200

# Desde navegador
# Visitar: https://dswsolutions.io ✅
```

---

## 📦 Actualizar Código (Después de cambios en Git)

```bash
cd /path/to/WebDSW

# Traer cambios
git pull origin main

# Reconstruir Docker
docker-compose down
docker-compose up -d --build

# Verificar
curl -I https://dswsolutions.io
```

---

## 🔄 Renovación Automática de Certificados

Let's Encrypt expira cada 90 días. Configurar renovación automática:

```bash
# Editar crontab
crontab -e

# Agregar esta línea al final:
0 3 * * 0 certbot renew --quiet && docker-compose -f /path/to/WebDSW/docker-compose.yml restart web
```

**Explicación:**
- `0 3 * * 0` = Cada domingo a las 3 AM
- `certbot renew --quiet` = Renovar certificados silenciosamente
- `docker-compose restart web` = Reiniciar Docker con certificados nuevos

---

## 🐛 Troubleshooting

### ❌ "Port 80 already in use"
```bash
# Ver qué usa el puerto
sudo lsof -i :80

# Matar el proceso (ej: Apache)
sudo systemctl stop apache2
sudo systemctl disable apache2

# Reintentar Docker
docker-compose up -d --build
```

### ❌ "Connection refused" en HTTPS
```bash
# Verificar que Docker está corriendo
docker ps

# Ver logs de Docker
docker-compose logs web

# Esperar 30 segundos y reintentar (Nginx tarda en arrancar)
```

### ❌ "Certificate validation failed"
```bash
# Verificar dominio apunta correctamente
nslookup dswsolutions.io

# Debe mostrar IP del servidor Hostinger

# Si no está correcto:
# - Ir a registrador de dominio
# - Cambiar DNS a IP del servidor Hostinger
# - Esperar 24-48 horas

# Reintentar certificados
bash init-certbot.sh
```

### ❌ "Nginx won't start" - Ver logs detallados
```bash
docker-compose down
docker logs webdsw_web_1  # Cambiar según tu container

# O construir sin daemon para ver todo
docker-compose up --build
```

### ❌ "SSL Certificate is invalid"
```bash
# Verificar certificados existen
ls -la /etc/letsencrypt/live/dswsolutions.io/

# Renovar manualmente
sudo certbot renew --force-renewal

# Reiniciar Docker
docker-compose restart web
```

---

## 📊 Monitoreo

### Ver estado de Docker
```bash
docker-compose ps
```

### Ver logs en tiempo real
```bash
docker-compose logs -f web
```

### Verificar espacio en disco
```bash
df -h
```

### Verificar certificados válidos
```bash
sudo certbot certificates
```

---

## 🔐 Seguridad Checklist

- ✅ HTTPS activado (redirección HTTP → HTTPS)
- ✅ Certificados Let's Encrypt válidos
- ✅ TLS 1.2 y 1.3 habilitados
- ✅ Headers de seguridad configurados (HSTS, X-Frame-Options)
- ✅ Gzip compression activado
- ✅ Ciphers seguros configurados

---

## 📈 Performance Verificación

```bash
# Ver headers de respuesta
curl -I https://dswsolutions.io

# Debe incluir:
# - HTTP/2 200
# - Content-Encoding: gzip
# - Strict-Transport-Security
# - Cache-Control: public, immutable (assets)
```

---

## 🚨 Rollback (Si algo falla)

```bash
# Detener todo
docker-compose down

# Reiniciar desde cero
docker-compose up -d --build

# O restaurar versión anterior
git checkout <commit-hash>
docker-compose up -d --build
```

---

## 📞 Support

Si algo falla:
1. Verificar logs: `docker-compose logs web`
2. Verificar certificados: `sudo certbot certificates`
3. Verificar puertos: `sudo lsof -i :80,443`
4. Verificar dominio DNS
5. Esperar 5 minutos (Nginx tarda en arrancar)
6. Contactar hosting Hostinger si problema persiste

---

**Última actualización:** 2026-02-26
