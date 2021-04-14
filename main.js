import htm from "https://dev.jspm.io/htm@3.0";
import ReactDOM from "https://dev.jspm.io/react-dom@17.0";
import React from "https://dev.jspm.io/react@17.0";

const html = htm.bind(React.createElement);

const REPO_URL = "https://github.com/MichaelCurrin/react-frontend-quickstart";
const RESOURCES_URL =
  "https://michaelcurrin.github.io/dev-resources/resources/javascript/packages/react/";

function TextSample() {
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

function ButtonSample() {
  const [pressed, setPressed] = React.useState(false);

  const onClick = () => {
    setPressed(!pressed);
  };

  const msg = pressed ? "on" : "off";
  const className = pressed ? "green" : "";

  return html`
    <div>
      <label>Status: </label>

      <br />
      <br />

      <button
        className=${className}
        id="status-button-input"
        onClick=${onClick}
      >
        ${msg}
      </button>
    </div>
  `;
}

function CheckboxSample() {
  const [checked, setChecked] = React.useState(false);

  const onClick = () => {
    setChecked(!checked);
  };

  const msg = checked ? "Checked" : "Not checked";

  return html`
    <div>
      <label>Teach me React</label>
      ${" "}
      <input type="checkbox" id="status-checkbox-input" onClick=${onClick} />

      <p><i>${msg}</i></p>
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
      <${TextSample} />

      <h2>Button input</h2>
      <${ButtonSample} />

      <h2>Toggle input</h2>
      <${CheckboxSample} />

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
