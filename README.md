 <img src="assets/images/nerdy-weeks-deploy-768.png">

# Nerdy Weeks - Deploy Everything!

## Prerequisites

- Homebrew [https://brew.sh](https://brew.sh)
- nvm [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- git v2 or greater (`brew install git`)
- NodeJS v10 or greater (`nvm install 14 && nvm alias default 14`)
- npm v6 or greater (comes with Node in `nvm`)
- VSCode latest (`brew cask install vscode`)
- docker v19 or greater (`brew cask install docker`)
- [Netlify Account](https://www.netlify.com) + cli (`npm install netlify-cli -g`)
- [Vercel  Account](https://www.vercel.com) + cli (`npm install vercel -g`)
- [Render  Account](https://www.render.com)
- `gh` v1 or greater ([official github cli](https://cli.github.com/) `brew install gh`) 
- Postgres DB GUI
  - [TablePlus](https://www.tableplus.io/) (`brew cask install tableplus`)
  - [Postico](https://eggerapps.at/postico/)  (free alternative `brew cask install postico`)


Test if they exists - fix it if they don't.

```bash
git --version
node --version
npm --version
code --version
docker --version
vercel --version
netlify --version
gh --version
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
