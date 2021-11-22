# Use this project

<div align="center">

[![Use this template](https://img.shields.io/badge/Generate-Use_this_template-2ea44f?style=for-the-badge)](https://github.com/MichaelCurrin/react-frontend-quickstart/generate)

</div>


## Deploy

How to set up:

1. Add this project to your repos with the template button above (no need to fork).
1. Go to your repo's _Settings_ and enable _GitHub Pages_ on the `root` path of your `main` branch.
1. After a few seconds, open your site deployed at `MyUsername.github.io/react-frontend-quickstart`.


## Local development
> How to run the web app locally.

Start a static server in the repo root. See recommended server options in this [guide](https://gist.github.com/MichaelCurrin/1a6116a4e0918c8468dc7e1a701a5f95).

No need for installing Node or running NPM!


## React dev build

If you want an unoptimized dev build which is easier to read and debug, you can change the CDN URLs used.

Go to [main.js](/assets/js/main.js).

Change a line like this:

```diff
-import React from "https://dev.jspm.io/react@17.0";
+https://jspm.dev/react@17.0
```

Based on this [guide](https://michaelcurrin.github.io/dev-resources/resources/javascript/cdns/jspm.html)

