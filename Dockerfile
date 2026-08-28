# Usa la imagen oficial ligera de Nginx basada en Alpine Linux
FROM nginx:alpine

# Copia los archivos estáticos de tu proyecto al directorio web de Nginx dentro del contenedor
COPY . /usr/share/nginx/html

# Expone el puerto 80 del contenedor
EXPOSE 80

# Inicia Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]