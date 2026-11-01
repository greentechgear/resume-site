// Light/dark control. With no saved choice the page follows the system
// setting; pressing the button saves an explicit choice.
(() => {
  const root = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  if (!button) return;
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const isDark = () => (root.dataset.theme ? root.dataset.theme === "dark" : system.matches);
  const sync = () => button.setAttribute("aria-pressed", String(isDark()));

  button.hidden = false;
  sync();
  system.addEventListener("change", sync);
  button.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });
})();
