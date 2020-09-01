// проверим последовательность выпонления следующих функций

function TimeOut() {
    setTimeout(function () {
        console.log(1);
    }, 1000);
}

function clg() {
    console.log(2);
}

// TimeOut();
// clg();

// как видно из результатов консоля, сперва у нас выведетеся 2,
// а затем 1, это связано с тем, что функция setTimeout запускает
// определённый счётчик, который достигнув опр. значение выполнит функцию
// а до этого момента он отдаёт управление основной программе

// Для четкого прогнозирования порядка выполнения функций, используются callback-функции


function timeOut1(callback) {
    console.log(1);
    callback();
}

function callBack1() {
    console.log(2);
}

timeOut1(callBack1);


