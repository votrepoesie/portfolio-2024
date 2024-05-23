adjustDivHeight();
visualViewport.addEventListener('resize', adjustDivHeight);
window.addEventListener('resize', adjustDivHeight);

function adjustDivHeight() {
    let div = document.querySelector('.composition-1-left');
    let div2 = document.querySelector('.composition-1-right');
    div2.style.height = 'auto';
    // console.log(div);
    //get height of div
    let divHeight = div.clientHeight;
    // console.log(divHeight);
    //set height of div2
    div2.style.height = divHeight + 'px';
}


