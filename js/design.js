// if hovers, text & other element change color 

const case1 = document.getElementById('case1');
const case2 = document.getElementById('case2');
const case3 = document.getElementById('case3');
const case4 = document.getElementById('case4');

case1.addEventListener('mouseenter', () => {
    console.log('Mouse entered the element');
    const text = document.getElementById('case-title1');
    const decor = document.querySelectorAll('.button1');
    const line = document.querySelector('.case-category1');
    console.log(decor);
    text.style.color = 'var(--secondary-color)';
    decor.forEach((element) => {
        element.style.border = '1px solid var(--secondary-color)';
    });
    line.style.borderBottom = '1px solid var(--secondary-color)';
});

case1.addEventListener('mouseleave', () => {
    console.log('Mouse left the element');
    const text = document.getElementById('case-title1');
    const decor = document.querySelectorAll('.button1');
    const line = document.querySelector('.case-category1');
    console.log(decor);
    text.style.color = 'var(--main-color)';
    decor.forEach((element) => {
        element.style.border = '1px solid var(--main-color)';
    });
    line.style.borderBottom = '1px solid var(--main-color)';
});
