let pageView = document.getElementById('pageView');
let price = document.getElementById('price');
let slider = document.querySelector('.slider');

const discountBtn = document.getElementById('checkbox');
var billing = document.getElementById('billing');


setInterval(slider.oninput = function priceComponents(){
    let sliderValue = slider.value;
    
    if (sliderValue <= 1) {
        pageView.innerHTML = 10 + 'K ';
        price.innerHTML = '$' + '6.00';
        billing.innerHTML = "/month";

        if (discountBtn.checked == true){
            price.innerHTML = '$' + '4.5';
            billing.innerHTML = "/year";
        }
    }

    else if (sliderValue <= 2) {
        pageView.innerHTML = 50 + 'K ';
        price.innerHTML = '$' + '12.00';
        billing.innerHTML = "/month";

        if (discountBtn.checked == true){
            price.innerHTML = '$' + '9.00';
            billing.innerHTML = "/year";
        }
    }

    else if (sliderValue <= 3) {
        pageView.innerHTML = 100 + 'K ';
        price.innerHTML = '$' + '16.00';
        billing.innerHTML = "/month";

        if (discountBtn.checked == true){
            price.innerHTML = '$' + '12.00';
            billing.innerHTML = "/year";
        }
    }

    else if (sliderValue <= 4) {
        pageView.innerHTML = 500 + 'K ';
        price.innerHTML = '$' + '24.00';
        billing.innerHTML = "/month";

        if (discountBtn.checked == true){
            price.innerHTML = '$' + '18.00';
            billing.innerHTML = "/year";
        }
    }

    else if (sliderValue <= 5) {
        pageView.innerHTML = 1 + 'M ';
        price.innerHTML = '$' + '36.00';
        billing.innerHTML = "/month";

        if (discountBtn.checked == true){
            price.innerHTML = '$' + '27.00';
            billing.innerHTML = "/year";
        }
    }


}, 100)







let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    darkModeToggle.src = "./images/sun-solid.svg";
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode();
    darkModeToggle.src = "./images/moon-solid.svg";
  }
});