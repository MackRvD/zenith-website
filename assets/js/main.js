/**
 * Zenith Platform - Main JavaScript Application
 * Handles theme switching, mobile drawer, pricing toggle, tab switching,
 * FAQ accordions, smooth scrolling with spy, and contact form validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Dark / Light mode)
  initTheme();

  // 2. Mobile Drawer Navigation
  initMobileNav();

  // 3. Scroll Spy & Sticky Header
  initScrollSpy();

  // 4. Pricing Switcher (Monthly / Annual)
  initPricingSwitcher();

  // 5. Showcase Feature Tabs
  initTabs();

  // 6. FAQ Accordion
  initAccordion();

  // 7. Contact Form Validation
  initContactForm();

  // 8. Footer Year & Back to Top
  initBackToTop();
  initFooterYear();
});

/**
 * 1. Theme Management
 * Persists theme preference to localStorage and respects OS preference
 */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('zenith-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  setTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('zenith-theme', theme);
  }
}

/**
 * 2. Mobile Drawer Navigation
 */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const closeMenuBtn = document.getElementById('close-menu');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('menu-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!mobileToggle || !mobileDrawer || !backdrop) return;

  function openMenu() {
    mobileDrawer.classList.add('active');
    backdrop.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileDrawer.classList.remove('active');
    backdrop.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  mobileToggle.addEventListener('click', openMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
      closeMenu();
    }
  });
}

/**
 * 3. Scroll Spy & Sticky Header
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * 4. Pricing Switcher (Monthly vs Annually)
 */
function initPricingSwitcher() {
  const toggle = document.getElementById('billing-toggle');
  const amountEls = document.querySelectorAll('.pricing-card .amount');

  if (!toggle || !amountEls.length) return;

  toggle.addEventListener('change', () => {
    const isAnnual = toggle.checked;

    amountEls.forEach(amountEl => {
      const monthly = amountEl.getAttribute('data-monthly');
      const annual = amountEl.getAttribute('data-annual');
      const targetVal = isAnnual ? annual : monthly;

      // Animate price change
      amountEl.style.opacity = '0';
      amountEl.style.transform = 'translateY(-6px)';
      amountEl.style.transition = 'all 0.18s ease';

      setTimeout(() => {
        amountEl.textContent = targetVal;
        amountEl.style.opacity = '1';
        amountEl.style.transform = 'translateY(0)';
      }, 180);
    });
  });
}

/**
 * 5. Showcase Feature Tabs
 */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // Update active states on buttons
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update active states on panels
      tabPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}

/**
 * 6. FAQ Accordion
 */
function initAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!button || !answer) return;

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close other open items for clean accordion UX
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/**
 * 7. Contact Form Validation
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusBox = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    const nameInput = document.getElementById('contact-name');
    const nameGroup = nameInput.closest('.form-group');
    if (!nameInput.value.trim()) {
      nameGroup.classList.add('has-error');
      isValid = false;
    } else {
      nameGroup.classList.remove('has-error');
    }

    // Validate Email
    const emailInput = document.getElementById('contact-email');
    const emailGroup = emailInput.closest('.form-group');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailGroup.classList.add('has-error');
      isValid = false;
    } else {
      emailGroup.classList.remove('has-error');
    }

    // Validate Message
    const messageInput = document.getElementById('contact-message');
    const messageGroup = messageInput.closest('.form-group');
    if (!messageInput.value.trim()) {
      messageGroup.classList.add('has-error');
      isValid = false;
    } else {
      messageGroup.classList.remove('has-error');
    }

    if (!isValid) return;

    // Simulate submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending message...';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;

      if (statusBox) {
        statusBox.className = 'form-status success';
        statusBox.textContent = 'Thank you! Your message has been sent successfully. We will be in touch shortly.';
        setTimeout(() => {
          statusBox.style.display = 'none';
          statusBox.textContent = '';
        }, 6000);
      }
    }, 900);
  });

  // Real-time error removal on input
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group) group.classList.remove('has-error');
    });
  });
}

/**
 * 8. Back to Top Button & Footer Year
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function initFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
