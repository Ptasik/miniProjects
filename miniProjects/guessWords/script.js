{
    const myArray = ["javascript", "website", "html", "document", "course", "new"];
    const message = document.querySelector('.message');
    const input = document.querySelector('.hide');
    const btn = document.querySelector('button');
    let guess = false;
    let guessWord;
    let word;
    let n;

    message.style.fontSize = '24px';

    btn.addEventListener('click', function () {
        if (!guess) {
            word = myArray[randomNumber(myArray)];
            guessWord = createNewWord();
            startNewGame();
            toggleInput();
        } else {
            if (word === input.value) {
                message.innerText = `Correct it was "${word}" it took ${n} guesses`;
                btn.innerText = 'start';
                toggleInput();
                guess = false;
            } else {
                message.innerText = `Wrong ${guessWord}`;
                n++;
            }
        }
    })

    function toggleInput() {
        return input.classList.toggle('hide');
    }

    function startNewGame() {
        message.innerText = guessWord;
        btn.textContent = 'Guess';
        input.value = '';
        guess = true;
        n = 1
    }

    function createNewWord() {
        let newWord = '';
        let numArr = '';

        for (let i = 0; i < word.length; i++) {
            const j = randomNumber(word);
            if (!numArr.includes(String(j))) {
                numArr += j;
                newWord += word[j];
            } else {
                i--;
            }
        }
        return newWord;
    }

    function randomNumber(arr) {
        return Math.floor(Math.random() * arr.length);
    }

}
