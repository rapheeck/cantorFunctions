{
    const resetAmount = () => {
        resetAmount = document.querySelector(".js-reset");
        currencyAmount.innerText = 0.00;
    };

    const onChange = () => {
        const currencyValue = document.querySelector(".js-value");
        const exchangeRate = document.querySelector(".js-rate");
        const currencyAmount = document.querySelector(".js-amount");
        const zlotyAmount = +currencyValue.value * +exchangeRate.value;
        return currencyAmount === zlotyAmount.toFixed(2);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const resetAmount = document.querySelector('.js-reset');
        formElement.addEventListener("input", onChange);
        resetAmount.addEventListener("click", resetAmount);
    };

    init();
}

// formElement.addEventListener("input", onChange);

// resetAmount.addEventListener("click", resetAmount);