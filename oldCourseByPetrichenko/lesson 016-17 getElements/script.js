var d = document;
var circle = d.getElementsByClassName('circle');
var square = d.getElementsByClassName('square');
var btn = d.getElementsByClassName('btn');

var square1 = d.getElementById('square');

circle[0].style.backgroundColor = "Orange";
square[1].style.borderRadius = '50%';

// cоздадим новый элемент
var newBlock = d.createElement('div');
// добавим новый класс элементу
newBlock.classList.add('black');
console.log(newBlock);
var wrapper = d.querySelectorAll('.wrapper');
// добавим элемент на страницу в конец родителя
wrapper[1].appendChild(newBlock);
// добавим элемент в конкретное место
wrapper[0].insertBefore(newBlock, circle[1]);
// удалим элемент
wrapper[2].removeChild(btn[1]);
// добавим новый элемент в кнопки
wrapper[2].insertBefore(btn[2]);
// заменим первый элемент кнопок
wrapper[2].replaceChild(newBlock, btn[0]);