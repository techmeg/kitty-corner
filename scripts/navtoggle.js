const toggleBtn = document.getElementsByClassName("toggle-menu-btn")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];
const barTop = document.getElementsByClassName('bar-top')[0];
const barBottom = document.getElementsByClassName('bar-bottom')[0];
const barMiddle = document.getElementsByClassName('bar-middle')[0]

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    barTop.classList.toggle('active');
    barBottom.classList.toggle('active');
    barMiddle.classList.toggle('active');