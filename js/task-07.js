// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const inputRange = document.querySelector('#font-size-control');
const targetText = document.querySelector('#text');
inputRange.addEventListener('input', inputValue => {
    targetText.style.fontSize = (16 + inputValue.target.value / 4) + 'px'});

