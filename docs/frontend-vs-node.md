# Frontend vs Node

## Why use this frontend set up with no Node

- Great for small or simple projects, especially adding React to a site or page without rebuilding.
- Simpler structure
    - There is only one JS file and you can add a component file and import it still if you need.
- This makes it easy for JS developers without Node experience to start using React.
- No plugins or dev dependencies to manage. Just React and ReactDOM.
- No build step yet hosted on GitHub Pages. Deploys are super fast (seconds). And you don't have to maintain a CI flow.
- You can still use linting and formatting using NPM packages. Just use the latest version or the globally installed ones and you need them installed in this project directly.


## Why use Node

- You have a bigger, more complex project.
- Run a dev server which tells you linting or syntax errors in the CLI or on the page, without having to view the browser JS console for errors.
- You want a build step to ensure every page on your site has valid syntax.
- You want to do minified, optimized builds with support for old browsers.
- Run tests.
- Add plugins or dev dependencies.
- Add server-side rendering if you need to.
