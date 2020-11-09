let stars = document.querySelectorAll('.star');
let output = document.querySelector('.output');

for (let i = 0; i < stars.length; i++) {
    stars[i].starValue = i + 1;
    ['mouseover', 'mouseout', 'click'].forEach(function (e) {
        stars[i].addEventListener(e, starRate);
    })
}

function starRate(e) {
    let t = e.type;
    let starValue = this.starValue;
    if (t === 'click') {
        if (starValue > 1) {
            output.innerHTML = `Your rated this ${starValue} stars`;
        } else if (starValue === 1) {
            output.innerHTML = `Your rated this 1 star`;
        }
    }

    stars.forEach(function (ele, ind) {
        if (t === 'click') {
            if (ind < starValue) {
                ele.classList.add('orange');
            } else {
                ele.classList.remove('orange');
            }
        }

        if (t === 'mouseover') {
            if (ind < starValue) {
                ele.classList.add('yellow');
            } else {
                ele.classList.remove('yellow');
            }
        } else {
            ele.classList.remove('yellow');

        }
    })
}