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



// const adviceBtn = document.querySelector('#advice-generator');
// const adviceNumber = document.querySelector('#advice-no');
// const  adviceEl = document.querySelector('#advice');


// const adviceGenerator = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
            
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data)
//             } else if(request.readyState === 4) {
//                 reject("error getting resource")
//             }
//         })

//         request.open('GET', resource);
//         request.send();
//     })
// }


// const getAdvice = async () => {
//     await adviceGenerator(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 200)}`)
//     .then(data => {
//         adviceEl.innerHTML = `“${data.slip.advice}”`;
//         adviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
//     })
//     .catch(err => console.log(err))
    
// }

// getAdvice();

// adviceBtn.addEventListener('click', getAdvice);


