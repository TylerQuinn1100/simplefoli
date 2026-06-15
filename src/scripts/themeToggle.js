const STORAGE_KEY = "theme";
const DARK_CLASS = "dark-theme";

function applyTheme(theme) {
  document.body.classList.toggle(DARK_CLASS, theme === "dark");
}

export default function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  // Restore saved preference, falling back to the OS setting.
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle(DARK_CLASS);
    localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
  });
}
