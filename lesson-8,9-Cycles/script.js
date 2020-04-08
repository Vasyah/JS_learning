'use strict';
let a = 10;
let b = 8;
if (a == b) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let num = 50;

if (num < 49) {
    console.log("Неверно");
} else if (num > 100) {
    console.log("Это не так");
} else {
    console.log("Верно!");
}

(num == 50) ? console.log("Верно!") : console.log("Неверно!");

switch (num) {
    case num < 49:
        console.log("Неверно!");
        break;
    case num == 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Все ещё Много!");
        break;
    case 50: // если мы хотим проверить соответствие определенному значению, то пишем просто 
    //значение (num == 50 НЕ РАБОТАЕТ)
        console.log("Верно");
        break;
    default:
        console.log("Ниего не подошло!!!");
        break;
}

// while (num < 55) {
//     console.log(num);
//     num++;
// }
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i);
}






