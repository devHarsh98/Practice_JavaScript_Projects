let container = document.querySelector('.container');

document.addEventListener('mousemove', (e) => {
    move(e);
})

function move(e) {
    let x = e.pageX;
    let y = e.pageY;                    // mouse x and y coordinates
    container.style.left = `${x-100}px`;
    
    container.style.top  = `${y-100}px`;

}