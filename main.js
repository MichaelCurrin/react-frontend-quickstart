import htm from "https://dev.jspm.io/htm";
import React from "https://dev.jspm.io/react";
import ReactDOM from "https://dev.jspm.io/react-dom";

const html = htm.bind(React.createElement);

function Counter() {
  const [count, setCount] = React.useState(0);

  return html`
    <div>
      <p>You clicked ${count} times</p>

      <button onClick=${() => setCount(count + 1)}>Click me</button>
    </div>
  `;
}

function App(props) {
  const { name } = props;

  return html`
    <div className="App">
      <h2>Hello, ${name}!</h2>

      <div>
        <${Counter}/>
      </div>
    </div>
  `;
}

ReactDOM.render(
  html`<${App} name="developer" />`,
  document.getElementById("app")
);
