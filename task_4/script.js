'use strict';
// четвертое задание из курса

// функция-запрос месячного бюджета
// если не число - повторить запрос
// если отмена - повторить запрос
// если окей без ввода данных - повторить запрос
function getBudget() {
    var budget = +prompt('Ваш бюджет на месяц?');
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
var appData = {
    budget: money, // месячный бюджет
    timedata: time, // дата
    expenses: {}, // обязательные расходы
    optionalExpenses: [], // необязательные расходы
    income: [], // доп доход
    savings: true // сбережения
};

var money = getBudget();
var time = getDate();
var dayMoney = getDayBudget(money);
console.log('Месячный бюджет: ' + money);
console.log('Текущая дата: ' + time);
console.log('Дневной бюджет: ' + dayMoney);
getExpenses(2);
checkSavings(appData);
console.log(appData);
// getOptionalExpenses(3);
// объект, предназначенный для фин расчёта

/**
 *  возвращает budget делённое на 30
 *
 * @param {number} budget - делимое число
 * @returns {number} budget,  делённое на 30, с округлением и без десятичных знаков
 */
function getDayBudget(budget) {
    var dayBudget = budget / 30;
    alert('Ежедневный доход: ' + dayBudget.toFixed());
    return dayBudget.toFixed(1);

}

// собираем информацию у пользователя об обязательных расходах - название и сумма
// проверка - введеные значения строка?
// пользователь не нажал "отмена"?
// пользователь не нажал "ок"?
// длина строки меньше 50?

/**
 * записывает в объект.expenses expensesNum новых ключей
 *
 * @param {number} expensesNum - количество новых ключей
 */
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


/**
 * записывает в объект.expenses два новых ключа
 *
 * @param {*} expensesNum - количество новых ключей
 * @param {*} o - объект, в который запишем
 */
function getOptionalExpenses(expensesNum, o) {
    for (let i = 0; i < expensesNum; i++) {
        // typeof prompt = 'string', независимо от содержания
        let expenseName = prompt('Введите дополнительную статью расходов в этом месяце');
        let expenseVal = +prompt('Во сколько обойдется?');

        while (!isNaN(expenseName) || expenseName == null ||
        isNaN(expenseVal) || expenseVal == null ||
        expenseName == '' || expenseVal == '' ||
        expenseName.length > 50 || expenseName.length > 50) {
            console.log('Неверно введены данные, попробуйте ещё раз');
            expenseName = prompt('Введите дополнительную статью расходов в этом месяце');
            expenseVal = prompt('Во сколько обойдется?');
        }
        o.optionalExpenses[expenseName] = expenseVal;
    }
}

/**
 * выводит на экран ежемесячный доход
 * summ - получить данные от пользователя
 * @param {*} o - объект, в котором проверяется значение ключа
 */
function checkSavings(o) {
    if(o.savings == true) {
        let summ = +prompt('Какая сумма вложений?');
        let percent = +prompt('Под какой процент?');
        let monthIncome = summ / 100 / 12 * percent;
        alert('Ежемесячный доход с накоплений: ' + monthIncome.toFixed(2));
    }
}
