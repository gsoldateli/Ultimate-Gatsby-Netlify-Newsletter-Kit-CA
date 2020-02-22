# AI Humanity Website

## Install the website as a CONTENT EDITOR:

The installation steps are the following:

- Clone the repo.
- Use the branch content by executing `git checkout content`
- Run `npm install` within it.
- Ensure the file `static/admin/config.yml` has the content [this way](http://i.imgur.com/lz1H5ek.png)
- Within the repository root folder run `npx netlify-cms-proxy-server`; - Runs the CMS admin server locally on your machine
- Open another tab within the repository root folder run `npm start` - Runs the website locally on your machine.

Then you'll see the website at localhost:8000 and the content editor at localhost:8000/admin/

## Install the website as a DEVELOPER :

The installation steps are the following:

- Clone the repo.
- Use the branch development by executing `git checkout development`
- Run `npm install` within it.
- Ensure the file `static/admin/config.yml` has the content [this way](http://i.imgur.com/lz1H5ek.png)
- Within the repository root folder run `npx netlify-cms-proxy-server`; - Runs the CMS admin server locally on your machine
- Open another tab within the repository root folder run `npm start` - Runs the website locally on your machine.

Then you'll see the website at localhost:8000 and the content editor at localhost:8000/admin/

### To send the changes to the official website:

- Ensure you're on the `content` branch.
- Go into the pages folder `cd src/pages/`
- Commit all the content changes: `git add .` and then `git commit -m "The commit message you want"` and `git push`
- Go to github [repository page](https://github.com/gsoldateli/Ultimate-Gatsby-Netlify-Newsletter-Kit-CA/pulls) and create a new pull request from branch `content` to `master`, when the time comes I'll explain better. Once the pull request is accepted it will automatically put the changes live within a couple of minutes.
