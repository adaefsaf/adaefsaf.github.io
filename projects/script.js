document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY; // Posisi scroll terakhir
    const navbar = document.querySelector('.navbar'); // Pilih elemen navbar

    if (!navbar) {
        console.error('Navbar element not found!');
        return;
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scroll ke bawah, sembunyikan navbar
            navbar.classList.add('hidden');
        } else {
            // Scroll ke atas, tampilkan navbar
            navbar.classList.remove('hidden');
        }
        lastScrollY = window.scrollY; // Perbarui posisi scroll terakhir
    });
});