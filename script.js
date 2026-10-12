const counterValue = document.querySelector('#counter-value');
const btnDecrease = document.querySelector('#btn-decrease');
const btnReset = document.querySelector('#btn-reset');
const btnIncrease = document.querySelector('#btn-increase');

let currentValue = 0;

btnIncrease.addEventListener('click', function(){

    currentValue = currentValue + 1;

    counterValue.textContent = currentValue;
});

btnDecrease.addEventListener('click', function(){

    currentValue = currentValue - 1;

    counterValue.textContent = currentValue;
});

btnReset.addEventListener('click', function(){

    currentValue = 0;

    counterValue.textContent = currentValue;
});