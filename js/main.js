////////////////////////////////////////////////////

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

////////////////////////////////////////////////////

function changeHamburgerContent() {
    const screenWidth = window.innerWidth;
    const draw = document.querySelector('.draw a');
    const design = document.querySelector('.design a');
    const code = document.querySelector('.code a');
    const make = document.querySelector('.make a');

    if (screenWidth <= 768) {
        draw.textContent = 'draw';
        design.textContent = 'design';
        code.textContent = 'code';
        make.textContent = 'make';
    } else {
        draw.textContent = 'I draw,';
        design.textContent = 'design,';
        code.textContent = 'code,';
        make.textContent = 'and make things.';
    }
}

//when page loads
changeHamburgerContent();

//when page is resized
window.addEventListener('resize', changeHamburgerContent);

////////////////////////////////////////////////////

// not this taking me 3 full hours ... over a simple bug
const blob1 = document.getElementById('blob-1');
const blob2 = document.getElementById('blob-2');
const blob3 = document.getElementById('blob-3');
const blob4 = document.getElementById('blob-4');
const blob5 = document.getElementById('blob-5');
const blob6 = document.getElementById('blob-6');

anime({
    targets: blob1,
    d:[
        // { value: blob1.getAttribute('d') }, this is the culprit
        { value: blob2.getAttribute('d') },
        { value: blob3.getAttribute('d') },
        { value: blob4.getAttribute('d') },
        { value: blob5.getAttribute('d') },
        { value: blob1.getAttribute('d') }
    ],
    duration: 5000, 
    easing: 'easeInOutQuad', 
    loop: true
});

////////////////////////////////////////////////////

