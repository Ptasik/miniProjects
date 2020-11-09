let btn = document.querySelector('button');
let output1 = document.querySelector('.output1');
let output2 = document.querySelector('.output2');
let message = document.querySelector('.message');

let myWords = ['javascript', 'course', 'function', 'style', 'document', 'window', 'const'];
let player = {};

btn.addEventListener('click', function () {
    output1.innerHTML = '';
    output2.innerHTML = '';
    if (myWords.length > 0) {
        btn.style.display = 'none';
        myWords.sort(function () {
            return .5 * Math.random();
        })

        let theWord = myWords.shift();
        player.solution = theWord.split('');
        buildBoard();
    } else {
        message.style.color = 'black';
        message.innerText = 'No more words'
    }
})

function buildBoard() {
    player.solution.forEach(function (letter) {
        let div = document.createElement('div');
        div.classList.add('letter2');
        div.innerText = '_';
        div.myLetter = letter;
        output2.appendChild(div);
    })

    let solutionLetter = document.querySelectorAll('.letter2');
    for (let i = 0; i < 26; i++) {
        let temp = String.fromCharCode(65 + i);
        let div = document.createElement('div');
        div.classList.add('letter');
        div.myLetter = temp;

        let handler = function (e) {
            div.removeEventListener('click', handler);
            div.classList.add('done');

            let counter = 0;
            let guess = 0;
            let mes;
            solutionLetter.forEach(function (letter) {
                if (letter.innerHTML !== '_') {
                    counter++;
                }

                if (letter.myLetter.toUpperCase() === temp) {
                    letter.innerHTML = temp;
                    guess++;
                }
            })

            if (guess > 0) {
                let mul = guess > 1 ? 'times' : 'time';
                mes = `you found ${temp} letter ${guess} ${mul}`;
                message.style.color = 'green';
            } else {
                message.style.color = 'red';
                mes = 'Not found'
            }

            let lettersLeft = solutionLetter.length - (guess + counter);
            message.innerHTML = mes + "<br>" + lettersLeft + " letters left";
            if (lettersLeft < 1) {
                btn.style.display = 'block';
            }
        };

        div.addEventListener('click', handler);
        div.innerText = temp;
        output1.appendChild(div);
    }
}