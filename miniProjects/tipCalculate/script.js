let btn = document.querySelector('.btn');
let k = document.querySelector('.k');

btn.addEventListener('click', function () {
    let tip = document.querySelector('input');
    let numTip = (tip.value * 0.15).toFixed(2);
    k.innerHTML = `<h1>You should tip $${numTip} on $${tip.value}</h1>`;
})