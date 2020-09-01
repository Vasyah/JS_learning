// четвертое задание из курса
(function main() {
    'use strict';
    //  функция-расчёт дневного бюджета на основании месячного
    /* --- properties --- */
    var appData = {
        expenses: {}, // обязательные расходы
        optionalExpenses: [], // необязательные расходы
        income: [], // доп доход
        savings: true, // сбережения
        /* --- methods --- */

        /**
         * возвращает числовое значение запрошенное у пользователя
         *
         * @returns - месячный бюджет, заданный пользователем
         */
        getBudget: function () {

            var budget = +prompt('Ваш бюджет на месяц?');
            while (isNaN(budget) || budget == null || budget == '') {
                console.log('Неправильно введены данные, повторите попытку');
                budget = +prompt('Ваш бюджет на месяц?');
            }
            return budget;
        },

        /**
         *  возвращает budget делённое на 30
         *
         * @param {number} budget - месячный бюджет, делимое число
         * @returns {number} budget,  делённое на 30, с округлением и без десятичных знаков
         */
        getDayBudget: function (budget) {
            var dayBudget = budget / 30;
            alert('Ежедневный доход: ' + dayBudget.toFixed());
            return dayBudget.toFixed();
        },

        /**
         * выводит уровень мес. бюджета на экран на основании уровня dayBudget
         *
         * @param {object} dayBudget - значение на основании которого будет сделан вывод 
         * об уровне дохода
         */
        detectBudgetLevel: function (dayBudget) {
            if (dayBudget < 1000) {
                alert('Минимальный уровень достатка');
            } else if (dayBudget > 1000 && dayBudget < 2000) {
                alert('Средний уровень достатка');
            } else if (dayBudget > 2000) {
                alert('Высокий уровень достатка');
            } else {
                alert('Произошла ошибка');
            }
        },

        /**
         * Запрос даты
         *
         * @returns текущую дату
         */
        getDate: function () {
            var date = prompt('Введите дату в формате YYYY-MM-DD');
            while (date == null || date == '') {
                console.log('Неправильно введены данные, повторите попытку');
                date = prompt('Введите дату в формате YYYY-MM-DD');
            }
            return date;
        },

        /**
         * записывает в объект o.expenses expensesNum новых ключей и их значения
         *  
         * @param {number} expensesNum - количество новых ключей
         * @param {obejct} o - объект действий
         */
        getExpenses: function (expensesNum, o) {
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
                o.expenses[expenseName] = expenseVal;
            }
            for (let item in o.expenses) {
                console.log('Добавлена статья: ' + item + ' значение: ' + o.expenses[item]);
            }
        },

        /**
         * записывает в объект o.expenses expensesNum новых ключей и их значения
         *
         * @param {number} expensesNum - количество новых ключей
         * @param {obejct} o - объект действий
         */
        getOptionalExpenses: function (expensesNum, o) {
            for (let i = 0; i < expensesNum; i++) {
                // typeof prompt = 'string', независимо от содержания
                let expenseName = prompt('Введите дополнительную статью расходов в этом месяце');
                let expenseVal = +prompt('Во сколько обойдется?');

                while (!isNaN(expenseName) || expenseName == null ||
                    expenseName == '' || expenseVal == '' ||
                    isNaN(expenseVal) || expenseVal == null ||
                    expenseName.length > 50 || expenseName.length > 50) {

                    expenseName = prompt('Введите дополнительную статью расходов в этом месяце');
                    console.log('Неверно введены данные, попробуйте ещё раз');
                    expenseVal = prompt('Во сколько обойдется?');
                }
                o.optionalExpenses[expenseName] = expenseVal;
            }
        },

        /**
         * выводит на экран ежемесячный доход
         * sum - получить данные от пользователя
         * @param {object} o - объект, в котором проверяется значение ключа
         */
        checkSavings: function (o) {
            if (o.savings == true) {
                let sum = +prompt('Какая сумма вложений?');
                let percent = +prompt('Под какой процент?');
                while (isNaN(sum) || isNaN(percent) ||
                    sum == null || percent == null ||
                    sum == '' || percent == '') {

                    sum = +prompt('Какая сумма вложений?');
                    percent = +prompt('Под какой процент?');
                }
                let monthIncome = sum / 100 / 12 * percent;
                alert('Ежемесячный доход с накоплений: ' + monthIncome.toFixed());
            }
        },

        /**
         * возвращает новые элементы в массив income объекта o
         *
         * @param {object} o - объект действия
         */
        chooseIncome: function (o) {
            var answer = prompt('Что принесет дополнительный доход? Перечислите через запятую', '');
            while (!isNaN(answer) || answer == null || answer == '') {
                answer = prompt('Что принесет дополнительный доход? Перечислите через запятую', '');
            }
            o.income = answer.split(',');
            var answerAnother = prompt('Может быть что-то ещё? Один вариант', '');
            while (!isNaN(answerAnother) || answerAnother == null || answerAnother == '') {
                answerAnother = prompt('Что принесет дополнительный доход? Один вариант', '');
            }
            o.income.push(answerAnother);
            o.income.sort();
            console.log('Способы доп заработка: ');
            o.income.forEach(function(value, index) {
                console.log((++index) + ': ' + value);
            });
        },

    };
    appData.budget = appData.getBudget();
    appData.dayBudget = appData.getDayBudget(appData.budget);
    appData.detectBudgetLevel(appData.dayBudget);
    appData.date = appData.getDate();
    console.log('Месячный бюджет: ' + appData.budget);
    appData.getExpenses(2, appData);
    appData.getOptionalExpenses(1, appData);
    appData.checkSavings(appData);
    appData.chooseIncome(appData);
    console.log('Наша программа включает в себя данные:');
    for(let item in appData) {
        // если использовать appData[item], то для методов
        // выводятся описания функций
        alert(item);
    }
})();




// объект, предназначенный для фин расчёта

/* ------------- FUNC DECL ------------- */