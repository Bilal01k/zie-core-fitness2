document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isActive = navLinks.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', isActive);
      mobileMenuBtn.innerHTML = isActive 
        ? '<i class="fas fa-times" aria-hidden="true"></i>' 
        : '<i class="fas fa-bars" aria-hidden="true"></i>';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', false);
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
      });
    });
  }

  // Header Scroll Effect
  const header = document.getElementById('header');

  if (header) {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldAddClass = currentScrollY > 100;

      if (shouldAddClass !== (lastScrollY > 100)) {
        header.classList.toggle('scrolled', shouldAddClass);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
  }
});
