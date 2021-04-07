import htm from "https://dev.jspm.io/htm";
import React from "https://dev.jspm.io/react";
import ReactDOM from "https://dev.jspm.io/react-dom";

const html = htm.bind(React.createElement);

function ControlledInput() {
  const [value, setValue] = React.useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return html`
    <div>
      <label>Name:</label>
      <span> </span>
      <input value=${value} onChange=${onChange} />

      <br />
      <br />

      <div>My name is: ${value}</div>
    </div>
  `;
}

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
      <h2>Greeting with fixed value</h2>
      <p>Hello, ${name}!</p>

      <h2>Display input</h2>
      <${ControlledInput} />

      <h2>Counter</h2>
      <${Counter} />
    </div>
  `;
}

ReactDOM.render(
  html`<${App} name="developer" />`,
  document.getElementById("app")
);
