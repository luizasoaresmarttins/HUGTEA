/* ============================================================
   HUGTEA — JavaScript Global
   Navbar, scroll, acessibilidade, toast, animações
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Loading Overlay ----
  const loadingOverlay = document.querySelector('.loading-overlay');
  if (loadingOverlay) {
    window.addEventListener('load', () => {
      setTimeout(() => loadingOverlay.classList.add('hidden'), 300);
    });
    // Fallback: garantir que carregue mesmo se load já disparou
    setTimeout(() => loadingOverlay.classList.add('hidden'), 1500);
  }

  // ---- Navbar Scroll Effect ----
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Hamburger Menu ----
  const hamburger = document.querySelector('.navbar__hamburger');
  const navLinks = document.querySelector('.navbar__links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';

      // Atualizar aria
      const isOpen = navLinks.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Fechar ao clicar em um link
    navLinks.querySelectorAll('.navbar__link, .navbar__cta').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Active Link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Scroll Animations (Intersection Observer) ----
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  if (animateElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );
    animateElements.forEach((el) => observer.observe(el));
  }

  // ---- Accessibility Widget ----
  const a11yToggle = document.querySelector('.a11y-widget__toggle');
  const a11yPanel = document.querySelector('.a11y-widget__panel');
  if (a11yToggle && a11yPanel) {
    a11yToggle.addEventListener('click', () => {
      const isOpen = a11yPanel.classList.toggle('open');
      a11yToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.a11y-widget')) {
        a11yPanel.classList.remove('open');
        a11yToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- High Contrast Toggle ----
  const highContrastToggle = document.getElementById('toggle-high-contrast');
  if (highContrastToggle) {
    // Carregar preferência salva
    const saved = localStorage.getItem('hugtea-high-contrast');
    if (saved === 'true') {
      document.body.classList.add('high-contrast');
      highContrastToggle.checked = true;
    }

    highContrastToggle.addEventListener('change', () => {
      document.body.classList.toggle('high-contrast', highContrastToggle.checked);
      localStorage.setItem('hugtea-high-contrast', highContrastToggle.checked);
    });
  }

  // ---- Large Text Toggle ----
  const largeTextToggle = document.getElementById('toggle-large-text');
  if (largeTextToggle) {
    const saved = localStorage.getItem('hugtea-large-text');
    if (saved === 'true') {
      document.body.classList.add('large-text');
      largeTextToggle.checked = true;
    }

    largeTextToggle.addEventListener('change', () => {
      document.body.classList.toggle('large-text', largeTextToggle.checked);
      localStorage.setItem('hugtea-large-text', largeTextToggle.checked);
    });
  }

  // ---- Reduced Motion Toggle ----
  const reducedMotionToggle = document.getElementById('toggle-reduced-motion');
  if (reducedMotionToggle) {
    const saved = localStorage.getItem('hugtea-reduced-motion');
    if (saved === 'true') {
      document.documentElement.style.setProperty('--transition-fast', '0ms');
      document.documentElement.style.setProperty('--transition-base', '0ms');
      document.documentElement.style.setProperty('--transition-slow', '0ms');
      reducedMotionToggle.checked = true;
    }

    reducedMotionToggle.addEventListener('change', () => {
      if (reducedMotionToggle.checked) {
        document.documentElement.style.setProperty('--transition-fast', '0ms');
        document.documentElement.style.setProperty('--transition-base', '0ms');
        document.documentElement.style.setProperty('--transition-slow', '0ms');
      } else {
        document.documentElement.style.setProperty('--transition-fast', '150ms ease');
        document.documentElement.style.setProperty('--transition-base', '250ms ease');
        document.documentElement.style.setProperty('--transition-slow', '400ms ease');
      }
      localStorage.setItem('hugtea-reduced-motion', reducedMotionToggle.checked);
    });
  }
});

// ---- Toast Notifications ----
function showToast(message, type = 'info', duration = 4000) {
  // Remover toast existente
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠',
  };

  toast.innerHTML = `<span>${icons[type] || ''}</span> <span>${message}</span>`;
  document.body.appendChild(toast);

  // Animar para dentro
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Remover após duração
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ---- Smooth scroll para links âncora ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
