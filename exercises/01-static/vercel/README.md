# Vercel.com Static Sites

## No [J] or [A] only [M] *and CSS*

This site has no JS nor an API. It is plain Markup with some Stylesheet.

## Prerequisites

- `git`
- `gh`
- `vercel`-cli

## Login

```bash
# follow the instructions
vercel login
```

## Deploy Without Git

```bash
# deploy it by running the following commands in:
# exercises/03-vercel-com/00-static folder
vercel
# all defaults are great
#
```

## Deploy With Git

Vercel does not allow to connect with git from the command-line. You need to deploy first and connect to a git repository from their UI or you can import directly from GitHub.


```bash
# deploy it by running the following commands in:
# exercises/03-vercel-com/00-static folder
#
# create the repo on GitHub with the cli
# and use the defaults 
gh repo create <USERNAME>/<REPONAME>
# copy all the source files to the new folder
cp index.html style.css ./<REPONAME>
git add . && git ci -m "init" && git push -u origin HEAD
# now go to https://vercel.com/import 
# and import the new repo
```


## Development

Run a dev server 

```bash
vercel dev

```
## Question

- [ ] What are the pros & cons of a `git` based workflow?

