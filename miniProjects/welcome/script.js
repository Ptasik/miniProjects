let btn = document.querySelector('.btn');
let k = document.querySelector('.k');

btn.addEventListener("click", () => {
    let inp = document.querySelector('input');
    k.innerHTML = `<h1>Hello welcome, ${inp.value}</h1>`;
})