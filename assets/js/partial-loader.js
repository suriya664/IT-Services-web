/**
 * Universal Partial Loader
 * Loads header, footer, and modals consistently across all pages
 */
(function() {
  'use strict';

  // Function to load partials with error handling
  function loadPartial(url, elementId) {
    const element = document.getElementById(elementId);
    
    if (!element) {
      console.warn(`Element ${elementId} not found`);
      return;
    }
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        element.innerHTML = data;
        
        // Reinitialize components after loading
        if (typeof AOS !== 'undefined') {
          AOS.init();
        }
        
        // Reinitialize tooltips if Bootstrap is loaded
        if (typeof bootstrap !== 'undefined') {
          const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
          tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
        }
      })
      .catch(error => {
        console.error(`Error loading ${url}:`, error);
        // Only show warning if the element is truly empty AND we're not loading from file://
        if (element && element.children.length === 0 && window.location.protocol !== 'file:') {
          element.innerHTML = `<div class="alert alert-warning"><strong>Note:</strong> Page requires a web server to load components properly.</div>`;
        }
      });
  }

  // Function to determine correct path based on page location
  function getPartialPath() {
    const currentPath = window.location.pathname;
    
    // Check if we're in a subdirectory
    if (currentPath.includes('/pages/docs/')) {
      return '../../../partials/';
    } else if (currentPath.includes('/docs/')) {
      return '../../partials/';
    } else if (currentPath.includes('/pages/')) {
      return '../partials/';
    } else {
      return 'partials/';
    }
  }

  // Load all partials on DOM ready
  function initPartials() {
    const partialPath = getPartialPath();
    
    // Load header
    loadPartial(`${partialPath}header.html`, 'header-placeholder');
    
    // Load footer
    loadPartial(`${partialPath}footer.html`, 'footer-placeholder');
    
    // Load modals
    loadPartial(`${partialPath}modals.html`, 'modals-placeholder');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPartials);
  } else {
    initPartials();
  }
})();

