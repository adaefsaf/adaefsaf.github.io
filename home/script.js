if (window.location.pathname === '/') {
    window.location.replace('/home')
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
