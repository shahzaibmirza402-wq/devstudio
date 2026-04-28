window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    } else {
        nav.style.backgroundColor = 'rgba(15, 23, 42, 0.85)';
    }
});
console.log("Shahzaib's Site Loaded");
