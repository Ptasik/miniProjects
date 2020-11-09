let message = document.querySelector('.k');
let btn = document.querySelectorAll('.btn');

let coinArray = ['Header', 'Tail'];
let count = [0, 0]
let output;
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (e) {
        let playerGuess = e.target.innerText;
        console.log(playerGuess);
        let computerGuess = coinArray[Math.floor(Math.random() * coinArray.length)];
        console.log(computerGuess);
        message.innerHTML = "Computer Selected " + computerGuess + "<br>";
        if (playerGuess === computerGuess) {
            output = "Player Wins";
            count[0]++;
        } else {
            output = "Computer Wins";
            count[1]++;
        }
        message.innerHTML += output + "<br>Player " + count[0] + " Computer " + count[1];
    });
}
