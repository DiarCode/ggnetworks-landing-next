# Use the official NGINX base image
FROM nginx:alpine

# Copy the custom NGINX configuration file into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
