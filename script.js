const button = document.getElementById("moreToggle");
const content = document.getElementById("moreContent");

button.addEventListener("click", () => {
    content.classList.toggle("show");
    button.classList.add("clicked");
});

const scroller = document.getElementById('photoScroller');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

if (scroller && scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.addEventListener('click', () => {
        scroller.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    scrollRightBtn.addEventListener('click', () => {
        scroller.scrollBy({ left: 300, behavior: 'smooth' });
    });
}