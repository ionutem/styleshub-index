// JQUERY

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

// FIXED HEADER

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('h-scroll');
    } else {
        header.classList.remove('h-scroll');
    }
});

// NAVIGATION BUTTONS EFFECT

const navLinks = document.querySelectorAll('.nav-link');

function isElementVisible(element) {
    let elementPosition = element.getBoundingClientRect();
    return (elementPosition.top >= 0 && elementPosition.bottom <= window.innerHeight);
}

function updateActiveLink() {
    navLinks.forEach(function (link) {
        let target = document.querySelector(link.getAttribute('href'));
        if (target && isElementVisible(target)) {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

window.addEventListener('load', updateActiveLink);
