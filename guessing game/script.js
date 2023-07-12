let input = document.querySelector('input');
let btn = document.querySelector('.btn');
let output = document.querySelector('.output');
let guess = document.querySelector('.guess');

let random = Math.round(Math.random() * (100-1) + 1);
let guessCount = 0;

btn.addEventListener('click', () => {
    guessGame();
})


function guessGame() {
   if(input.value < 1 || input.value > 100 || isNaN(input.value)) {
        output.textContent = 'Enter between 1 to 100';
   } 
   else {
        guessCount++;
        guess.innerHTML = `No. of guesses : ${guessCount}`; 
        if(input.value > random) {
            output.textContent = 'try something less';
        }
        else if(input.value < random) {
            output.textContent = 'try something high';
        }
        else {
            output.textContent = `congratulations! You guessed the correct number in ${guessCount} guesses`;
            resetFun();
        }
   }
}

function resetFun() {
    setTimeout(()=> {
        input.value = '';
        output.textContent = '';
        guessCount = 0;
        guess.innerHTML = `No. of guess : ${guessCount}`;
        random = Math.round(Math.random() * (100-1) + 1);
    }, 5000)
}