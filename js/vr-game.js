// problem - reveals when reaches top viewport

let adjust = {
    origin: 'bottom',
    distance: '20px',
    reset: true,
    viewFactor: 0.2
};

ScrollReveal().reveal('#tags', adjust);
ScrollReveal().reveal('.overview', adjust);
ScrollReveal().reveal('.problem', adjust);
ScrollReveal().reveal('.research-findings', adjust);