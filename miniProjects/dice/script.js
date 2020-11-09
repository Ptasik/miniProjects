let btn = document.querySelector('.btn');
let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');
let output = document.querySelector('.output');

btn.addEventListener('click', function () {
    let rolls = [roll(6), roll(6)];
    let temp;
    if (rolls[0] === rolls[1]) {
        temp = "It was a draw";
    } else if (rolls[0] > rolls[1]) {
        temp = 'Player 1 wins!'
    } else if (rolls[0] < rolls[1]) {
        temp = 'Player 2 wins!'
    }
    output.innerHTML = temp;
    player1.innerHTML = rolls[0];
    player2.innerHTML = rolls[1];
    console.log(rolls);
})

function roll(num) {
    return `${5} &#${9855 + Math.floor(Math.random() * num) + 1};`;
}
