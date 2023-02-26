let currencyValue = document.querySelector(".js-value");
let exchangeRate = document.querySelector(".js-rate");
let formElement = document.querySelector(".js-form");
let currencyAmount = document.querySelector(".js-amount");
let resetAmount = document.querySelector('.js-reset');



formElement.addEventListener("input", () => {
    let amount = +currencyValue.value;
    let rate = +exchangeRate.value;
    let zlotyAmount = amount * rate;
    currencyAmount.innerText = zlotyAmount.toFixed(2);
});

resetAmount.addEventListener("click" , () => {
    currencyAmount.innerText = 0.00 ;
});