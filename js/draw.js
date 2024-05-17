// alternate: https://www.youtube.com/watch?v=sHG3Sf6XN9g&ab_channel=GreatStack
// current: https://codepen.io/vhanla/pen/PxjZvj 

const gallery = document.querySelector('#gallery');

// get value of css property
function getVal(element, style) {
    let result = parseInt(window.getComputedStyle(element).getPropertyValue(style));
    return result;
}

// get height of the images
function getHeight(item) {
    let result = item.querySelector('.content').getBoundingClientRect().height;
    return result;
}

function resizeAll() {
    const altura = getVal(gallery, 'grid-auto-rows');
    const gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function(item) {
        let el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
}

window.addEventListener('load', resizeAll);
window.addEventListener('resize', resizeAll);

gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});
