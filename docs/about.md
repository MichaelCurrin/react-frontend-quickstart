# About


## What is React?

- [React homepage](https://reactjs.org/)
    > A JavaScript library for building user interfaces
- [React resources](https://michaelcurrin.github.io/dev-resources/resources/javascript/packages/react/) on my Dev Resources site.


## Structure

This project only needs 3 files to run:

- [index.html](/index.html) - the homepage.
- [main.js](/assets/js/main.js) - the app logic. This loads dependencies from CDN URLs, constructs the app and then mounts it an element in the body of the HTML.
- [styles.css](/assets/css/styles.css) - some minimal CSS styling.

The JS file is is loaded as an ES Module, which means we get to load `react` and `htm` with the `import` syntax and so don't need to load those as separate `script` tags on the HTML page. This keeps all your JS and dependencies together and separated from the HTML, for easy for formatting, lint and testing (like unit tests) if you choose to add those with Deno or NPM. Or maybe you just use your IDE to format and lint your JS files.


## Features

- Built on React from a CDN.
- No build step - locally or for CI/CD. Just start a static server in the project root - locally or with GH Pages or Netlify.
- This light React setup on the frontend is great for small and simple projects.
- It's also adding interactive behavior to an existing site, without having to rebuild as a Node/React.
- You can put your JS code as a separate JS script as done here with [main.js](/assets/js/main.js), or even directly on your HTML page if you have a short snippet.
- This project structure is lighter - no `package.json`, no ESLint config and no Prettier config. See limitations below around this.


## Limitations

- Developer experience is limited - no CLI tooling to catch syntax or linting errors.
- You can't use JSX syntax directly the way this project is setup. But you can use a backticks string with JSX syntax inside it, thanks to the [HTM](https://www.npmjs.com/package/htm) package used here. Or if you don't like that syntax, you can use Babel Standalone for frontend compilation - see my [JSX](https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/javascript/general/jsx.html) guide.
- No linting or formatting tool is supplied.


## The demo

The demo site is served using **static assets** on [GitHub Pages](https://pages.github.com/). No compile or build step is needed.

The `.nojekyll` file is setup to prevent [Jekyll](https://pages.github.com/) processing. Since Jekyll is no needed here and you could otherwise get errors using JavaScript syntax that looks like Liquid syntax.
