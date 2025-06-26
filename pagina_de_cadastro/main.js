document.addEventListener('DOMContentLoaded', function() {
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopButton = document.getElementById('btn-back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Search functionality toggle
    const searchButton = document.querySelector('.search-box button');
    let searchInput = null;
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            // Check if search input exists
            if (!searchInput) {
                // Create search input
                searchInput = document.createElement('input');
                searchInput.type = 'text';
                searchInput.className = 'form-control search-input animate__animated animate__fadeIn';
                searchInput.placeholder = 'Títulos, pessoas, gêneros';
                
                // Insert before the search button
                searchButton.parentNode.insertBefore(searchInput, searchButton);
                searchInput.focus();
            } else {
                // Toggle visibility
                if (getComputedStyle(searchInput).display === 'none') {
                    searchInput.style.display = 'block';
                    searchInput.focus();
                } else {
                    searchInput.style.display = 'none';
                }
            }
        });
    }

    // Tooltip initialization (if using Bootstrap's tooltip component)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Mobile navigation enhancement
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            document.body.classList.toggle('nav-open');
        });
    }
});

// Simulated content loading (like Netflix's dynamic content loading)
function loadMoreContent(category) {
    console.log(`Loading more content for category: ${category}`);
    // This would be where you'd make an AJAX call to load more content
    // For a demonstration, we'll just log the action
}