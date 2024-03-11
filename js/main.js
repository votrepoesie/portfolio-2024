//----------------- CUSTOM HTML -----------------//

class SpecialHeader extends HTMLElement {
    connectedCallback() {

        if (window.location.pathname.includes('index.html')) {
            this.innerHTML = `
                <nav class="navbar">
                
                    <a href="index.html" class="nav-branding">vivian r. li</a>
                
                    <ul class="nav-links">
                        <li class="nav-item draw"><a href="draw.html">I draw,</a></li>
                        <li class="nav-item design"><a href="design.html">design,</a></li>
                        <li class="nav-item code"><a href="code.html">code,</a></li>
                        <li class="nav-item make"><a href="#">and make things.</a></li>
                    </ul>

                    <div class="hamburger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </nav>
            `
        } else {
            this.innerHTML = `
                <nav class="navbar">
                
                    <a href="../index.html" class="nav-branding">vivian r. li</a>
                
                    <ul class="nav-links">
                        <li class="nav-item draw"><a href="draw.html">I draw,</a></li>
                        <li class="nav-item design"><a href="design.html">design,</a></li>
                        <li class="nav-item code"><a href="code.html">code,</a></li>
                        <li class="nav-item make"><a href="make-things.html">and make things.</a></li>
                    </ul>

                    <div class="hamburger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </nav>
            `
        }
    }
}

customElements.define('special-header', SpecialHeader);

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



