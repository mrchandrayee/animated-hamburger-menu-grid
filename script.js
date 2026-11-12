const menuButtons = [...document.querySelectorAll(".menu-toggle")];
const expandedMenu = document.querySelector("#expandedMenu");
const toast = document.querySelector("#toast");
let toastTimer;

function setMenuOpen(open, sourceButton = null) {
  menuButtons.forEach(button => {
    const active = open && button === sourceButton;
    button.classList.toggle("is-open", active);
    button.setAttribute("aria-expanded", String(active));
    button.setAttribute("aria-label", active ? "Close menu" : "Open menu");
  });
  expandedMenu.hidden = !open;
}

menuButtons.forEach(button => {
  button.addEventListener("click", () => {
    const shouldOpen = !button.classList.contains("is-open");
    setMenuOpen(shouldOpen, shouldOpen ? button : null);
  });
});

expandedMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    notify(`${link.textContent} selected`);
    setMenuOpen(false);
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") setMenuOpen(false);
});

function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1500);
}
