 <img src="assets/images/nerdy-weeks-deploy-768.png">

# Nerdy Weeks - Deploy Everything!

## Prerequisites

- git v2 or greater
- NodeJS v10 or greater
- npm v6 or greater
- VSCode latest
- docker v19 or greater
- Netlify Account + cli (`npm install netlify-cli -g`)
- Vercel  Account + cli (`npm install  vercel     -g`)
- Render  Account
- `gh` v1 or greater ([official github cli](https://cli.github.com/))
- [TablePlus](https://www.tableplus.io/) (free alternative would be [Postico](https://eggerapps.at/postico/))


Test if they exists - fix it if they don't.

```bash
git --version
node --version
npm --version
code --version
docker --version
vercel --version
netlify --version
```

## Setup

```bash
npx degit technologiestiftung/nerdy-weeks-deploy-everything#main ./nerdy-weeks-deploy-everything
cd nerdy-weeks-deploy-everything
```

## What?

We will explore deploying frontends and backends to clouds

## How?

- By comparing 3 applications in Render.com, Netlify.com and Vercel.com
  - A static site without any build process
  - A static site generator
  - A site with an serverless function
- And by doing the real deal!!1! A Fully fledged API on render.com
