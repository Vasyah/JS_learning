'use strict';
// Первое домашнее задание из курса

var money = prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');

// объект, предназначенный для фин расчёта
var appData = {
    budget: money,          // месячный бюджет
    timedata: time,         // дата
    expenses: {},           // обязательные расходы
    optionalExpenses: [],   // необязательные расходы
    income: [],             // доп доход
    savings: false          // сбережения
};

console.log(appData);
// собираем информацию у пользователя об обязательных расходах - название и сумма

// добавить в объект фин расчёта значения необязательных расходов
// appData.expenses.nameOne = valueOne;

// собираем информацию у пользователя об обязательных расходах - название и сумма
// let nameTwo = prompt('Введите обязательную статью расходов №2 в этом месяце');
// let valueTwo = prompt('Во сколько обойдется?');
// добавить в объект фин расчёта значения необязательных расходов
// appData.expenses.nameTwo = valueTwo;
// for(let i = 0; i < 2; i++) {
//     // typeof prompt = 'string', независимо от содержания
//     let expenseNam = prompt('Введите обязательную статью расходов в этом месяце');
//     let expenseVal = prompt('Во сколько обойдется?');
//     // проверка - введеные значения строка?
//     // пользователь не нажал "отмена"?
//     // пользователь не нажал "ок"?
//     // длина строки меньше 50?
//     if( (typeof(expenseNam)) === 'string' && (typeof(expenseNam)) != null && 
//     (typeof(expenseVal)) === 'string' && (typeof(expenseVal)) != null &&
//      expenseNam != '' && expenseVal != '' &&
//       expenseNam.length < 50 && expenseNam.length < 50 ) {
//         console.log('done');
//     }
//     else{
//         console.log('penis');
//     }
// }
var i = 0;
// while( i < 2) {
//     // typeof prompt = 'string', независимо от содержания
//     console.log('asas');
//     let expenseNam = prompt('Введите обязательную статью расходов в этом месяце');
//     let expenseVal = prompt('Во сколько обойдется?');
//     if( (typeof(expenseNam)) === 'string' && (typeof(expenseNam)) != null && 
//     (typeof(expenseVal)) === 'string' && (typeof(expenseVal)) != null &&
//      expenseNam != '' && expenseVal != '' &&
//       expenseNam.length < 50 && expenseNam.length < 50 ) {
//         console.log('done');
//     }
//     else{
//         console.log('penis');
//     }
//     i++;
// }
do {
    // typeof prompt = 'string', независимо от содержания
    console.log('asas');
    let expenseNam = prompt('Введите обязательную статью расходов в этом месяце');
    let expenseVal = prompt('Во сколько обойдется?');
    if( (typeof(expenseNam)) === 'string' && (typeof(expenseNam)) != null && 
    (typeof(expenseVal)) === 'string' && (typeof(expenseVal)) != null &&
     expenseNam != '' && expenseVal != '' &&
      expenseNam.length < 50 && expenseNam.length < 50 ) {
        console.log('done');
    }
    else{
        console.log('penis');
    }
    i++;
} while( i < 2);

Number.length
console.log(appData);
var moneyPerDay = appData.budget / 30;
console.log('ежедневный бюджет: ' + moneyPerDay);

/*
    Ответы на вопросы:
    1) Сколько типов данных существует в JS
    Ответ: num, string, bool, null, undefined, массив, объект, символ - 8 типов

    2) Как вывести информацию в консоль?
    Ответ: с помощью следующих команд
    console.log() - выводит информацию в консоль
        alert() - с единственным вариантом выбора
        confirm() -  всплывающее окно, с двумя вариантами выбора, результат - bool
        prompt() - всплывающее окно, с двумя вариантами выбора, результат - вписанные пользователем значения

    3) Какая функция операторов || и &&?
    Ответ: это логические операторы, || - логическое или && - логическое и, результат - bool 
    
    

*/








