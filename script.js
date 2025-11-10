
const shareBtn = document.getElementById("share");
const popup = document.getElementById("popup")

if (shareBtn && popup) {
shareBtn.addEventListener("click", () => {
  popup.classList.toggle('show');
  document.querySelector('.author-section').classList.toggle('popup-active');
  
  const isPressed = shareBtn.getAttribute('aria-pressed') === 'true';
  shareBtn.setAttribute('aria-pressed', !isPressed);
});
} else {
  console.warn("Required elements not found: shareBtn or popup");
}