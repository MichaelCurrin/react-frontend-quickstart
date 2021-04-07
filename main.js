import htm from "https://dev.jspm.io/htm";
import React from "https://dev.jspm.io/react";
import ReactDOM from "https://dev.jspm.io/react-dom";

const html = htm.bind(React.createElement);

ReactDOM.render(html`<a href="/">Hello!</a>`, document.getElementById("app"));
