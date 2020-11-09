const bigBox = document.querySelector('.bigBox');

createBox();

function createBox() {
    for (let i = 1; i < 49; i++) {
        let box = document.createElement('a');
        box.className = 'box';
        box.innerText = i;
        bigBox.appendChild(box);
    }
}

let flag = false;
let box = document.querySelectorAll('.box');
let myFigure = 1;
let counter = 1;
let computerFigure = randomBox(48);
startGame();

function startGame() {
    box.forEach(function (el) {
        if (!flag) {
            if (el.innerText === '1') {
                el.classList.add('active');
                flag = true;
            }
        }
        if (+el.innerText === computerFigure) {
            el.classList.add('green');
        }
    })
}

function changeKey() {

    window.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowLeft':
                myFigure--;
                break;
            case 'ArrowUp':
                myFigure -= 8;
                break;
            case 'ArrowRight':
                myFigure++;
                break;
            case 'ArrowDown':
                myFigure += 8;
                break;
            default:
                myFigure;
        }
        playGame();
    })
}

changeKey();

function playGame() {
    let span = document.querySelector('.count');
    box.forEach(function (el) {
        el.classList.remove('active');
        if (+el.innerText === myFigure && +el.innerText === computerFigure) {
            el.classList.remove('green');
            computerFigure = randomBox(48);
            if (computerFigure === myFigure) {
                computerFigure = randomBox(48);
            }
            startGame();
            span.innerText = counter;
            counter++;
        }
        if (+el.innerText === myFigure) {
            el.classList.add('active');
        }
    })
}

function randomBox(num) {
    return Math.floor(Math.random() * (num - 1)) + 1;
}

