let score = document.querySelector('.score');
let message = document.querySelector('.message');
let btn = document.querySelectorAll('.btn');

let count = [0, 0];

let gameArray = ['Rock', 'Paper', 'Scissors'];

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (e) {
        let player = e.target.innerText;
        let computer = gameArray[Math.floor(Math.random() * gameArray.length)];
        let result = check(player, computer);
        if (result === 'Player') {
            result += ' wins!';
            count[0]++;
        } else if(result === 'Computer'){
            result += ' wins!';
            count[1]++;
        } else {
            result += 'result in a tie match'
        }
        score.innerHTML = `Player[${count[0]}] Computer[${count[1]}]`
        message.innerHTML = `${player} VS ${computer} <h4 style="margin: 0">${result}</h4>`
    })
}

function check(pl, co) {
    if (pl === co) {
        return 'Draw';
    }

    if (pl === 'Rock') {
        if (co === 'Paper') {
            return "Computer";
        } else {
            return 'Player';
        }
    }

    if (pl === 'Paper') {
        if (co === 'Scissors') {
            return "Computer";
        } else {
            return 'Player';
        }
    }

    if (pl === 'Scissors') {
        if (co === 'Rock') {
            return "Computer";
        } else {
            return 'Player';
        }
    }
}