# Vercel.com JAMStack

You: What is the `[J]`avaScript `[A]`PI `[M]`arkup `[Stack]`?  

Learn more about the JAMStack there 

- https://jamstack.org/
- https://jamstack.wtf/

## About This Site

This site is the real JAMStack. It uses JS, calls a Vercel serverless function and calls an API from that function. You can learn more about these functions with the following links:

- https://vercel.com/docs/serverless-functions/introduction

### The Key Elements to Make These Functions Work

- the folder `./api`. By convention vercel looks there for functions
- the folder `./public`. By convention vercel looks there for our frontend 
- the script `build`. By convention vercel looks for this and uses it as the build step.

All in all is vercel trying the approach of convention over configuration. You still can configure your app/site using `vercel.json` but you might get away without it.

See https://vercel.com/docs/configuration for configuration infos.


## Prerequisites

- `git`
- `gh`
- `node`
- `vercel`-cli

## Setup

```bash
cd exercises/02-vercel-com/02-jamstack
npm ci
```

## Development

!Achtung: You need to deploy the site once to make the netlify dev command work! Run `vercel` at least once.  



```bash
# this runs the `netlify dev` command
# and watches the frontend Typescript code for changes
#  with `tsc -p . --watch`
npm run dev
```

## Deploying to Vercel.com


```bash
# Run
vercel
#  easy as pie
# Then connect it to a git repo or import it directly
# for the next deploy merge into main branch

```