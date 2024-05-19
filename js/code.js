//----------------- DIRECT TO SUBPAGE -----------------//

function newPage(e) {
    let element = document.getElementById(e);
    let id = element.id;
    switch (id) {
        case 'case1':
            window.location.href = 'https://vivianli0.github.io/pui-final/';
            break;
        case 'case2':
            window.location.href = 'https://votrepoesie.github.io/hungry-bear/';
            // Swal.fire("This one is under construction!");
            break;
        case 'case3':
            window.location.href = 'https://votrepoesie.github.io/non-objective-composition/';
            break;
        case 'case4':
            window.location.href = 'https://votrepoesie.github.io/music-instrument/';
            break;
    }
}
