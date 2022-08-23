const adviceBtn = document.querySelector('#advice-generator');
const adviceNumber = document.querySelector('#advice-no');
const  adviceEl = document.querySelector('#advice');


function getData() {

    fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 200)}`)
        .then((data) => data.json())
        .then((data) => {

            adviceEl.innerHTML = `“${data.slip.advice}”`;
            adviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
            
        }
        );
}
getData();

adviceBtn.addEventListener('click', getData);