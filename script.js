
const share = document.getElementById("share");

share.addEventListener("click", () =>{
    const isActive = share.classList.toggle("active");
    share.setAttribute("aria-pressed", isActive);
});