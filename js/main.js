
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

animateDescriptions();

function animateDescriptions() {
    let descriptions = [
        'multimedia artist',
        'very fun to be around',
        'cilantro hater',
        'ENFJ-T',
        'cat mom',
        'introverted extrovert',
        'zoology & paleontology nerd',
        'sci-fi enthusiast',
        'art historian',
        'world traveler'
    ];

    createDivs(descriptions);
}

function createDivs(description) {
    for (let i = 0; i < description.length; i++) {
        let container = document.querySelector('.hero');
        let div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.color = 'var(--main-color)';
        div.style.fontSize = '20px';
        div.innerText = description[i];
        container.appendChild(div);

        positionAdjust(div);
    }
}

function positionAdjust(div) {
    div.style.left = Math.random() * 85 + '%';
    div.style.top = Math.random() * 90 + '%';

    let rect = div.getBoundingClientRect();
    let hero = document.getElementById('hero-text');
    let heroRect = hero.getBoundingClientRect();

    if (rect.left + rect.width >= heroRect.left && rect.left <= heroRect.left + heroRect.width
    && rect.top + rect.height >= heroRect.top && rect.top <= heroRect.top + heroRect.height) {
        div.style.visibility = 'hidden';
    }

    let header = document.querySelector('header');
    let headerRect = header.getBoundingClientRect();

    if (rect.top + rect.height >= headerRect.top && rect.top <= headerRect.top + headerRect.height) {
        console.log('Overlapping');
        div.style.top = 100 + Math.random() * 500 + 'px';
    }
}

