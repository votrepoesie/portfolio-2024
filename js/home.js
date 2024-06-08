
// pre-load images
document.addEventListener("DOMContentLoaded", function() {
    var img = new Image();
    img.src = "../images/about-colored.png";
});

//----------------- FONT ANIMATION -----------------//

heroFontChange();

function heroFontChange() {
    let fonts = ['Inter', 'Jersey 15', 'New Rocker', 'Monospace', 'Handlee', 'Verdana', 'Times New Roman', 'Brush Script MT'];
    let target = document.getElementById('hero-text-title');
    // cycle through fonts array
    let i = 0;
    setInterval(() => {
        target.style.fontFamily = fonts[i];
        i++;
        if (i == fonts.length) {
            i = 0;
        }
    }, 300);
}

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

let activate = document.getElementById('activate');
let activateText = document.getElementById('activate-text');
let state = false;

animateDescriptions();

let descriptions = document.querySelectorAll('.description');
descriptions.forEach((description) => {
    description.style.visibility = 'hidden';
});

activate.addEventListener('click', () => {
    if (!state) {
        descriptions.forEach((description) => {
            description.style.visibility = 'visible';
        });
        refreshPosition();
        intervalId = setInterval(refreshPosition, 6000);
        state = true;
        activateText.innerText = 'make it stop';
    } else {
        descriptions.forEach((description) => {
            description.style.visibility = 'hidden';
        });
        state = false;
        activateText.innerText = 'click me click me';
        clearInterval(intervalId);
    }
});

function animateDescriptions() {
    let descriptions = [
        'multimedia artist',
        'cilantro hater',
        'ENFJ-T',
        'creative chaos',
        'cat mom',
        'maximalist',
        'paleontology nerd',
        'art historian',
        'world traveler',
        'houseplant lover',
        'aquarium fanatic',
        'adaptable',
        'resilient',
        'humorous',
        'radical optimist'
    ];

    createDivs(descriptions);
}

function createDivs(descriptions) {

    let positionsX1 = [];
    let positionsX2 = [];
    let positionsY1 = [];
    let positionsY2 = [];

    for (let i = 0; i < descriptions.length; i++) {
        let container = document.querySelector('.hero');
        let div = document.createElement('div');
        div.classList.add('description');
        container.appendChild(div);

        let colors = ['var(--secondary-color)', 'var(--tertiary-color)', 'var(--red)', 'var(--yellow)', 'var(--green)', 'var(--orange)'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        div.style.position = 'absolute';
        div.style.color = randomColor;
        div.style.fontFamily = 'Silkscreen';
        div.style.fontWeight = 400;
        div.style.width = 'auto';

        // description class
        div.classList.add('description');
        div.innerText = descriptions[i];
    
        animateDivs(div);
        positionAdjust(div);

        // WACK-ASS OVERLAP PREVENTION ;-;
        // get div dimensions
        let right = div.getBoundingClientRect().right;
        let bottom = div.getBoundingClientRect().bottom;
        positionsX1.push(right);
        positionsY1.push(bottom);

        let left = div.getBoundingClientRect().left;
        let top = div.getBoundingClientRect().top;
        positionsX2.push(left);
        positionsY2.push(top);

        // check for overlap
        if (i > 0) {
            for (let j = 0; j < i; j++) {
                if (positionsX1[i] >= positionsX2[j] && positionsX2[i] <= positionsX1[j]
                && positionsY1[i] >= positionsY2[j] && positionsY2[i] <= positionsY1[j]) {
                    console.log('overlap w/ other divs');
                    div.style.visibility = 'hidden';
                }
            }
        }
    }
}

function positionAdjust(div) {

    div.style.left = (Math.random() * (85 - 5 + 1) + 5) + '%';
    div.style.top = (Math.random() * (80 - 10 + 1) + 10) + '%';

    if (window.innerWidth < 800) {
        div.style.left = (Math.random() * (80 - 1 + 1) + 1) + '%';
        div.style.top = (Math.random() * (90 - 10 + 1) + 10) + '%';
    }

    // div dimension
    let rect = div.getBoundingClientRect();

    // hero text dimension
    let hero = document.getElementById('hero-text');
    let heroRect = hero.getBoundingClientRect();
    
    // debug
    // console.log(rect);
    // console.log(heroRect);

    // current issue: div position is absolute, so top has negative values
    // collision detection occasionally fails due to this?? not sure

    if (rect.left + rect.width >= heroRect.left && rect.left <= heroRect.left + heroRect.width && rect.top + rect.height >= heroRect.top && rect.top <= heroRect.top + heroRect.height) {
        console.log( div + ' overlaps w/ hero text');
        div.style.visibility = 'hidden';
    }

    let header = document.querySelector('special-header');
    let headerRect = header.getBoundingClientRect();

    if (rect.top + rect.height >= headerRect.top && rect.top <= headerRect.top + headerRect.height) {
        // console.log('overlap w/ header');
        div.style.visibility = 'hidden';
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
    let positionsX1 = [];
    let positionsX2 = [];
    let positionsY1 = [];
    let positionsY2 = [];

    let divs = document.querySelectorAll('.description');

    // Use forEach loop to iterate over divs
    divs.forEach((div, i) => {
        div.style.visibility = 'visible';
        positionAdjust(div);

        // get div dimensions
        let right = div.getBoundingClientRect().right;
        let bottom = div.getBoundingClientRect().bottom;
        positionsX1.push(right); // left + width
        positionsY1.push(bottom); // top + height

        let left = div.getBoundingClientRect().left;
        let top = div.getBoundingClientRect().top;
        positionsX2.push(left); // left
        positionsY2.push(top); // top

        // check for overlap
        if (i > 0) {
            for (let j = 0; j < i; j++) {
                if (positionsX1[i] >= positionsX2[j] && positionsX2[i] <= positionsX1[j] &&
                    positionsY1[i] >= positionsY2[j] && positionsY2[i] <= positionsY1[j]) {
                    console.log('overlap w/ other divs');
                    div.style.visibility = 'hidden';
                }
            }
        }
    });
}

//----------------- MOBILE ADJUST -----------------//

mobileContentAdjust();

function mobileContentAdjust() {
    if (window.innerWidth < 800) {
        let blob = document.querySelector('#blob');
        blob.style.display = 'none';
    }
}
