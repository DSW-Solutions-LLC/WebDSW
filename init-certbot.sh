#!/bin/bash

# Script para inicializar certificados SSL con Let's Encrypt en Hostinger
# Ejecutar una sola vez: bash init-certbot.sh

DOMAIN="dswsolutions.io"
EMAIL="your-email@example.com"  # Cambia esto a tu email

echo "Iniciando Certbot para $DOMAIN..."

# Crear directorio para Certbot si no existe
mkdir -p /etc/letsencrypt
mkdir -p /var/lib/letsencrypt

# Ejecutar Certbot para obtener certificado (Standalone)
sudo certbot certonly --standalone -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive

if [ $? -eq 0 ]; then
    echo "✅ Certificado generado exitosamente!"
    echo "Los certificados están en: /etc/letsencrypt/live/$DOMAIN/"
    echo ""
    echo "Próximo paso: Ejecuta 'docker-compose up -d' para iniciar el servicio con HTTPS"
else
    echo "❌ Error al generar el certificado. Verifica:"
    echo "1. Que el puerto 80 esté disponible"
    echo "2. Que el dominio apunte a este servidor"
    echo "3. Que hayas cambiado EMAIL en este script"
fi
