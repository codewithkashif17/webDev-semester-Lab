
const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;

// Step 1: Saved theme read karo
const savedTheme = localStorage.getItem("theme");

// Step 2: Saved theme apply karo
if (savedTheme === "light") {
  root.dataset.theme = "light";
} else {
  root.dataset.theme = "dark";
}

// Step 3: Button ka text update karo
function updateButtonText() {
  if (root.dataset.theme === "light") {
    themeToggle.textContent = "Switch to Dark Mode";
  } else {
    themeToggle.textContent = "Switch to Light Mode";
  }
}

updateButtonText();

// Step 4: Button click par theme change aur save karo
themeToggle.addEventListener("click", function () {
  if (root.dataset.theme === "light") {
    root.dataset.theme = "dark";
  } else {
    root.dataset.theme = "light";
  }

  localStorage.setItem("theme", root.dataset.theme);

  updateButtonText();
});
