{
    const currencyValue = document.querySelector(".js-value");
    const exchangeRate = document.querySelector(".js-rate");
    const formElement = document.querySelector(".js-form");
    const currencyAmount = document.querySelector(".js-amount");
    const resetAmount = document.querySelector('.js-reset');


    formElement.addEventListener("input", () => {
        const amount = +currencyValue.value;
        const rate = +exchangeRate.value;
        const zlotyAmount = amount * rate;
        currencyAmount.innerText = zlotyAmount.toFixed(2);
    });

    resetAmount.addEventListener("click", () => {
        currencyAmount.innerText = 0.00;
    });
    resetAmount = document.querySelector(".js-reset");
}