| Travis CI |
| :-: |
| [![Build Status](https://travis-ci.org/dperuo/northwestern-mutual.svg?branch=master)](https://travis-ci.org/dperuo/northwestern-mutual) |

# Code Challenge for Northwestern Mutual

The web application you would be working on is built using .NET C# MVC application with Backbone.js. We are currently re-platforming the web application to be multiple single page applications using react.js/flux and connecting to Node.js services to replace a portion of the middleware. Please use the below test to show off your skill set and what you can bring to the team. If you are more UX/designed focused (HTML/CSS), it is OK to show off your page design skills. If you are a JavaScript guru, then wow us with your JavaScript.

Your code test will be evaluated on the following items:

1. Quality
2. Completeness
3. Creativity/Personalization
4. Technologies

Code Test:

- Create a search page that displays the returned results alphabetically.
- Use a HTML5, CSS3 responsive two-column layout with a header and footer.
- Execute an AJAX call for the search to an open source API and display the results.

Now is the time to show off your skills, creativity and passion for front end.

When you complete the coding exercise, you can place it in your public repository (github, bitbucket, dropbox).

Northwestern Mutual will review the solution and if we’d like to proceed we will set up an interview to discuss the solution and go more in-depth into the job.

## Quick Start

1. Install dependencies using `npm install`.
2. Launch [Vagrant][v] with `vagrant up`.
3. Visit `localhost:8080` from your favorite browser to use the app.
4. Edit this repo in your favorite editor. Changes are passed to Vagrant automatically.

[v]: https://www.vagrantup.com/

## Build and Test Commands

| Command | Use
| :--- | :---
| `npm run build:js` | Rebuild JavaScript
| `npm un build:scss` | Rebuild CSS
| `npm run build` | Rebuild JavaScript and CSS
| `npm test`<br/>`npm run test` | Run [Protractor][p] test suite

[p]: http://www.protractortest.org/#/

## Architecture

| Location | Description
| :--- | :---
| `dist/` | Distribution files. Updated on rebuild.
| `src/` | Source files. Make your changes and additions here.
| `test/` | Test specs used by Protractor
| `.travi.yml` | Configuration file for Travis CI.
| `bootstrap.sh` | Configuration file used by Vagrant on initial load
| `CONTRIBUTING.md` | Information on how to contribute to this repo
| `index.html` | Main HTML page for this repo
| `LICENSE` | Information on licensing this repo
| `package.json` | Configuration file for npm
| `protractor.config.js` | Configuration file for Protractor
| `README.md` | This file.
| `Vagrantfile` | Configuration file for Vagrant
| `webpack.config.js` | Configuration file for Webpack
