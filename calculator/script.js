let input = document.getElementById('input');
let btn = document.querySelectorAll('button');

btn.forEach((ele) =>{
    ele.addEventListener('click', (e) => {
        if(e.target.textContent === 'C') {
            input.innerText = '';
       }
        else if(e.target.textContent === 'del') {
            input.innerText = input.innerText.slice(0,-1);
       }
        else if(e.target.textContent === '=') {
            
            input.innerText = eval(input.innerText);   
            // The eval() method evaluates or executes an argument.
       }
        else {
            input.textContent += e.target.textContent;
       }
       input.scrollLeft = input.scrollWidth;
    })
})