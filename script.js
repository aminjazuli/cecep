document.addEventListener('DOMContentLoaded', function () {
    // -----------------------------------------------------------------
    // 1. Fungsi Hamburger Menu Toggle (Responsif)
    // -----------------------------------------------------------------
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // Toggle menu saat tombol diklik
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('show');
        });

        // Sembunyikan menu saat link di dalam menu diklik
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function () {
                if (navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                }
            });
        });
    }

    // -----------------------------------------------------------------
    // 2. Animasi Fade-in Saat Scroll
    // -----------------------------------------------------------------
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // -----------------------------------------------------------------
    // 3. Efek Klik Anggota Struktur
    // -----------------------------------------------------------------
    const anggotaList = document.querySelectorAll(".anggota");

    anggotaList.forEach(item => {
        item.addEventListener("click", () => {
            // Toggle active class pada item yang diklik
            item.classList.toggle("active");
        });
    });

    // -----------------------------------------------------------------
    // 4. Efek Scroll/Blur Tambahan (Dihapus karena sudah di handle di CSS)
    // -----------------------------------------------------------------
    // Efek blur navbar saat scroll di CSS sudah diatur default, 
    // jika Anda ingin menambah efek ketika scroll, gunakan class lain.
    /*
    window.addEventListener("scroll", function() {
        const nav = document.querySelector("nav");
        if (window.scrollY > 50) {
            nav.classList.add("scrolled"); // <-- Jika class "scrolled" ada di CSS
        } else {
            nav.classList.remove("scrolled");
        }
    });
    */
});