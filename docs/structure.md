# Structure

This project only needs 3 files to run:

- [index.html](/index.html) - the homepage.
- [main.js](/assets/js/main.js) - the app logic. This will
    1. Load dependencies from CDN URLs at locked versions.
    1. Constructs the app including any components.
    1. Mount the app as an element in the body of the HTML.
- [styles.css](/assets/css/styles.css) - some minimal CSS styling.


## ES Modules

The JS file is is loaded as an ES Module, which means we get to load `react` and `htm` with the `import` syntax.

This keeps all your JS and dependencies together and separated from the HTML, for easy for formatting, lint and testing (like unit tests) if you choose to add those with Deno or NPM. Or maybe you just use your IDE to format and lint your JS files.


## Add and split JS modules

If you want, you can split this out into multiple files such as:

- `main.js` for `ReactDOM.render`
- `App.js` for `App` function.
- Other components files like `Counter.jsx` for `Counter` function.

And don't need to load those as separate `script` tags on the HTML page - just load `main.js` and the other JS file will be loaded internally for you.
