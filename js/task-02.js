const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  
  const targetUl = document.querySelector('#ingredients')

//   Метод построчного добавлення li
//   ingredients.forEach(item => {
//     let a = document.createElement('li');
//     a.textContent = item
//     targetUl.appendChild(a)
//      })

   
    // Метод добавлення однією операцією 
    let textHTML = "";
    ingredients.forEach(item => {textHTML = textHTML + "<li>" + item + "</li>"})
    targetUl.insertAdjacentHTML('afterbegin', textHTML)

