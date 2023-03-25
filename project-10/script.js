const currencyFirstEl = document.getElementById("current-first");
const wothFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("current-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate()

function updateRate() {
    fetch(
        `https://v6.echangerate-api.com/v6/64f49503684997525f15857e/
        latest/${currencyFirstEl.value}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currencySecondEl.value];
            console.log(rate);
            exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;
            worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
        });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthSecondEl.addEventListener("change", updateRate);

