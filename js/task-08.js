const controlsDiv = document.querySelector('#controls');
const inputNumbers = document.querySelector('[type="number"]');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesDiv = document.querySelector('#boxes');

let numberDiv;
inputNumbers.addEventListener('input', inputValue => {
        numberDiv = inputValue.target.value});

    const destroy = () => {
        boxesDiv.innerHTML = '';
    }     

   const render = () => {
       destroy();
       for (let i=1; i <= numberDiv; i++) {
        boxesDiv.appendChild(document.createElement('div'))
       }

        let arrDiv = boxesDiv.querySelectorAll('div')
        let sizeDiv = 30;

        arrDiv.forEach(element=> {
        element.style.width = sizeDiv + 'px';
        element.style.height = sizeDiv + 'px';
        element.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
        sizeDiv = sizeDiv + 10;
        })
   }     
 
   renderBtn.addEventListener('click', render);
   destroyBtn.addEventListener('click', destroy);