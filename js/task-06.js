// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputValue = document.querySelector('#validation-input'); 
inputValue.classList.add('validation-input')

inputValue.addEventListener('change', inputText => {
    inputValue.classList.remove('valid');
    inputValue.classList.remove('invalid')
    if (inputText.target.value.length === 0) {return}
    if (inputText.target.value.length === Number(inputValue.getAttribute("data-length"))) 
        {inputValue.classList.add('valid')}
    else {inputValue.classList.add('invalid')}
});