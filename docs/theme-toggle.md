
# Dark and Light Theme Toggle — Complete Guide

## 1. Purpose

This guide explains how the website switches between dark and light themes and remembers the user's preference after a page refresh.

The feature uses:

- HTML for the toggle button.
- CSS custom properties for theme colors.
- A `data-theme` attribute to identify the active theme.
- JavaScript to handle clicks and update the theme.
- `localStorage` to persist the selected preference.

## 2. Feature Workflow

1. The browser loads the HTML and CSS.
2. JavaScript reads the saved theme from `localStorage`.
3. JavaScript applies the saved theme to the root HTML element.
4. The button label is updated.
5. When the user clicks the button, JavaScript switches the theme.
6. The new preference is saved in `localStorage`.
7. The button label is updated again.

## 3. HTML Button

```html
<button
  id="theme-toggle"
  class="theme-toggle"
  type="button"
>
  Switch to Light Mode
</button>
```

### `id="theme-toggle"`

The ID uniquely identifies this button in the page.

JavaScript can find it with:

```js
document.querySelector("#theme-toggle");
```

The `#` symbol selects an ID in CSS-style selectors.

### `class="theme-toggle"`

The class connects the button to its CSS styling.

JavaScript uses the ID to find the button; CSS uses the class to style it.

### `type="button"`

This explicitly defines a regular button instead of a form-submission button.

## 4. Connecting JavaScript

Before the closing `</body>` tag, add:

```html
<script src="./script.js"></script>
```

This tells the browser to load the JavaScript file.

Placing a normal script near the end of the body allows the page elements to be parsed before the script runs.

## 5. Selecting HTML Elements

```js
const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;
```

`document.querySelector()` returns the first element matching the selector.

`document.documentElement` refers to the root HTML element.

It is not the same as `document.body`.

## 6. The `data-theme` Attribute

JavaScript can set:

```js
root.dataset.theme = "light";
```

This creates or updates the HTML attribute:

```html
<html data-theme="light">
```

Similarly:

```js
root.dataset.theme = "dark";
```

produces:

```html
<html data-theme="dark">
```

The `dataset` API provides access to HTML attributes that begin with `data-`.

The JavaScript property `dataset.theme` corresponds to the HTML attribute `data-theme`.

CSS can use that attribute to activate the light-theme custom properties.

## 7. Click Events

```js
themeToggle.addEventListener("click", function () {
  // Theme-switching logic goes here.
});
```

`addEventListener()` registers a function that runs when the specified event occurs.

In this example:

- `"click"` is the event name.
- The function is the event handler.
- The handler runs when the button is clicked.

## 8. Conditional Logic

```js
if (root.dataset.theme === "light") {
  root.dataset.theme = "dark";
} else {
  root.dataset.theme = "light";
}
```

The `if` condition checks the current theme.

- If the theme is light, switch to dark.
- Otherwise, switch to light.

The `===` operator checks whether the values are equal without converting their types.

## 9. Updating the Button Label

```js
function updateButtonText() {
  if (root.dataset.theme === "light") {
    themeToggle.textContent = "Switch to Dark Mode";
  } else {
    themeToggle.textContent = "Switch to Light Mode";
  }
}
```

`textContent` updates the text inside the button.

The label describes the action that the next click will perform.

This function can be reused after the saved theme is applied and after every theme change.

## 10. What Is `localStorage`?

`localStorage` is a browser storage API for string key-value pairs.

Example:

```js
localStorage.setItem("theme", "light");
```

This stores the string `"light"` under the key `"theme"`.

To read it:

```js
const savedTheme = localStorage.getItem("theme");
```

To remove that preference:

```js
localStorage.removeItem("theme");
```

Values normally remain available across reloads and browser restarts for the same website origin, unless the stored data is cleared or browser policies prevent it.

## 11. Why Do We Save the Theme?

Changing the DOM attribute does not automatically persist that change across page reloads.

For example:

```js
root.dataset.theme = "light";
```

changes the current document's HTML element.

When the page reloads, the document is created again. JavaScript must restore the preference if the user expects the previous theme to remain active.

That is why we save the preference explicitly:

```js
localStorage.setItem("theme", root.dataset.theme);
```

We save the selected theme, not the entire CSS stylesheet or every CSS class.

## 12. Complete JavaScript Implementation

```js
const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;

// Read the previously saved preference.
const savedTheme = localStorage.getItem("theme");

// Apply the saved preference.
if (savedTheme === "light") {
  root.dataset.theme = "light";
} else {
  root.dataset.theme = "dark";
}

// Keep the button label in sync with the active theme.
function updateButtonText() {
  if (root.dataset.theme === "light") {
    themeToggle.textContent = "Switch to Dark Mode";
  } else {
    themeToggle.textContent = "Switch to Light Mode";
  }
}

updateButtonText();

// Switch and save the theme when the button is clicked.
themeToggle.addEventListener("click", function () {
  if (root.dataset.theme === "light") {
    root.dataset.theme = "dark";
  } else {
    root.dataset.theme = "light";
  }

  localStorage.setItem("theme", root.dataset.theme);

  updateButtonText();
});
```

## 13. Code Execution: Dry Run

Assume the saved preference is `"light"`.

### Page load

1. `document.querySelector()` finds the toggle button.
2. `document.documentElement` identifies the root HTML element.
3. `localStorage.getItem("theme")` returns `"light"`.
4. JavaScript sets `data-theme="light"`.
5. The CSS light-theme selector matches.
6. The button label becomes "Switch to Dark Mode".

### User clicks the button

1. The click event handler runs.
2. The current theme is checked.
3. JavaScript changes the theme to `"dark"`.
4. `localStorage.setItem()` saves `"dark"`.
5. `updateButtonText()` changes the label to "Switch to Light Mode".
6. CSS custom properties resolve using the dark-theme values.

### User refreshes the page

1. The page loads again.
2. JavaScript reads `"dark"` from `localStorage`.
3. The dark theme is applied.
4. The button label is restored to "Switch to Light Mode".

## 14. Why Do Component Colors Change Automatically?

Consider this CSS:

```css
.theme-toggle {
  color: var(--color-text);
  background-color: var(--color-surface);
  border-color: var(--color-border);
}

.theme-toggle:hover {
  border-color: var(--color-ice);
}
```

The component uses custom properties instead of hardcoded colors.

When the active theme changes, the browser resolves each variable using the new values.

For example:

| Variable | Dark theme | Light theme |
|---|---|---|
| `--color-text` | `#e5edf5` | `#182536` |
| `--color-surface` | `#111c27` | `#ffffff` |
| `--color-border` | Light translucent border | Dark translucent border |
| `--color-ice` | `#a9d6f5` | `#1769aa` |

The component does not need a separate copy of its CSS for each theme.

Hardcoded values do not automatically change when unrelated variables change.

## 15. CSS Does Not Automatically Save State

These are different responsibilities:

- CSS defines the appearance of elements.
- HTML describes page structure.
- JavaScript changes the current document and responds to events.
- `localStorage` stores only the values explicitly written to it.

A class such as `.theme-toggle` is not automatically saved in `localStorage`.

The class remains in the HTML source. Its CSS rules are loaded again when the page reloads.

## 16. Common Problems and Solutions

### Button does nothing

Check that:

- The button ID is exactly `theme-toggle`.
- `script.js` is connected correctly.
- The browser console has no JavaScript errors.

### Theme changes, but resets after refresh

Check that:

- `localStorage.setItem()` runs after the theme changes.
- The saved theme is read when the page loads.
- The saved theme is applied to `document.documentElement`.

### Button colors do not change

Check that:

- The CSS uses `var(--color-text)` and other theme variables.
- The corresponding variables are redefined in the light-theme selector.
- The root HTML element has the correct `data-theme` attribute.

### A theme value is missing

Check that the CSS custom property name matches exactly, including its `--` prefix.

### Testing after changing the theme

Inspect the root HTML element in browser developer tools and check its `data-theme` attribute.

You can also inspect the stored preference in Developer Tools under Application or Storage, then Local Storage. The exact interface depends on the browser.

## 17. Testing Checklist

- [ ] The toggle button is visible.
- [ ] Clicking it changes the theme.
- [ ] The button label matches the next action.
- [ ] The page retains the selected theme after refresh.
- [ ] Both themes have readable text.
- [ ] Cards and the header use theme variables.
- [ ] Hover and keyboard focus styles remain visible.
- [ ] The browser console has no errors.

## 18. Security and Privacy Note

Theme preference is a non-sensitive UI setting, so `localStorage` is suitable for this example.

Do not use `localStorage` to store passwords, session secrets, or other sensitive authentication data.

## 19. Summary

The theme toggle demonstrates how HTML, CSS, JavaScript, and browser storage work together.

The HTML provides the button. CSS custom properties control the colors. JavaScript changes the `data-theme` attribute and responds to clicks. `localStorage` preserves the user's preference across page reloads.

This is a small example of separating structure, presentation, behavior, and persisted state.
