let btn = document.querySelector('.btn');
let text = document.querySelector('.text');

let n = 1;
btn.addEventListener('click', function (){
    text.innerHTML = 'You clicked this ' + n + ' times';
    n++;
})