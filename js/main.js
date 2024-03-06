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
    let screenWidth = window.innerWidth;
    let draw = document.querySelector('.draw a');
    let design = document.querySelector('.design a');
    let code = document.querySelector('.code a');
    let make = document.querySelector('.make a');

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

function changeHeroTextColor() {
    let target = document.querySelector('#hero-text');
    target.style.color = "rgb("+(Math.random()*255)+", 180, 230)";
    target.style.transition = "0.3s";
    setTimeout(changeHeroTextColor, 500);
}

// changeHeroTextColor();

////////////////////////////////////////////////////

