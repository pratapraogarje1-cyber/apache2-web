(() => {
  const button = document.getElementById("menu");
  const links = document.getElementById("links");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  if (button && links) {
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("open", !open);
      button.textContent = open ? "☰" : "✕";
      button.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    });
    links.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      links.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      button.textContent = "☰";
    }));
  }
})();