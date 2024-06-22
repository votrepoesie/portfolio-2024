//----------------- DIRECT TO SUBPAGE -----------------//

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
        case 'case5':
            window.location.href = 'visual-design.html';
            break;
        case 'case3':
            // window.location.href = 'museum.html';
            Swal.fire({
                icon: 'info',
                iconColor: 'var(--secondary-color)',
                background: 'black',
                title: 'This one is under construction!',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'my-custom-button',
                    title: 'my-custom-title',
                    popup: 'my-custom-container'
                }
            });
            break;
        case 'case4':
            // window.location.href = 'airport.html';
            Swal.fire({
                icon: 'info',
                iconColor: 'var(--secondary-color)',
                background: 'black',
                title: 'This one is under construction!',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'my-custom-button',
                    title: 'my-custom-title',
                    popup: 'my-custom-container'
                }
            });
            break;
    }
}
