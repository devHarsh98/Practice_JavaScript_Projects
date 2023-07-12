let dots = document.querySelector('.dots');
let upperContainer = document.querySelector('.upper-container');
let navI = document.querySelector('.nav-i');
let logoContainer = document.querySelector('.logo-container');

dots.addEventListener('click', () => {
    upperContainer.style.height = '250px';
    upperContainer.style.visibility = 'visible';
    logoContainer.style.height = '0';
})

navI.addEventListener('click', () => {
    
    upperContainer.style.height = '0';
    upperContainer.style.visibility = 'hidden';
    logoContainer.style.height = '80px';
    
    logoContainer.style.visibility = 'visible';
}) 