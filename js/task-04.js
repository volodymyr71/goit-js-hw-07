// Счетчик состоит из спана и кнопок, которые должны 
// увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const btnDcr = document.querySelector('[data-action="decrement"]'); 
const btnIncr = document.querySelector('[data-action="increment"]'); 
let counterValue = document.querySelector('#value').textContent;

const decrement = () => document.querySelector('#value').textContent = Number(document.querySelector('#value').textContent) - 1;
const increment = () => document.querySelector('#value').textContent = Number(document.querySelector('#value').textContent) + 1;

btnDcr.addEventListener('click', decrement);
btnIncr.addEventListener('click', increment);
