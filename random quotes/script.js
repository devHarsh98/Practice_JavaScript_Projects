let button = document.querySelector('button');
let output = document.querySelector('.output');

let quotes = [
    "The purpose of our lives is to be happy. — Dalai Lama",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "Get busy living or get busy dying. — Stephen King",
    "You only live once, but if you do it right, once is enough. — Mae West",
    "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.– Henry Ford"
];

button.addEventListener('click', () => {
    
    let random = Math.floor(Math.random()*quotes.length);
    output.textContent = quotes[random];
})