# syntax=docker.io/docker/dockerfile:1

###
# 1) Base/Build Stage
#    - Installs all dependencies using Bun
#    - Builds your Next.js application
###
FROM oven/bun:latest AS base
WORKDIR /app

# Copy only the files needed to install deps and lock versions:
COPY package.json bun.lock ./

# Install dependencies (includes devDependencies so we can build)
RUN bun install

# Copy in your source code
COPY . .

# Build your application (e.g., Next.js)
RUN bun run build


###
# 2) Release/Production Stage
#    - Copies build artifacts and only what’s needed to run
###
FROM oven/bun:latest AS release
WORKDIR /app

# Copy over built artifacts from the base stage
COPY --from=base /app/package.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next

# If you have a 'public' folder (common in Next.js) or other static assets:
COPY --from=base /app/public ./public

# (Optional) Set environment variables; for example, production mode:
# ENV NODE_ENV=production
# ENV NEXT_TELEMETRY_DISABLED=1

# The default port for Next.js is 3000
EXPOSE 3000

# Start Next.js in production mode
CMD ["bun", "run", "start"]
