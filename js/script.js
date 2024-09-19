document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        const viewportHeight = window.innerHeight;

        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < viewportHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});

const navbar = document.querySelector('.navbar');

// Show navbar when mouse is over it, hide it otherwise
navbar.addEventListener('mouseenter', () => {
    navbar.classList.remove('hidden');
});

navbar.addEventListener('mouseleave', () => {
    navbar.classList.add('hidden');
});

const arrowContainer = document.querySelector('.arrow-container');

// Show arrow when the page loads
window.addEventListener('load', () => {
    arrowContainer.classList.add('visible'); // Trigger fade-in animation
});
