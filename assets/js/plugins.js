/**
 * Plugins Initialization
 * Initialize AOS, Swiper, Charts, and other third-party libraries
 */

(function() {
  'use strict';

  // ========================================
  // AOS (Animate On Scroll) Initialization
  // ========================================
  const initAOS = () => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        delay: 100
      });
    }
  };

  // ========================================
  // Swiper / Carousel Initialization
  // ========================================
  const initSwipers = () => {
    // Testimonials Carousel
    const testimonialsSwiper = document.querySelector('.testimonials-swiper');
    if (testimonialsSwiper && typeof Swiper !== 'undefined') {
      new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          }
        }
      });
    }

    // Partners/Clients Logo Carousel
    const partnersSwiper = document.querySelector('.partners-swiper');
    if (partnersSwiper && typeof Swiper !== 'undefined') {
      new Swiper('.partners-swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          }
        }
      });
    }

    // Case Studies Carousel
    const caseStudiesSwiper = document.querySelector('.case-studies-swiper');
    if (caseStudiesSwiper && typeof Swiper !== 'undefined') {
      new Swiper('.case-studies-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          }
        }
      });
    }
  };

  // ========================================
  // Chart.js Initialization (for Dashboard)
  // ========================================
  const initCharts = () => {
    // Revenue Chart
    const revenueChartCanvas = document.getElementById('revenueChart');
    if (revenueChartCanvas && typeof Chart !== 'undefined') {
      const ctx = revenueChartCanvas.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Revenue (₹ Lakhs)',
            data: [12, 19, 15, 25, 22, 30, 28, 35, 32, 38, 40, 45],
            borderColor: '#0066cc',
            backgroundColor: 'rgba(0, 102, 204, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return '₹' + value;
                }
              }
            }
          }
        }
      });
    }

    // Services Distribution Chart
    const servicesChartCanvas = document.getElementById('servicesChart');
    if (servicesChartCanvas && typeof Chart !== 'undefined') {
      const ctx = servicesChartCanvas.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Cybersecurity', 'Cloud Services', 'DevOps', 'Consulting', 'Support'],
          datasets: [{
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
              '#0066cc',
              '#00cc99',
              '#ff6b35',
              '#ffc107',
              '#17a2b8'
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right'
            }
          }
        }
      });
    }

    // Ticket Status Chart
    const ticketsChartCanvas = document.getElementById('ticketsChart');
    if (ticketsChartCanvas && typeof Chart !== 'undefined') {
      const ctx = ticketsChartCanvas.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Open', 'In Progress', 'Resolved', 'Closed'],
          datasets: [{
            label: 'Support Tickets',
            data: [15, 8, 25, 42],
            backgroundColor: ['#ffc107', '#17a2b8', '#28a745', '#6c757d']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  };

  // ========================================
  // Particles.js Background (Optional)
  // ========================================
  const initParticles = () => {
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer && typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#0066cc'
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.5,
            random: false
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#0066cc',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  };

  // ========================================
  // Typed.js Text Animation
  // ========================================
  const initTyped = () => {
    const typedElement = document.querySelector('.typed-text');
    if (typedElement && typeof Typed !== 'undefined') {
      new Typed('.typed-text', {
        strings: [
          'Cybersecurity Solutions',
          'Cloud Infrastructure',
          'DevOps Automation',
          'IT Consulting',
          'Managed Services'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }
  };

  // ========================================
  // Isotope / Masonry Grid (for Portfolio/Case Studies)
  // ========================================
  const initIsotope = () => {
    const grid = document.querySelector('.isotope-grid');
    if (grid && typeof Isotope !== 'undefined') {
      const iso = new Isotope(grid, {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        percentPosition: true,
        fitRows: {
          gutter: 20
        }
      });

      // Filter buttons
      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          const filterValue = this.dataset.filter;
          iso.arrange({ filter: filterValue });
          
          // Update active class
          filterButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
        });
      });
    }
  };

  // ========================================
  // GLightbox / Lightbox Initialization
  // ========================================
  const initLightbox = () => {
    if (typeof GLightbox !== 'undefined') {
      GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });
    }
  };

  // ========================================
  // Countdown Timer (for Special Offers)
  // ========================================
  const initCountdown = () => {
    const countdownElements = document.querySelectorAll('[data-countdown]');
    
    countdownElements.forEach(element => {
      const endDate = new Date(element.dataset.countdown).getTime();
      
      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = endDate - now;
        
        if (distance < 0) {
          element.innerHTML = '<span class="expired">Offer Expired</span>';
          return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        element.innerHTML = `
          <div class="countdown-item">
            <span class="countdown-value">${days}</span>
            <span class="countdown-label">Days</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-value">${hours}</span>
            <span class="countdown-label">Hours</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-value">${minutes}</span>
            <span class="countdown-label">Minutes</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-value">${seconds}</span>
            <span class="countdown-label">Seconds</span>
          </div>
        `;
      };
      
      updateCountdown();
      setInterval(updateCountdown, 1000);
    });
  };

  // ========================================
  // Prism.js Syntax Highlighting
  // ========================================
  const initPrism = () => {
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
  };

  // ========================================
  // Initialize All Plugins
  // ========================================
  const init = () => {
    initAOS();
    initSwipers();
    initCharts();
    initParticles();
    initTyped();
    initIsotope();
    initLightbox();
    initCountdown();
    initPrism();
  };

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Reinitialize AOS on route change (for SPA)
  window.addEventListener('load', () => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  });

})();

