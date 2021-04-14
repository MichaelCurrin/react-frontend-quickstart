import htm from "https://dev.jspm.io/htm@3.0";
import ReactDOM from "https://dev.jspm.io/react-dom@17.0";
import React from "https://dev.jspm.io/react@17.0";

const html = htm.bind(React.createElement);

const REPO_URL = "https://github.com/MichaelCurrin/react-frontend-quickstart";
const RESOURCES_URL =
  "https://michaelcurrin.github.io/dev-resources/resources/javascript/packages/react/";

function NameInput() {
  const [value, setValue] = React.useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const msg = value ? `Welcome, ${value}` : "Tell me your name";

  return html`
    <div>
      <label hmltfor="name-input"> Name: </label>
      <span> </span>
      <input
        id="name-input"
        placeholder="World"
        value=${value}
        onChange=${onChange}
      />

      <br />
      <br />

      <div>${msg}</div>
    </div>
  `;
}

function StatusInput() {
  const [checked, setChecked] = React.useState(false);

  const toggle = () => {
    setChecked(!checked);
  };

  const statusMsg = checked ? `Active` : "Inactive";

  return html`
    <div>
      <label> Status: </label>

      <br />
      <br />

      <button id="status-input" onClick=${toggle}>${statusMsg}</button>
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

// Unfortunately spaces needed to be added explicitly, otherwise the Prettier tool
// strips them out around `a` tags.
function App(props) {
  const { name } = props;

  return html`
    <div>
      <h2>Greeting with fixed value</h2>
      <p>Hello, ${name}!</p>

      <h2>Text input</h2>
      <${NameInput} />

      <h2>Button toggle input</h2>
      <${StatusInput} />

      <h2>Counter</h2>
      <${Counter} />

      <br />

      <p>
        View the ${" "}<a href="${REPO_URL}">source</a>${" "}for this static
        site on GitHub Pages. Learn more about React in my ${" "}<a
          href="${RESOURCES_URL}"
          >React resources</a
        >${" "} guide.
      </p>
    </div>
  `;
}

ReactDOM.render(
  html`<${App} name="developer" />`,
  document.getElementById("app")
);
