const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

//   Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй 
// шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const targetUlGallery = document.querySelector('#gallery')

let textHTMLgallery = '';
    images.forEach(item => {textHTMLgallery = textHTMLgallery + '<li> <img src="' + item.url 
    + '" alt="' + item.alt + '" width = 300 height = 200 /> </li>'})
    targetUlGallery.insertAdjacentHTML('afterbegin', textHTMLgallery)

    // targetUlGallery.setAttribute("style", "width: 300")

    targetUlGallery.style.display = 'flex';
    // targetUlGallery.style.flex-direction = 'row';


    // targetUlGallery.style.width = "100";
    // targetUlGallery.style.backgroundColor = 'orange';
    targetUlGallery.style.listStyle = 'none';
    targetUlGallery.style.padding = '0';
    targetUlGallery.style.justifyContent = 'space-around';

    // console.dir(targetUlGallery)

    // const targetImg = targetUlGallery.querySelectorAll('img');
    // console.log(targetImg)
    // targetImg[0].style.padding = '20';

    

    