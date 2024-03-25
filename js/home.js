//----------------- BLOB ANIMATION -----------------//

const blob1 = document.getElementById('blob-1');
const blob2 = document.getElementById('blob-2');
const blob3 = document.getElementById('blob-3');
const blob4 = document.getElementById('blob-4');
const blob5 = document.getElementById('blob-5');
const blob6 = document.getElementById('blob-6');

anime({
    targets: blob1,
    d:[
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

//----------------- FLOATING TEXT -----------------//

animateDescriptions();
setInterval(refreshPosition, 5000);

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

    let positionsTop = [];
    let positionsLeft = [];

    for (let i = 0; i < description.length; i++) {
        let container = document.querySelector('.hero');
        let div = document.createElement('div');
        container.appendChild(div);

        let colors = ['var(--secondary-color)', 'var(--tertiary-color)', 'var(--red)', 'var(--yellow)', 'var(--green)', 'var(--orange)'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        div.style.position = 'absolute';
        div.style.color = randomColor;
        div.style.fontSize = '25px';
        div.classList.add('description');
        div.innerText = description[i];
    
        animateDivs(div);
        positionAdjust(div);
        
        // check overlap 
        positionsTop.push(div.style.top);
        positionsLeft.push(div.style.left);
    }

    console.log(positionsTop, positionsLeft);
}

function positionAdjust(div) {
    div.style.left = Math.random() * 85 + '%';
    div.style.top = Math.random() * 90 + '%';

    let rect = div.getBoundingClientRect();
    let hero = document.getElementById('hero-text');
    let heroRect = hero.getBoundingClientRect();

    if (rect.left + rect.width >= heroRect.left && rect.left <= heroRect.left + heroRect.width
    && rect.top + rect.height >= heroRect.top && rect.top <= heroRect.top + heroRect.height) {
        // console.log('Overlap w/ hero text');
        div.style.visibility = 'hidden';
    }

    let header = document.querySelector('special-header');
    let headerRect = header.getBoundingClientRect();

    if (rect.top + rect.height >= headerRect.top && rect.top <= headerRect.top + headerRect.height) {
        // console.log('Overlap w/ header');
        div.style.top = 100 + Math.random() * 500 + 'px';
    }
}

function animateDivs(div) {
    anime({
        targets: div,
        opacity: 0,
        duration: 1000 + Math.random() * 3000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true, 
    })
}

function refreshPosition() {

    let positionsTop = [];
    let positionsLeft = [];

    let divs = document.querySelectorAll('.description');
    divs.forEach(div => {
        div.style.visibility = 'visible';
        positionAdjust(div);

        positionsTop.push(div.style.top);
        positionsLeft.push(div.style.left);
    });

    console.log(positionsTop, positionsLeft);
}