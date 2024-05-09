//----------------- LOADING SCREEN -----------------//

window.addEventListener('load', () => {
    const loader = document.getElementById('load');
    // setTimeout(() => {
    //     loader.style.display = 'none';
    // }, 500); 
    loader.style.display = 'none';
    console.log('Page is ready to view :)');
});

//----------------- CUSTOM HTML -----------------//

class SpecialHeader extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <nav class="navbar">
                
                <a href="index.html" class="nav-branding">vivian r. li</a>
                
                <ul class="nav-links">
                    <li class="nav-item draw"><a href="draw.html"></a></li>
                    <li class="nav-item design"><a href="design.html"></a></li>
                    <li class="nav-item code"><a href="code.html"></a></li>
                    
                </ul>

                <div class="hamburger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </nav>
        `;
    }
}

customElements.define('special-header', SpecialHeader);

class SpecialFooter extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="footer">
                <p>One must still have chaos in oneself to be able to give birth to a dancing star.</p>
                <p class="rights">© 2024 vivian r. li</p>
            </div>
        `;
    }
}

customElements.define('special-footer', SpecialFooter);

//----------------- NAVBAR -----------------//

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

//----------------- HAMBURGER -----------------//

function changeHamburgerContent() {
    const screenWidth = window.innerWidth;
    const draw = document.querySelector('.draw a');
    const design = document.querySelector('.design a');
    const code = document.querySelector('.code a');

    if (screenWidth <= 768) {
        draw.textContent = 'draw';
        design.textContent = 'design';
        code.textContent = 'code';
    } else {
        draw.textContent = 'I draw,';
        design.textContent = 'design,';
        code.textContent = 'and sometimes code things.';
    }
}

//when page loads
changeHamburgerContent();

//when page is resized
window.addEventListener('resize', changeHamburgerContent);


//----------------- DESIGN - DIRECT TO SUBPAGE -----------------//

function newPage(e) {
    let element = document.getElementById(e);
    let id = element.id;
    switch (id) {
        case 'case1':
            window.location.href = 'vr-game.html';
            break;
        case 'case2':
            window.location.href = 'chance-encounter.html';
            break;
        case 'case3':
            window.location.href = 'museum.html';
            break;
        case 'case4':
            window.location.href = 'airport.html';
            break;
    }
}

//----------------- CUSTOM CURSOR -----------------//
// reference: https://codepen.io/tamm/pen/dyVvgx

// const follower = document.getElementById('follower');

// function mouseX(e) {
//     return e.clientX;
// }

// function mouseY(e) {
//     return e.clientY;
// }

// function positionElement(e) {
//     const mouse = {
//         x: mouseX(e),
//         y: mouseY(e)
//     };
//     follower.style.left = mouse.x + 'px';
//     follower.style.top = mouse.y + 'px';
// }

// let timer = false;
// window.onmousemove = function initiate(e) {
//     const _event = event;
//     timer = setTimeout(function () {
//         positionElement(_event);
//     }, 1);
// };