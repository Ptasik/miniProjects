const myCalculator = document.querySelector('.myCal');
const myKeys = [
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['C', '0', '=', '/']
];

const myOper = ['+', '-', '*', '/'];

(function () {
    let myOutput = document.createElement('div');
    myOutput.innerHTML = '0';
    myOutput.classList.add('output');
    myCalculator.appendChild(myOutput);
    createKeyboard()

    function createKeyboard() {
        myKeys.forEach(row => {
            let div = document.createElement('div');
            div.classList.add('row');

            row.forEach(key => {
                let btn = document.createElement('div');
                btn.innerHTML = key;
                btn.classList.add('btn');
                div.appendChild(btn);
                btn.addEventListener('click', btnHit)
            })
            myCalculator.appendChild(div);
        })
    }

    function btnHit() {
        let myCal = myOutput.innerText;
        let myValue = this.innerText;
        if (myCal === '0') {
            myCal = '';
        }

        switch (myValue) {
            case '=':
                myCal = eval(myCal)
                break;
            case 'C':
                myCal = 0;
                break;
            default:
                let lastChar = myCal.substring(myCal.length - 1);
                if (myOper.includes(myValue)) {
                    if (myOper.includes(lastChar)) {
                        myCal = myCal.substring(0, myCal.length - 1);
                    } else {
                        myCal = eval(myCal)
                    }
                }
                myCal += myValue;
        }
        myOutput.innerHTML = myCal;
    }
})();


