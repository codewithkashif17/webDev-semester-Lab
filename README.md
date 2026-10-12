# Web Development Course

A practical web development learning project focused on understanding HTML, CSS, and JavaScript by building a real website step by step.

The project is designed to help students understand not only **how to write code**, but also **why that code is used**.

## Project Overview

This website is being developed as part of the Web Development course for the 5th semester at Kohat University of Science and Technology (KUST).

Instead of learning concepts only through theory, each concept is practiced by implementing it in the website.

### Current Features

- Responsive website layout
- Reusable CSS theme variables
- Dark and light theme support
- Theme preference saved in browser `localStorage`
- Separate documentation page
- Markdown-based technical documentation
- CSS styling for documentation content
- Responsive documentation layout
- Practical examples and explanations of CSS and JavaScript concepts

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling, layout, themes, and responsiveness |
| JavaScript | Theme switching and interactive functionality |
| Markdown | Writing technical documentation |
| Marked.js | Rendering Markdown as HTML |
| VS Code Live Server | Running the website locally |
| Git and GitHub | Version control and project sharing |

## Project Structure

```text
web_dev_course/
│
├── index.html
├── index.css
├── site-theme.css
├── script.js
├── README.md
├── .gitignore
│
├── Assignments/
│   ├── index.html
│   └── assignments.css
│
├── docs/
│   ├── site-theme.md
│   └── theme-toggle.md
│
└── documentation/
    ├── index.html
    ├── documentation.css
    └── documentation.js
```

> Note: This is the main project structure. If additional folders or files exist in the project, keep them in their current locations.

## Website Theme System

The website uses CSS custom properties to manage colors and reusable design values.

The variables are defined in `site-theme.css`.

Examples include:

- `--color-bg`: page background
- `--color-text`: primary text color
- `--color-muted`: secondary text color
- `--color-surface`: card and panel background
- `--color-border`: border color
- `--color-ice`: accent color
- `--radius-card`: card corner radius
- `--spacing-card`: card padding

### Dark and Light Themes

The dark theme is the default theme.

The light theme is activated using the `data-theme` attribute on the HTML root element.

```html
<html lang="en" data-theme="light">
```

The JavaScript code updates this attribute when the user clicks the theme toggle button.

The CSS variables then automatically update the website's appearance.

### Theme Preference

The selected theme is stored in the browser's `localStorage` using the key `theme`.

This allows the website to remember the user's selected theme when they revisit the page in the same browser.

## Documentation System

The `documentation/` directory contains a separate website page for reading project documentation.

The documentation content is maintained as Markdown files in the `docs/` directory.

### Available Documentation

| File | Description |
|---|---|
| `docs/site-theme.md` | CSS variables, theme colors, layout, and reusable styles |
| `docs/theme-toggle.md` | JavaScript theme switching, event listeners, and localStorage |
| `documentation/index.html` | Documentation page structure |
| `documentation/documentation.css` | Documentation page styling and responsive layout |
| `documentation/documentation.js` | Loads Markdown files and renders their content |

The documentation page uses Marked.js to convert Markdown content into HTML.

## How to Run the Project

Because the documentation page loads Markdown files using JavaScript `fetch()`, run the project through a local development server instead of opening the HTML files directly using `file://`.

### Using VS Code Live Server

1. Open the `web_dev_course` folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Open the root `index.html` file.
4. Right-click and select **Open with Live Server**, or click **Go Live**.
5. Open the documentation page using the generated local server address followed by `/documentation/index.html`.

For example:

```text
http://127.0.0.1:5500/
http://127.0.0.1:5500/documentation/index.html
```

The port may be different on your computer. Use the URL provided by Live Server.

**Important:** Marked.js is currently loaded from a CDN, so an internet connection is required for the Markdown renderer to load.

## Learning Progress

The project follows a step-by-step learning approach.

- [x] HTML document structure
- [x] CSS reset and basic styling
- [x] CSS custom properties
- [x] Header styling and gradients
- [x] Main content layout
- [x] Reusable content card styling
- [x] Dark and light theme variables
- [x] Theme toggle using JavaScript
- [x] Saving the selected theme with `localStorage`
- [x] Markdown-based documentation page
- [ ] Flexbox fundamentals and practical layouts
- [ ] CSS Grid fundamentals
- [ ] Responsive design improvements
- [ ] Further JavaScript interactivity

Update this checklist as new concepts are completed and implemented.

## Development Approach

Each lesson follows this workflow:

1. Understand the concept and why it is needed.
2. Learn the syntax and important properties.
3. Apply the concept to the website.
4. Test the result in the browser.
5. Review common mistakes.
6. Document the concept for future reference.
7. Save the changes using Git.

## Version Control

Git is used to track changes during development, while GitHub can be used to host the repository and share the project.

Before committing changes, review the modified files:

```powershell
git status
```

After checking the changes, stage the intended files, commit them, and push to the configured remote repository.

## Project Goal

The goal is to build a working educational website while developing a strong understanding of frontend fundamentals.

The project will continue to evolve as new HTML, CSS, and JavaScript concepts are learned and implemented.

---

**Project:** Web Development Course  
**Semester:** 5th Semester  
**University:** Kohat University of Science and Technology (KUST)  
**Status:** In Development
