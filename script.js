window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const past = document.querySelector('.hero').getBoundingClientRect().bottom <= 0;
    nav.style.opacity = past ? '1' : '0';
    nav.style.transform = past ? 'translateY(0)' : 'translateY(-100%)';
    nav.style.pointerEvents = past ? 'all' : 'none';
});