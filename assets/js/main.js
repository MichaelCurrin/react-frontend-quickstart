import htm from "https://dev.jspm.io/htm@3.0";
import ReactDOM from "https://dev.jspm.io/react-dom@17.0";
import React from "https://dev.jspm.io/react@17.0";

const html = htm.bind(React.createElement);

const REPO_URL = "https://github.com/MichaelCurrin/react-frontend-quickstart";
const REACT_RESOURCES_URL =
  "https://michaelcurrin.github.io/dev-resources/resources/javascript/packages/react/";
const GH_PAGES_RESOURCES_URL =
  "https://michaelcurrin.github.io/dev-resources/resources/web/github-pages.html";

const STORAGE_KEY_NAME = "name";

/**
 * Sample of using text input and displaying the value.
 *
 * Attemps to get any existing value from localStorage.
 */
function TextSample() {
  const persistedValue = localStorage.getItem(STORAGE_KEY_NAME) ?? "";
  const [value, setValue] = React.useState(persistedValue);

  const onInput = (event) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY_NAME, value);
  });

  const msg = value
    ? html`<span>Welcome, <b>${value}</b>.</span>`
    : "Please tell me your name.";

  return html`
    <div>
      <label hmltfor="name-input">Name: </label>

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
        <i>
          This component persists data in <code>localStorage</code>, so it will
          remember values across a page refresh or restarting the browser.
        </i>
      </p>
    </div>
  `;
}

/** Sample of a button that can be toggled. */
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

/** Sample of a checkbox. */
function CheckboxSample() {
  const [isChecked, setIsChecked] = React.useState(false);

  const onClick = () => {
    setIsChecked(!isChecked);
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

/** A counter that increments on click. */
function Counter() {
  const [count, setCount] = React.useState(0);

  return html`
    <div>
      <p>You clicked ${count} times</p>

      <button onClick=${() => setCount(count + 1)}>Click me</button>
    </div>
  `;
}

// Unfortunately, spaces needed to be added explicitly with `${" "}`, otherwise
// the Prettier tool strips them out around `a` tags.
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

      <h2>About</h2>
      <div>
        <p>
          This is a static site hosted for free on
          <a href="${GH_PAGES_RESOURCES_URL}">GitHub Pages</a>.
        </p>
        <p>
          See the ${" "}<a href="${REPO_URL}">repo</a>${" "}on GitHub and add
          this template to your own projects.
        </p>
        <p>
          Learn more about React in my ${" "}<a href="${REACT_RESOURCES_URL}"
            >React resources</a
          >${" "}guide.
        </p>
      </div>
    </div>
  `;
}

ReactDOM.render(
  html`<${App} name="developer" />`,
  document.getElementById("app")
);
