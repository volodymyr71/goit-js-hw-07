const liItem = document.querySelectorAll('li.item');
console.log('В списке ', liItem.length, ' категории')

liItem.forEach((num) => {
    console.log(" ");
    console.log("Категория: ", num.querySelector('h2').textContent);
    console.log("Количество элементов: ", num.querySelectorAll('li').length);
});
