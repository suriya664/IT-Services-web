/**
 * IT Services Template - Main JavaScript
 * Global UI logic and interactions
 */

(function() {
  'use strict';

  // ========================================
  // Theme Toggle (Dark Mode)
  // ========================================
  const initThemeToggle = () => {
    const themeToggleBtn = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;

    // Prefer saved theme; else force 'light' as default (overrides system preference)
    let savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      savedTheme = 'light'; // Always default to light mode
    }
    htmlElement.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggleBtn.classList.add('rotating');
        setTimeout(() => themeToggleBtn.classList.remove('rotating'), 300);
      });
    }
  };

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  const initSmoothScroll = () => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" or modal trigger
        if (href === '#' || this.hasAttribute('data-bs-toggle')) {
          return;
        }
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without jumping
          history.pushState(null, null, href);
        }
      });
    });
  };

  // ========================================
  // Navbar Background on Scroll
  // ========================================
  const initNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on init
  };

  // ========================================
  // Mobile Menu Toggle
  // ========================================
  const initMobileMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
      // Close menu when clicking on a link
      const navLinks = navbarCollapse.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth < 992) {
            navbarToggler.click();
          }
        });
      });
    }
  };

  // ========================================
  // Back to Top Button
  // ========================================
  const initBackToTop = () => {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (!backToTopBtn) return;
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    };
    
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  };

  // ========================================
  // Lazy Loading Images
  // ========================================
  const initLazyLoad = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  };

  // ========================================
  // Form Validation
  // ========================================
  const initFormValidation = () => {
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  };

  // ========================================
  // Phone Number Formatting (Indian)
  // ========================================
  const initPhoneFormatting = () => {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        // Ensure it starts with +91 or add it
        if (!value.startsWith('91') && value.length > 0) {
          value = '91' + value;
        }
        
        // Limit to 12 digits (91 + 10 digits)
        if (value.length > 12) {
          value = value.substring(0, 12);
        }
        
        // Format: +91 XXXXX XXXXX
        if (value.length > 2) {
          value = '+' + value.substring(0, 2) + ' ' + value.substring(2, 7) + 
                  (value.length > 7 ? ' ' + value.substring(7) : '');
        } else if (value.length > 0) {
          value = '+' + value;
        }
        
        e.target.value = value;
      });
    });
  };

  // ========================================
  // Counter Animation
  // ========================================
  const initCounterAnimation = () => {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const animateCounter = (element) => {
      const target = parseInt(element.dataset.count);
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60 FPS
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target.toLocaleString('en-IN');
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current).toLocaleString('en-IN');
        }
      }, 16);
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          animateCounter(entry.target);
          entry.target.dataset.animated = 'true';
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
  };

  // ========================================
  // Active Page Detection
  // ========================================
  const initActivePageDetection = () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
    
    // Only mark exact matches as active
    navLinks.forEach(link => {
      if (link.href) {
        const linkPath = new URL(link.href).pathname;
        // Only activate if it's an exact match or the filename matches
        const isActive = currentPath.endsWith(linkPath) || 
                        currentPath.endsWith(linkPath.replace('.html', '')) ||
                        (currentPath.includes(linkPath) && currentPath === linkPath);
        
        if (isActive) {
          link.classList.add('active');
        }
      }
    });
    
    // Remove active class from dropdown toggles when their parent has items
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
      toggle.classList.remove('active');
    });
  };

  // ========================================
  // Accordion Auto-collapse
  // ========================================
  const initAccordion = () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-bs-target');
        const accordionItem = document.querySelector(targetId);
        
        // Add smooth transition
        if (accordionItem) {
          accordionItem.style.transition = 'height 0.3s ease';
        }
      });
    });
  };

  // ========================================
  // Copy to Clipboard
  // ========================================
  const initCopyToClipboard = () => {
    const copyButtons = document.querySelectorAll('[data-copy]');
    
    copyButtons.forEach(button => {
      button.addEventListener('click', async () => {
        const textToCopy = button.dataset.copy;
        
        try {
          await navigator.clipboard.writeText(textToCopy);
          
          // Show feedback
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          button.classList.add('copied');
          
          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      });
    });
  };

  // ========================================
  // Tooltips Initialization
  // ========================================
  const initTooltips = () => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    
    if (typeof bootstrap !== 'undefined') {
      tooltipTriggerList.map(tooltipTriggerEl => {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  };

  // ========================================
  // Popovers Initialization
  // ========================================
  const initPopovers = () => {
    const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    
    if (typeof bootstrap !== 'undefined') {
      popoverTriggerList.map(popoverTriggerEl => {
        return new bootstrap.Popover(popoverTriggerEl);
      });
    }
  };

  // ========================================
  // Auto-hide Alerts
  // ========================================
  const initAutoHideAlerts = () => {
    const alerts = document.querySelectorAll('.alert[data-auto-dismiss]');
    
    alerts.forEach(alert => {
      const delay = parseInt(alert.dataset.autoDismiss) || 5000;
      
      setTimeout(() => {
        const bsAlert = new bootstrap.Alert(alert);
        bsAlert.close();
      }, delay);
    });
  };

  // ========================================
  // Print Page Function
  // ========================================
  const initPrintButtons = () => {
    const printButtons = document.querySelectorAll('[data-print]');
    
    printButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
      });
    });
  };

  // ========================================
  // Page Load Progress Bar
  // ========================================
  const initProgressBar = () => {
    window.addEventListener('beforeunload', () => {
      document.body.classList.add('page-loading');
    });
    
    window.addEventListener('load', () => {
      document.body.classList.remove('page-loading');
    });
  };

  // ========================================
  // Cookie Consent (Simple Implementation)
  // ========================================
  const initCookieConsent = () => {
    const cookieBanner = document.querySelector('.cookie-consent');
    const acceptButton = document.querySelector('.cookie-accept');
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent && cookieBanner) {
      setTimeout(() => {
        cookieBanner.classList.add('show');
      }, 1000);
      
      if (acceptButton) {
        acceptButton.addEventListener('click', () => {
          localStorage.setItem('cookieConsent', 'true');
          cookieBanner.classList.remove('show');
        });
      }
    }
  };

  // ========================================
  // Initialize All Functions on DOM Ready
  // ========================================
  const init = () => {
    initThemeToggle();
    initSmoothScroll();
    initNavbarScroll();
    initMobileMenu();
    initBackToTop();
    initLazyLoad();
    initFormValidation();
    initPhoneFormatting();
    initCounterAnimation();
    initActivePageDetection();
    initAccordion();
    initCopyToClipboard();
    initTooltips();
    initPopovers();
    initAutoHideAlerts();
    initPrintButtons();
    initProgressBar();
    initCookieConsent();
  };

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

