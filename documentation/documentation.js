
const docsRendered = document.querySelector("#docs-rendered");
const docsStatus = document.querySelector("#docs-status");
const docsButtons = document.querySelectorAll("[data-doc]");

const documentationFiles = {
  "site-theme": "../docs/site-theme.md",
  "theme-toggle": "../docs/theme-toggle.md"
};

async function loadDocumentation(documentName) {
  const filePath = documentationFiles[documentName];

  if (!filePath) {
    docsStatus.textContent = "Documentation page not found.";
    return;
  }

  docsStatus.textContent = "Loading documentation...";
  docsRendered.replaceChildren();

  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error("Could not load the Markdown file.");
    }

    const markdown = await response.text();

    if (typeof marked === "undefined") {
      throw new Error("Markdown renderer did not load.");
    }

    docsRendered.innerHTML = marked.parse(markdown);
    docsStatus.textContent = "";
  } catch (error) {
    docsStatus.textContent =
      "Unable to load documentation. Run the website with VS Code Live Server and check the file paths.";
    console.error(error);
  }

  docsButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.doc === documentName
    );
  });
}

docsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    loadDocumentation(button.dataset.doc);
  });
});

loadDocumentation("site-theme");
