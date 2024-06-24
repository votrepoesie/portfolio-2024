function newPage(e) {
    let element = document.getElementById(e);
    let id = element.id;
    switch (id) {
        case 'case1':
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
        case 'case2':
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
        case 'case3':
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
        // case 'case4':
        //     window.location.href = 'https://www.modauchicago.com/blog/2022/6/20/in-the-garden';
        //     break;
    };
};