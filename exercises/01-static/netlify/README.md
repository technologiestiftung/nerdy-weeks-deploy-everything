# Netlify.com Static Sites

## No [J] or [A] only [M] *and CSS*

This site has no JS nor an API. It is plain Markup with some Stylesheet.

## Prerequisites

- `git`
- `gh`
- `netlify`-cli

## Login

```bash
# follow the instructions
netlify login
```

## Deploy Without Git

```bash
# deploy it by running the following commands in:
# exercises/01-netlify-com/00-static folder
# initialize the netlify site
netlify init
# - Create & configure a new site
# - Don't enter a build command
# - Use the current directory for the deploy
#
netlify deploy
# review it
netlify deploy --prod
netlify open --site
```

## Deploy With Git

```bash
# deploy it by running the following commands in:
# exercises/01-netlify-com/00-static folder
#
# create the repo on GitHub with the cli
# and use the defaults 
gh repo create <USERNAME>/<REPONAME>
# copy all the source files to the new folder
cp index.html style.css ./<REPONAME>
# initialize the netlify site
netlify init
# - Create & configure a new site
# - Don't enter a build command
# - Use the current directory for the deploy
#
# Now add the files to version control
git add index.html style.css .gitignore
# write a nice message
git commit -m "deploy everything"
# and push it to the remote
git push -u origin HEAD
#        ^         ^
#        |         |
#        |         ++ HEAD means the current branch
#        |         
#        ++ sets upstream tracking
#           see https://stackoverflow.com/a/18032014/1770432
# 
# Now lets see how our site looks
netlify open --site
```

## Question

- [ ] What are the pros & cons of a `git` based workflow?


## Bonus Netlify forms

Take a look at the deployed site. It should have a form in it.
- [ ] Find the associated Data in the Netlify UI.
- [ ] What use cases can you imagine with a form like this?

*!Hint: Try to use a `git` based workflow whenever possible. Nothing is going to bother you more then a git repo out of sync or no git repo at all for your site*. 
