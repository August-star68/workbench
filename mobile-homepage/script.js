const modeButtons = document.querySelectorAll("[data-mode-trigger]");
const modePanels = document.querySelectorAll("[data-mode-panel]");

function setActiveMode(targetMode) {
  modeButtons.forEach((button) => {
    const isActive = button.dataset.modeTrigger === targetMode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  modePanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.modePanel === targetMode);
  });
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveMode(button.dataset.modeTrigger);
  });
});

setActiveMode("personal");
