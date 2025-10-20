document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    function activatePage(targetId) {
        pages.forEach(page => {
            const isActive = page.id === targetId;
            page.classList.toggle('active', isActive);
        });

        navLinks.forEach(item => {
            const linkTarget = item.getAttribute('href').substring(1);
            const isTarget = linkTarget === targetId;
            item.classList.toggle('active', isTarget);
        });
        window.scrollTo(0, 0);
    }

    // On affiche la page d'accueil par défaut
    activatePage('accueil');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            activatePage(targetId);
        });
    });

    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
