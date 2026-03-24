window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const past = document.querySelector('.hero').getBoundingClientRect().bottom <= 0;
    nav.style.opacity = past ? '1' : '0';
    nav.style.transform = past ? 'translateY(0)' : 'translateY(-100%)';
    nav.style.pointerEvents = past ? 'all' : 'none';
});

const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
