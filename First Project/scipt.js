'use stirct';
console.log(userName);
//console.log(userPass);
var userName = "Иван";

let userPass = '123';
console.log(userPass);    
console.log(userName);
let borderHeight    =   10;
console.log(4/0);

// типы переменных, их 6

//числовой тип
var int = 1;
console.log('целое число: ' + int);

//дробное число или число с плавающей точкой
var float = 3.14159265358979323846;
console.log('дробное: ' + float);

//булевое выражение
var boolean = true;
console.log('булевое выражение = ' + boolean);

//символьный тип данных, не понятно для чего нужен
//объявим тип символ symbol с описанием 'Это символьный тип данных
var symbol = Symbol('Это символьный тип данных');
//выводим описание символа
console.log('символ = ' + symbol.description);

//строковый тип данных
var string = 'Это целая строка, здесь много символов';
var char = '1';
var charOne = 'a'
console.log('Это строка = ' + string);
console.log('Это сивол = ' + char + ' и это тоже символ = ' + charOne);

//Создадим объект, объектом будет машина
var car = {
    manufactureName: 'Ford', // наименование производителя
    birthYear: 1995, // год выпуска
    powerValue: '70 kW', // мощность
    isComputer: true   // наличие бортового компьютера
 } 

 //обратимся к каждому из свойств объекта и выведем их на экран с помощью .
 console.log('наименование производителя: ' + car.manufactureName);
 console.log('год выпуска: ' + car.birthYear);
 console.log('мощность автомобиля: ' + car.powerValue);
 console.log('наличие бортового компьютера: ' + car.isComputer);

 //обратимся к свойствам с помощью []
 console.log('наименование производителя: ' + car['manufactureName']);

 //массивы
let marray = [1, '1', 'Машина', true];

console.log(marray[3]);

 //общение с пользователем
//выводим модальное сообщение
let msg = 'Зря вы здесь появились...';
//alert(msg);
//выводим сообщение с ответами "Да" и "Нет"
//confirm(msg);

let answer = prompt(msg, 'da');
console.log(answer);



