'use strict';
// четвертое задание из курса

// функция-запрос месячного бюджета
// если не число - повторить запрос
// если отмена - повторить запрос
// если окей без ввода данных - повторить запрос
function getBudget() {
    var budget = prompt('Ваш бюджет на месяц?');
    while (isNaN(budget) || budget == null || budget == '') {
        console.log('Неправильно введены данные, повторите попытку');
        budget = +prompt('Ваш бюджет на месяц?');
    }
    return budget;
}
// функция-запрос текущей даты
function getDate() {
    var date = prompt('Введите дату в формате YYYY-MM-DD');
    while (date == null || date == '') {
        console.log('Неправильно введены данные, повторите попытку');
        date = prompt('Введите дату в формате YYYY-MM-DD');
    }
    return date;
}
//  функция-расчёт дневного бюджета на основании месячного
function getDayBudget(budget) {
    var dayBudget = budget / 30;
    return dayBudget.toFixed(1);
}
var appData = {
    budget: money, // месячный бюджет
    timedata: time, // дата
    expenses: {}, // обязательные расходы
    optionalExpenses: [], // необязательные расходы
    income: [], // доп доход
    savings: false // сбережения
};

var money = getBudget();
var time = getDate();
var dayMoney = getDayBudget(money);
console.log('Месячный бюджет: ' + money);
console.log('Текущая дата: ' + time);
console.log('Дневной бюджет: ' + dayMoney);
getExpenses(2);
getOptionalExpenses(3);
// объект, предназначенный для фин расчёта

console.log(appData);

// собираем информацию у пользователя об обязательных расходах - название и сумма
// проверка - введеные значения строка?
// пользователь не нажал "отмена"?
// пользователь не нажал "ок"?
// длина строки меньше 50?
function getExpenses(expensesNum) {
    for (let i = 0; i < expensesNum; i++) {
        // typeof prompt = 'string', независимо от содержания
        let expenseName = prompt('Введите обязательную статью расходов в этом месяце');
        let expenseVal = +prompt('Во сколько обойдется?');

        while (!isNaN(expenseName) || expenseName == null ||
            isNaN(expenseVal) || expenseVal == null ||
            expenseName == '' || expenseVal == '' ||
            expenseName.length > 50 || expenseName.length > 50) {
            console.log('Неверно введены данные, попробуйте ещё раз');
            expenseName = prompt('Введите обязательную статью расходов в этом месяце');
            expenseVal = prompt('Во сколько обойдется?');
        }
        appData.expenses[expenseName] = expenseVal;
    }
}

// собираем информацию у пользователя об обязательных расходах - название и сумма
// проверка - введеные значения строка?
// пользователь не нажал "отмена"?
// пользователь не нажал "ок"?
// длина строки меньше 50?
function getOptionalExpenses(expensesNum) {
    for (let i = 0; i < expensesNum; i++) {
        // typeof prompt = 'string', независимо от содержания
        let expenseName = prompt('Введите дополнительную статью расходов в этом месяце');
        let expenseVal = +prompt('Во сколько обойдется?');

        while ( !isNaN(expenseName) ||
        expenseName == '' || expenseVal == '') {
            console.log('Неверно введены данные, попробуйте ещё раз');
            expenseName = prompt('Введите дополнительную статью расходов в этом месяце');
            expenseVal = prompt('Во сколько обойдется?');
        }
        appData.optionalExpenses[expenseName] = expenseVal;
    }
}

// Ответы на вопросы:
// 1) Сколько типов данных существует в JS
// Ответ: num, string, bool, null, undefined, массив, объект, символ - 8 типов

// 2) Как вывести информацию в консоль?
// Ответ: с помощью следующих команд
// console.log() - выводит информацию в консоль
//     alert() - с единственным вариантом выбора
//     confirm() -  всплывающее окно, с двумя вариантами выбора, результат - bool
//     prompt() - всплывающее окно, с двумя вариантами выбора, результат - вписанные пользователем значения

// 3) Какая функция операторов || и &&?
// Ответ: это логические операторы, || - логическое или && - логическое и, результат - bool 