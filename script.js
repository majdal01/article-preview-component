
const shareBtn = document.getElementById("share");
const popup = document.getElementById("popup")

shareBtn.addEventListener("click", () => {
  popup.classList.toggle('show');
  
  const isPressed = shareBtn.getAttribute('aria-pressed') === 'true';
  shareBtn.setAttribute('aria-pressed', !isPressed);
});