# Netlify.com JAMStack

You: What is the `[J]`avaScript `[A]`PI `[M]`arkup `[Stack]`?  

Learn more about the JAMStack there 

- https://jamstack.org/
- https://jamstack.wtf/

## About This Site

This site is the real JAMStack deal. It uses JS, calls a Netlify lambda function and calls an API from that function. The functions are AWS Lambda functions running in `us-east-1` if you know what that means. You can learn more about these functions with the following links:

- https://docs.netlify.com/functions/overview/
- https://github.com/netlify/netlify-lambda

### The Key Elements to Make These Functions Work

- `./netlify.toml`
- `./.babelrc`
- the folder `./lambda`
- modules `netlify-lambda`, `@babel/preset-env` and `@babel/preset-typescript`
- the npm scripts `postinstall` and `lambda:build`

That's a lot `¯\_(ツ)_/¯`

## Prerequisites

- `git`
- `gh`
- `node`
- `netlify`-cli

## Setup

```bash
cd exercises/01-netlify-com/02-jamstack
npm ci
```

## Development

!Achtung: You need to deploy the site once to make the netlify dev command work! Run `netlify deploy --prod` at least once.  



```bash
# this runs the `netlify dev` command
# and watches the frontend Typescript code for changes
#  with `tsc -p . --watch`
npm run dev
```

## Deploying to Netlify.com

To better control how netlify deploys your site you can configure various a spects of that process with a file called [netlify.toml](./netlify.toml) in  the root of your repo. See the full documentation on `netlify.toml` take a  look into this site:

- https://docs.netlify.com/configure-builds/file-based-configuration/

In this case the new keys here are 

```toml
[build]
functions = "lambda"
[context.production.environment]
AWS_LAMBDA_JS_RUNTIME = "nodejs10.x"
```

 ## Task

- [ ] Do a `git` based deploy!
- [ ] Any thoughts on this setup?
