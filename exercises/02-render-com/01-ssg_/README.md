# Render.com with a [S]tatic [S]ite [G]enerator 

Plain HTML with CSS is already a powerful toolkit for building your site. The problem we are facing with that approach is the reusability of HTML snippets. With static site generators we introduce some additional complexity but gain the power of templating.

To learn more about static site generators take a look at

- https://jamstack.org/generators/

## About This Site

This site uses eleventy as its SSG. [Eleventy](https://www.11ty.dev/) is the "new Kid on the Block". It can be used as a drop-in replacement for Jekyll. 

### What does it do what Jekyll can't?

- It is written in JavaScript (so we can extend it with JavaScript)
- It is blazing fast
- It allows dynamic data sources generated from JS (e.g. calling an API and creating pages from the result)
- It allows multiple engines from Liquid over nunjucks, ejs or even JavaScript templates (looks like there is also a JSX templating [under consideration](https://github.com/11ty/eleventy/issues/235))
- tbd



## Prerequisites

- `git`
- `gh`
- `node`
- `netlify`-cli


## Setup

You will need to obtain a personal access token from [https://github.com/settings/tokens](https://github.com/settings/tokens) and you need to add it to your shell session or better to your `~/.zshrc` or `~/.bashrc` file.

For `zsh`:

```bash
echo "export GITHUB_TOKEN='XXXX--YOUR-TOKEN'" >> ~/.zshrc
```

For `bash`:

```bash
echo "export GITHUB_TOKEN='XXXX--YOUR-TOKEN'" >> ~/.bashrc
```

When you are done with this you can run these commands.

```bash
cd exercises/01-netlify-com/01-ssg
npm ci
```



## Development

To obtain a list of your repos via the GitHub api run once

```bash
npm run prebuild
```

To run the eleventy dev server run 

```bash
npm run dev
```

## Building

To build your site locally run 

```bash
npm run build
```

## Deploying to Render.com

To better control how render deploys your site you can configure various aspects of that process with a file called [render.yaml](./render.yaml) in the root of your repo. See the full documentation on `render.yaml` take a look into this site: 

- https://render.com/docs/yaml-spec


## Task

- [ ] Do a `git` based deploy!
- [ ] What could possibly go wrong?
