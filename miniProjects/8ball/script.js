const btn = document.querySelector('button');

 btn.addEventListener('click', function (){
     const answerArray = ["It will work","Maybe maybe not","Probably Not","Highly Likely","I don't know"];
     const div = document.querySelector('.message');
     const input = document.querySelector('input');

     div.textContent = `${input.value} ${answerArray[Math.floor(Math.random() * answerArray.length)]}`;
     input.value = '';

 });