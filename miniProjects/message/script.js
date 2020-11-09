let k = document.querySelector('.k');
let btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    let date = new Date();
    let message;
    let cur = date.getHours();

    if (cur >= 17) {
        message = "It's evening";
    } else if (cur >= 12) {
        message = "It's afternoon";
    } else if (cur >= 0) {
        message = "It's morning";
    } else {
        message = 'Something is wrong';
    }

    k.innerHTML = `<h1>${message}</h1>`;
})