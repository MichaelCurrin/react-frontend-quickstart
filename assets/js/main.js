import htm from "https://dev.jspm.io/htm@3.0";
import ReactDOM from "https://dev.jspm.io/react-dom@17.0";
import React from "https://dev.jspm.io/react@17.0";

const html = htm.bind(React.createElement);

const REPO_URL = "https://github.com/MichaelCurrin/react-frontend-quickstart";
const RESOURCES_URL =
  "https://michaelcurrin.github.io/dev-resources/resources/javascript/packages/react/";

const NAME_KEY = "name";

function TextSample() {
  const persistedValue = localStorage.getItem(NAME_KEY) ?? "";
  const [value, setValue] = React.useState(persistedValue);

  const onInput = (event) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    localStorage.setItem(NAME_KEY, value);
  });

  const msg = value
    ? html`<span>Welcome, <b>${value}</b></span>`
    : "Tell me your name";

  return html`
    <div>
      <label hmltfor="name-input">Name: </label>

      <span> </span>

      <input
        id="name-input"
        value=${value}
        onInput=${onInput}
        placeholder="World"
      />

      <br />
      <br />

      <div>${msg}</div>

      <p>
        <i
          >This component persists data in <code>localStorage</code>, so it will
          remember values across a page refresh or restarting the browser.</i
        >
      </p>
    </div>
  `;
}

function ButtonSample() {
  const [pressed, setPressed] = React.useState(false);

  const onClick = () => {
    setPressed(!pressed);
  };

  const msg = pressed ? "on" : "off";
  const className = pressed ? "button-pressed" : "";

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
  const [isChecked, setIsChecked] = React.useState(false);

  const onClick = () => {
    setChecked(!setIsChecked);
  };

  const msg = isChecked ? "Checked" : "Not checked";

  return html`
    <div>
      <label>Teach me React</label>
      ${" "}
      <input type="checkbox" id="status-checkbox-input" onClick=${onClick} />

      <p>
        <i>${msg}</i>
      </p>
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

// Unfortunately, spaces needed to be added explicitly, otherwise the Prettier tool strips them out
// around `a` tags.
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
        site on GitHub Pages. Learn more about React in my ${" "}
        <a href="${RESOURCES_URL}">React resources</a>${" "} guide.
      </p>
    </div>
  `;
}

ReactDOM.render(
  html`<${App} name="developer" />`,
  document.getElementById("app")
);
