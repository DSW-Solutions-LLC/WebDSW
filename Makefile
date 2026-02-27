DOMAIN = dswsolutions.io

.PHONY: upweb stop restart logs renew help

# Comprueba si ya existen los certificados en el volumen de Docker
CERT_EXISTS := $(shell docker volume inspect webdsw_letsencrypt 2>/dev/null | grep -c '"Mountpoint"' || echo 0)

help:
	@echo ""
	@echo "Comandos disponibles:"
	@echo "  make upweb    Levanta la app completa (obtiene SSL si es la primera vez)"
	@echo "  make stop     Detiene todos los contenedores"
	@echo "  make restart  Reinicia el servidor web"
	@echo "  make logs     Ver logs en tiempo real"
	@echo "  make renew    Renueva los certificados SSL"
	@echo ""

upweb:
	@echo ""
	@echo "==> Verificando estado de certificados SSL..."
	@if docker compose --profile certbot run --rm certbot certificates 2>/dev/null | grep -q "$(DOMAIN)"; then \
		echo "==> Certificados encontrados. Levantando app con HTTPS..."; \
		docker compose up -d --build web; \
	else \
		echo "==> No se encontraron certificados. Iniciando configuración SSL..."; \
		echo ""; \
		echo "--- [1/4] Deteniendo contenedores existentes..."; \
		docker compose down; \
		echo ""; \
		echo "--- [2/4] Levantando nginx HTTP para verificación ACME..."; \
		docker compose --profile certbot up -d web-init; \
		sleep 4; \
		echo ""; \
		echo "--- [3/4] Obteniendo certificados SSL para $(DOMAIN)..."; \
		docker compose --profile certbot run --rm certbot; \
		echo ""; \
		echo "--- [4/4] Levantando app completa con HTTPS..."; \
		docker compose --profile certbot down; \
		docker compose up -d --build web; \
		echo ""; \
		echo "============================================"; \
		echo "  App corriendo en: https://$(DOMAIN)"; \
		echo "============================================"; \
	fi

stop:
	@echo "==> Deteniendo contenedores..."
	docker compose down

restart:
	@echo "==> Reiniciando servidor web..."
	docker compose restart web

logs:
	docker compose logs -f web

renew:
	@echo "==> Renovando certificados SSL (la app seguirá corriendo)..."
	docker compose --profile certbot run --rm certbot renew
	@echo "==> Recargando nginx con los nuevos certificados..."
	docker compose restart web
	@echo "==> ¡Certificados renovados!"
