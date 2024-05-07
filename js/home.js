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
        state = true;
        activateText.innerText = 'make it stop';
    } else {
        descriptions.forEach((description) => {
            description.style.visibility = 'hidden';
        });
        state = false;
        activateText.innerText = 'click me click me';
    }
});


// activateFloatingText();

// function activateFloatingText() {
//     let activate = document.getElementById('activate');
//     let state = 1;

//     if (state == 1) {
//         activate.addEventListener('click', () => {
//             animateDescriptions();
//             setInterval(refreshPosition, 5000);
//         });
//         state = 0;
//         console.log(state);
//     } else {
//         console.log(state);
//         state = 1;
//     }
// }

function animateDescriptions() {
    let descriptions = [
        'multimedia artist',
        'cilantro hater',
        'ENFJ-T',
        'cat mom',
        'paleontology nerd',
        'art historian',
        'world traveler',
        'botanist',
        'goes to every zoo & aquarium',
        'tattoos <3',
        'A24 stan',
        'listens to hyperpop & 60s ballads'
    ];

    createDivs(descriptions);
}

function createDivs(description) {

    let positionsX1 = [];
    let positionsX2 = [];
    let positionsY1 = [];
    let positionsY2 = [];

    for (let i = 0; i < description.length; i++) {
        let container = document.querySelector('.hero');
        let div = document.createElement('div');
        container.appendChild(div);

        let colors = ['var(--secondary-color)', 'var(--tertiary-color)', 'var(--red)', 'var(--yellow)', 'var(--green)', 'var(--orange)'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        div.style.position = 'absolute';
        div.style.color = randomColor;

        //TODO!! listen for resize event, and the random placement is a little wack on mobile
        if (window.innerWidth < 800) {
            div.style.fontSize = '15px';
        } else {
            div.style.fontSize = '20px';
        }
        div.classList.add('description');
        div.innerText = description[i];
    
        animateDivs(div);
        positionAdjust(div);

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
                    // console.log('overlap w/ other divs');
                    div.style.visibility = 'hidden';
                }
            }
        }
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
        // console.log('overlap w/ hero text');
        div.style.visibility = 'hidden';
    }

    let header = document.querySelector('special-header');
    let headerRect = header.getBoundingClientRect();

    if (rect.top + rect.height >= headerRect.top && rect.top <= headerRect.top + headerRect.height) {
        // console.log('overlap w/ header');
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
