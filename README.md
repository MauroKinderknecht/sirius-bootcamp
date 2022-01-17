# Sirius Bootcamp

## Instalar PostgreSQL

https://www.locurainformaticadigital.com/2018/09/08/descargar-e-instalar-postgresql-en-windows/

## Instalar Postman

https://www.postman.com/downloads/

## Documentacion de Prisma

https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#model-queries

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
## Ejercicios

- Completar los archivos de `src/components/controller/post` utilizando de ejemplo `src/components/controller/user`
- Crear un router con endpoints para crear, modificar, borrar y obtener posts
- Añadir el router creado a `router/index.js`

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
