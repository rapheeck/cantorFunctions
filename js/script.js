{
    const resetAmount = () => {
        const currencyAmount = document.querySelector(".js-amount");
        currencyAmount.innerText = 0.00;
    };

    const onChange = () => {
        const currencyValue = document.querySelector(".js-value");
        const exchangeRate = document.querySelector(".js-rate");
        const currencyAmount = document.querySelector(".js-amount");
        const zlotyAmount = +currencyValue.value * +exchangeRate.value;
        currencyAmount.innerText = zlotyAmount.toFixed(2)
        return zlotyAmount;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const resetFinish = document.querySelector('.js-reset');
        formElement.addEventListener("input", onChange);
        resetFinish.addEventListener("click", resetAmount);
    };

    init();
}