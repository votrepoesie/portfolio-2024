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


// what if only shows 6 divs each time??

animateDescriptions();
setInterval(refreshPosition, 5000);

function animateDescriptions() {
    let descriptions = [
        'multimedia artist',
        'very fun to be around',
        'cilantro hater',
        'ENFJ-T',
        'cat mom',
        'extroverted introvert',
        'paleontology nerd',
        'sci-fi enthusiast',
        'art historian',
        'world traveler'
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
        div.style.fontSize = '25px';
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
                    console.log('overlap w/ other divs');
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
        console.log('overlap w/ hero text');
        div.style.visibility = 'hidden';
    }

    let header = document.querySelector('special-header');
    let headerRect = header.getBoundingClientRect();

    if (rect.top + rect.height >= headerRect.top && rect.top <= headerRect.top + headerRect.height) {
        console.log('overlap w/ header');
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
