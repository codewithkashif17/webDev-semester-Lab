
# Site Theme — CSS Fundamentals and Design System

## 1. Purpose

This document explains how `site-theme.css` controls the visual design of the Web Development Course website.

The goal is not only to write CSS, but also to understand why each property is used and how reusable styles make a website easier to maintain.

## 2. Technologies Used

- HTML: defines the structure of the webpage.
- CSS: controls layout, colors, spacing, borders, and typography.
- CSS custom properties: store reusable design values.
- JavaScript: changes the active theme through the HTML document.
- Browser: reads HTML, CSS, and JavaScript and displays the webpage.

## 3. The CSS Reset

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}
```

### Universal selector: `*`

The `*` selector matches all HTML elements.

### `box-sizing: border-box`

By default, CSS uses the content-box sizing model. With `border-box`, an element's declared width includes its content, padding, and border.

This makes element sizing more predictable.

### `margin: 0`

Browsers apply default margins to some elements, including the body. Setting the body margin to zero removes the default outer space.

### `font-family`

This property controls the typeface used for text. Arial is used here as a simple system font.

## 4. The `:root` Selector

`:root` selects the document's root element, which is normally the `<html>` element.

It is commonly used to define CSS custom properties that can be reused throughout a website.

Example:

```css
:root {
  --color-bg: #0b121a;
  --color-text: #e5edf5;
}
```

The names beginning with `--` are CSS custom properties.

They are not built-in CSS variables. We create and name them ourselves.

## 5. CSS Variables and `var()`

A custom property stores a reusable CSS value.

```css
:root {
  --color-surface: #111c27;
}

.content-card {
  background-color: var(--color-surface);
}
```

`var(--color-surface)` reads the value stored in that custom property.

Benefits:

- Avoids repeating the same values throughout the stylesheet.
- Makes global design changes easier.
- Helps keep colors and spacing consistent.
- Makes themes easier to implement.

## 6. Theme Color Reference

### Dark theme defaults

| Variable | Value | Purpose |
|---|---|---|
| `--color-bg` | `#0b121a` | Main page background |
| `--color-text` | `#e5edf5` | Primary text |
| `--color-muted` | `#aebdca` | Secondary text |
| `--color-ice` | `#a9d6f5` | Accent color |
| `--color-surface` | `#111c27` | Cards and panels |
| `--color-border` | `rgba(187, 215, 233, 0.18)` | Subtle borders |

These values describe the current design choices. They are not special CSS keywords.

### Choosing colors

- Page backgrounds should not compete with the content.
- Primary text needs strong contrast against its background.
- Secondary text should remain readable.
- Accent colors help important elements stand out.
- Borders can separate panels without looking too strong.

## 7. The Light Theme Selector

```css
:root[data-theme="light"] {
  --color-bg: #f3f6fa;
  --color-text: #182536;
  --color-muted: #59697b;
  --color-ice: #1769aa;
  --color-surface: #ffffff;
  --color-border: rgba(24, 37, 54, 0.15);
}
```

This selector matches the root HTML element when it has `data-theme="light"`.

Example HTML:

```html
<html data-theme="light">
```

The light-theme selector overrides the custom properties that it defines again.

Properties not redefined in the light-theme selector continue to use their normal values, inherited from the root custom properties.

This is why both themes can use the same component CSS.

## 8. Is `color-scheme` a CSS Property?

Yes. `color-scheme` is a built-in CSS property.

```css
:root {
  color-scheme: dark;
}
```

It tells the browser which color scheme the page is designed for. It can affect browser-rendered controls such as native form fields.

It does not automatically recolor every custom website element.

Custom backgrounds, text, borders, and cards still need their own CSS rules or variables.

## 9. Base Page Styling

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.65;
  color: var(--color-text);
  background: var(--color-bg);
}
```

- `line-height`: controls the vertical distance between lines of text.
- `color`: sets the default text color.
- `background`: sets the page background.
- `var()`: makes the styles respond to the active theme.

The reset and base body rules can be combined into one body rule when organizing the stylesheet.

## 10. Header Styling

Example:

```css
body > header {
  padding: 2rem 1.25rem;
  background: linear-gradient(
    135deg,
    var(--color-header-start),
    var(--color-header-end)
  );
}
```

### The selector `body > header`

The `>` symbol is the direct-child combinator.

It selects a `<header>` whose direct parent is `<body>`.

### Padding shorthand

```css
padding: 2rem 1.25rem;
```

With two values:

- First value: top and bottom.
- Second value: left and right.

### Linear gradient

`linear-gradient()` blends colors across a direction.

`135deg` defines the gradient's direction.

### Responsive font sizing

```css
font-size: clamp(1.5rem, 3vw, 2.2rem);
```

`clamp(minimum, preferred, maximum)` keeps the font size within a range.

`vw` is a percentage of the viewport width.

## 11. Main Content Layout

Example:

```css
body > main {
  width: min(calc(100% - 2rem), 1160px);
  min-height: 55vh;
  margin: 2rem auto;
}
```

### `width`

`calc(100% - 2rem)` calculates a width that leaves some horizontal space.

`min()` selects the smaller of the calculated width and `1160px`.

This prevents the content from becoming excessively wide on large screens.

### `min-height`

`55vh` means 55% of the viewport height.

`min-height` defines a minimum, not a fixed height. Content can make the element taller.

### Margin auto

```css
margin: 2rem auto;
```

The vertical margin is `2rem`. The left and right margins are automatic, which can center the element when it has a constrained width.

## 12. Content Panels and Cards

```css
.content-card {
  padding: 2rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  margin-bottom: 1.5rem;
}
```

- `padding`: creates space inside the card.
- `background`: sets its surface color.
- `border`: creates a boundary around the card.
- `border-radius`: rounds the corners.
- `margin-bottom`: separates this card from content below it.

### Classes

HTML:

```html
<section class="content-card">
  <h2>Welcome</h2>
  <p>Learn web development step by step.</p>
</section>
```

CSS:

```css
.content-card {
  padding: 2rem;
}
```

The dot in `.content-card` tells CSS that this is a class selector.

The same class can be reused on multiple elements.

## 13. Theme Toggle Button Styling

```css
.theme-toggle {
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: background-color 160ms ease,
              color 160ms ease,
              border-color 160ms ease;
}
```

The button uses theme variables, so its colors respond to theme changes.

### Hover state

```css
.theme-toggle:hover {
  border-color: var(--color-ice);
}
```

`:hover` applies while the pointer is over the element.

### Keyboard focus

```css
.theme-toggle:focus-visible {
  outline: 2px solid var(--color-ice);
  outline-offset: 3px;
}
```

`:focus-visible` provides a visible focus indicator when appropriate, particularly during keyboard navigation.

### Transition

`transition` animates supported property changes over a specified duration.

`160ms` means 160 milliseconds.

## 14. Why Theme Variables Are Useful

Without variables, a button might use hardcoded colors:

```css
.theme-toggle {
  color: #e5edf5;
  background: #111c27;
}
```

Those colors would remain the same when the theme changes.

With variables:

```css
.theme-toggle {
  color: var(--color-text);
  background: var(--color-surface);
}
```

The browser resolves the variables using the active theme's values.

The button's CSS rules do not need to be duplicated for light and dark themes.

## 15. Common Mistakes

1. Creating duplicate selectors unnecessarily.
2. Forgetting the `--` prefix when defining a custom property.
3. Using `var(color-text)` instead of `var(--color-text)`.
4. Expecting `color-scheme` to recolor all custom elements.
5. Using hardcoded colors in components that should adapt to themes.
6. Choosing text and background colors with poor contrast.
7. Confusing padding, which is inside an element, with margin, which is outside it.

## 16. Recommended Maintenance

- Keep the main theme variables together.
- Use meaningful variable names.
- Reuse existing variables before introducing new ones.
- Group related component styles under clear comments.
- Combine duplicate body rules when convenient.
- Test both themes after changing shared colors.
- Keep focus indicators visible for keyboard users.

## 17. Summary

`site-theme.css` defines the website's visual foundation.

CSS variables provide reusable design values. Theme-specific selectors override those values, while shared component rules continue to work for both themes.

Understanding selectors, the box model, spacing, colors, and responsive sizing creates a foundation for more advanced layouts such as Flexbox and Grid.
