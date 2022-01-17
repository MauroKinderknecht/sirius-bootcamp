# Sirius Bootcamp

## Instalar PostgreSQL

https://www.locurainformaticadigital.com/2018/09/08/descargar-e-instalar-postgresql-en-windows/

## Instalar Postman

https://www.postman.com/downloads/

## Como correr

Instalar las dependencias
```
npm i
```

Crear un archivo `.env`
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/sirius-bootcamp"
```

Correr el proyecto
```
npm start
```
## Para los proyectos finales

### Instalar Prisma
```
npm i prisma
```

#### Inicializar Prisma
```
npx prisma init
```

#### Migrar schema de Prisma
```
npx prisma migrate dev
```

### Instalar Express
```
npm i express
```
