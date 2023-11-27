function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}

// Set up the Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Target the cards and observe each one
document.querySelectorAll('.about .clothes-box .clothes-card').forEach(card => {
    observer.observe(card);
});

// Add scroll event listener to handle initial check
document.addEventListener('scroll', () => {
    document.querySelectorAll('.about .clothes-box .clothes-card').forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('is-visible');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isInViewport(footer)) {
            footer.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
});