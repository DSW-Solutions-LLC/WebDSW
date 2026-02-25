# Configuración de HTTPS en Hostinger con Docker

## 📋 Pasos para habilitar HTTPS

### 1️⃣ Prerequisitos
- Dominio apuntando a tu servidor en Hostinger
- SSH acceso al servidor
- Docker y Docker Compose instalados

### 2️⃣ Obtener certificado SSL de Let's Encrypt

En Hostinger, conéctate por SSH y ejecuta:

```bash
cd /ruta/a/tu/proyecto  # Navega al directorio de tu proyecto

# Edita el script para poner tu email
nano init-certbot.sh  # Cambia "your-email@example.com" por tu email

# Ejecuta el script
bash init-certbot.sh
```

Este script:
- Genera certificados SSL gratis para tu dominio
- Los guarda en `/etc/letsencrypt/live/dswsolutions.io/`
- Solo necesita ejecutarse una vez

### 3️⃣ Inicia el Docker con HTTPS

```bash
docker-compose down  # Detén el contenedor anterior si estaba corriendo
docker-compose up -d --build
```

### 4️⃣ Verifica que funciona

```bash
# Desde tu navegador:
https://dswsolutions.io

# O desde terminal:
curl -I https://dswsolutions.io
```

## 🔄 Renovación automática de certificados

Los certificados Let's Encrypt vencen cada 90 días. Para renovarlos automáticamente:

```bash
# Añade a crontab (ejecuta: crontab -e)
0 3 * * 0 certbot renew --quiet && docker-compose restart web
```

Esto renovará los certificados cada domingo a las 3 AM.

## 🔒 Lo que se configuró

✅ **nginx.conf**:
- Redirige HTTP → HTTPS
- Escucha en puerto 443 con SSL
- Headers de seguridad (HSTS, etc.)
- TLS 1.2 y 1.3

✅ **Dockerfile**:
- Expone puertos 80 y 443

✅ **docker-compose.yml**:
- Mapea puertos 80:80 y 443:443
- Monta volúmenes de certificados
- Reinicia automáticamente

## 🛠️ Troubleshooting

### Error: "Failed to establish a new connection"
- Verifica que el dominio apunte al servidor correcto
- Espera 24-48 horas si recién cambiaste DNS

### Error: "Port 80 already in use"
- Otro servicio usa el puerto 80
- En Hostinger, detén Apache: `sudo systemctl stop apache2`

### Certificado no se actualiza
- Reinicia Docker: `docker-compose restart web`
- Verifica permisos: `ls -la /etc/letsencrypt/live/`

## 📚 Más información

- [Let's Encrypt](https://letsencrypt.org/)
- [Certbot Docs](https://certbot.eff.org/)
- [Nginx SSL Config](https://nginx.org/en/docs/http/ngx_http_ssl_module.html)
