//----------------- BLOB ANIMATION -----------------//

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
    for (let i = 0; i < description.length; i++) {
        let container = document.querySelector('.hero');
        let div = document.createElement('div');
        container.appendChild(div);

        div.style.position = 'absolute';
        div.style.color = 'var(--main-color)';
        div.style.fontSize = '20px';
        div.classList.add('description');
        div.innerText = description[i];
    
        animateDivs(div);
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
        console.log('Overlap w/ hero text');
        div.style.visibility = 'hidden';
    }

    let header = document.querySelector('header');
    let headerRect = header.getBoundingClientRect();

    if (rect.top + rect.height >= headerRect.top && rect.top <= headerRect.top + headerRect.height) {
        console.log('Overlap w/ header');
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
    let divs = document.querySelectorAll('.description');
    divs.forEach(div => {
        div.style.visibility = 'visible';
        positionAdjust(div);
    });
}