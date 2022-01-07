# My portfolio website

## Used technologies:
- React
- Typescript
- Docker
- Traefik

## Running
You can run this application in a docker container, or do it on your own.

### Docker way
There are two docker-compose files:
- docker-compose.dev.yml - used for checking the production environment, exposes the app on port 80
- docker-compose.yml - used for production, exposes the app via Traefik

To start the development container, you can use the following command:
```bash
docker-compose -f docker-compose.dev.yml up -d
```

### Manual way
To start the app in development mode, run:
```bash
npm install
npm start
```
