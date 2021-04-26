const toggleBtn = document.getElementsByClassName("toggle-menu-btn")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    let expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleBtn.setAttribute('aria-expanded', !expanded);
});