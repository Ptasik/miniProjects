{
    const game = document.querySelector('.game');
    const message = document.querySelector('.message');
    const btn = document.querySelector('button');

    let gamePlay = false;
    let arr = [];
    let createCombo = () => {
        for (let i = 0; i < 6; i++) {
            arr.push(String(Math.floor(Math.random() * 10)));
        }
    }

    createCombo();


    let n = 0;

    btn.addEventListener('click', function () {
        if (!gamePlay) {
            gamePlay = true;
            btn.innerHTML = 'Check combo';
            message.innerText = 'Guess the combo';
            game.innerHTML = "";
            createInput(6)
        } else {
            n++;
            let inputAll = document.querySelectorAll('input');
            let checkArr = [];
            let inpVal = [];
            message.innerText = `Guesses ${n}`;
            inputAll.forEach(num => {
                checkArr.push(num);
                inpVal.push(num.value)
            });
            checkNumber(arr, inpVal, checkArr);
            if (arr.join('') === inpVal.join('')) {
                btn.innerHTML = 'Restart Game';
                message.innerText = `You solved the combo in ${n} guesses`;
                gamePlay = false;
            }
        }
    })

    function checkNumber(num1, num2, inp) {
        for (let k = 0; k < num1.length; k++) {
            inp[k].style.backgroundColor = (num1[k] < num2[k]) ? 'red' : 'blue';
            if (num1[k] === num2[k]) {
                inp[k].style.backgroundColor = 'green';
            }
            inp[k].style.color = '#fff';
        }
    }

    function createInput(n) {
        for (let i = 0; i < n; i++) {
            let inp = document.createElement('input');
            inp.setAttribute('type', 'number');
            inp.max = 9;
            inp.min = 0;
            inp.value = '0';
            inp.style.background = '#fff';
            inp.style.color = '#000';
            game.appendChild(inp);
        }
    }
}
