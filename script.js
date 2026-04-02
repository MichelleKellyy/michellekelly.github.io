const button = document.getElementById("moreToggle");
const content = document.getElementById("moreContent");

button.addEventListener("click", () => {
    content.classList.toggle("show");
});