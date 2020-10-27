# Prisma on Render.com 

## The Real Deal!

This one is the real deal. You are going from 0 to fully fledged API with Postgres DB on render.com using [Prisma](https://prisma.io) and [tinyhttp](https://tinyhttp.v1rtl.site/).

(Based on [prisma.io | Start from scratch (Prisma Migrate)](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-prisma-migrate-typescript-postgres))


## Setup 

```bash
# repo & npm setup
gh repo create <YOUR USER NAME>/hello-render-prisma-the-real-deal
cd hello-render-prisma-the-real-deal
npm init -y
npm install @tinyhttp/app @prisma/client body-parser @tinyhttp/cors
npm install @prisma/cli @inpyjamas/scripts eslint @types/body-parser --save-dev
# source files
mkdir src
touch src/index.ts
# prisma, render and dev db
npx prisma init
touch docker-compose.yml
touch render.yaml
# tools
mkdir requests
open https://git.io/JTiIp # and download the content to requests.api.http
code --install-extension humao.rest-client prisma.prisma
```

### Setup Eslint (`.eslintrc.js`)

```bash
echo 'module.exports = require("@inpyjamas/scripts/eslint");' > .eslintrc.js
```

### Setup Typescript (`tsconfig.json`)

```bash
echo '{"compilerOptions": {"sourceMap": true,"outDir": "dist", "rootDir":"src","strict": true,"lib": ["esnext"],"esModuleInterop": true}}' > tsconfig.json
```

### Setup Database (`docker-compose.yml`)

```yml
version: "3.4"
 services:
   postgres:
     image: postgres:11
     environment:
       POSTGRES_USER: johndoe
       POSTGRES_PASSWORD: randompassword
       POSTGRES_DB: mydb
     ports:
       - 5432:5432
     volumes:
       - ./pg-data/:/var/lib/postgresql/data
```

### Setup Render.com (`render.yaml`)

```yml
# https://render.com/docs/yaml-spec
 services:
   - type: web
     region: frankfurt
     name: the-real-deal
     env: node
     buildCommand: NODE_ENV=development npm ci && npm run build
     startCommand: NODE_ENV=production node dist/index.js
     healthCheckPath: /healthcheck
     envVars:
       - key: NODE_ENV
         value: production
       - key: DATABASE_URL
         fromDatabase:
           name: the-real-deal
           property: connectionString
 databases:
  - name: the-real-deal
    databaseName: mydb
    region: frankfurt
```


Make sure to git ignore the `pg-data` folder and the `.env` file.

```bash
echo "pg-data" >> .gitignore
echo "*.env" >> .gitignore

```
### Setup DB Schema

```plain
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Cat {
  id          Int      @id @default(autoincrement())
  createdAt   DateTime @default(now())
  name        String
  catchPhrase String?
  moods       Mood[]
}

model Mood {
  id    Int    @id @default(autoincrement())
  name  String
  Cat   Cat?   @relation(fields: [catId], references: [id])
  catId Int?
}
```

#### Run & Migrate DB


```bash
docker-compose up # maybe with -d if you want the same terminal
# follow the prompt
# now create your first migration (name it init or so)
npx prisma migrate save  --experimental
# apply it
prisma migrate up --experimental
# see all running containers
# and get the id of your postgresql  
docker ps
# use the id to list all tables
docker exec <CONTAINER ID> psql -U johndoe -d mydb -c "\dt+"
```


### Setup npm-scripts

```json
{
  "scripts": {
    "prisma:generate": "prisma generate",
    "predev": "npm run prisma:generate",
    "dev": "inpyjamas-scripts dev src/index.ts",
    "prebuild": "npm run prisma:generate",
    "build": "tsc -p ."
  }
}
```

Congrats your DB and Typescript + Prisma  projects good to go


## Development

We want a fairly simple setup. Lets create some routes

| Method | Route                 | Response     |
| :----- | :-------------------- | :----------- |
| GET    | `/`                   | alive        |
| GET    | `/healthcheck`        | alive        |
| GET    | `/cats`               | `Cat[]`      |
| POST   | `/cats`               | `Cat`        |
| GET    | `/cats/:id`           | `Cat | null` |
| GET    | `/cats/:id/moods`     | `Mood[]`     |
| POST   | `/cats/:id/moods`     | `Mood`       |
| GET    | `/cats/:id/moods/:id` | `Mood`       |


Let's get that thing on the road

## Deploy to Render.com

- Go to the YAML TAB (https://dashboard.render.com/iacs)
  - Should connect your GitHub.com Account with Render.com
- Select New from YAML
- Watch the magic happen

### !Achtung

The first deploy will fail? Why


### Migrate your Remote DB 

- Get the DBs remote "External Connection String" from the Database Tab a Render.com
- Adjust your `DATABASE_URL` on `./prisma/.env`
- Push a little change or run a "Manual Deploy" from the Render.com Dashboard of your service

## Hit Your API With Some Data

- Use VSCode REST Client to insert some data
- Use [TablePlus](https://www.tableplus.io/) or [Postico](https://eggerapps.at/postico/) to review your Databases content


## Congrats!

You made it to the next level.

Take a look at these examples as well

- https://github.com/technologiestiftung/odis-masterportal Apache with a PWA
- https://github.com/technologiestiftung/berlin-datahub-api Express REST API with Prisma and Postgres
- https://github.com/technologiestiftung/otc-data-storage Nexus & Prisma  GraphQL + REST API with Postgres 
- https://github.com/technologiestiftung/citylab-strapi/ Strapi (headless CMS) with Postgres and persistent disk 

