function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeModal(modalId) {
  const body = document.body;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
    body.style.overflow = '';
  }
}

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});