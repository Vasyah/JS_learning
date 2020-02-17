'use strict';

// Второе задание к курсу по JS

// 1)Какое будет выведено значение: let x = 5; alert( x++ ); ?
// мой ответ: 5  
let x = 5; alert( x++ ); 
console.log('Первое задание: ' + x);
// мой ответ правильный.
/* рассуждения : я предположил, что первым будет выведено текущее 
значение переменной x, а только затем произведена операция инкрементации
*/

// 2)Чему равно такое выражение: [ ] + false - null + true ?
// Мой ответ: я считаю, результатом будет true, поскольку 
// false = false, null = false, [] = false, true = true
let y = [] + false - null + true;
console.log('Второе задание: ' + y);
// мой ответ неправильный
// правильный ответ - NaN - not a number, данное предупреждение говорит о
// неопределенности результата, как деление 0/0, всё дело в []

// 3)Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// Мой ответ: результат - 2, поскольку мы переопределяем старое значение
// переменной
let z = 1; let a = z = 2; 
alert(a);
console.log('Третье задание: ' + a);
//мой ответ правильный.

// 4)Чему равна сумма [ ] + 1 + 2?
// Мой ответ: здесь результат должен посчитаться, т.к.
// имеются только числовые значения, без строк, а
// [] - 0 значение
let b = [] + 1 + 2;
console.log(b);
// мой ответ неправильный
// результат - 12, из за [] происходит склеивание строк, видимо значения
// преобразуются в строки, если [] убрать, то значения нормально скла-
// дываются

// 5)Что выведет этот код: alert( "1"[0] )?
// [] - пустой массив
alert( "1"[0] );

// 6)Чему равно 2 && 1 && null && 0 && undefined ?
// мой ответ: 0
let c = 2 && 1 && null && 0 && undefined;
console.log( c );
// правильный ответ: null - это не объект, как undefined, это
// литерал. переменная с таким значением объявлена, но не имеет
// ни типа, ни значения

// 7)Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// мой ответ: разницы нет
a = 0;
b = 0;
let d = (!!( a && b ));
let e = ( a && b );
console.log( 'd = ' + d + "\n" + 'e = ' + e );
// 8)Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

// вот какая петрушка, лог ИЛИ (||) выводит значение первого по порядку
// члена выражения со значением true, (0 || 2) рез-тат - 2
// в случае, если в выражении отсутствуют значения true,
// выводится значение последнего члена выражения
console.log(0 || false || null || undefined || 0);
// Лог И - Если левый аргумент – false, оператор И возвращает его и заканчивает 
//вычисления. Иначе – вычисляет и возвращает правый аргумент.
console.log(0 && 1); // 0

console.log(true && null); // null
let f = null || 2 && 3 || 4;
alert( f );
console.log( f );
// 1. рассматриваем по отдельности оба выражения между &&
// 2. null || 2 - результат 2, потому что 1 аргумент со значением true - 2
// 3. 3 || 4 - первый положительнный - 3
// 4. 2 && 3 - результат true, возвращает правый аргумент - 3


// 9)a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// мой ответ: == - оператор равенства, ответ да, они равный
// существует так же оператор идентичности - ===, предположу, что они ид-ны
let g = [1, 2, 3];
let h = [1, 2, 3];
console.log(g[0]==h[0]);
console.log(g[0]===h[0]);

// 10)Что выведет этот код: alert( +"Infinity" ); ?
// мой ответ: infinity + - это преобразование к числу
alert( +'Infinity' );
// верно

// 11)Верно ли сравнение: "ёжик" > "яблоко"?
// мой ответ: да, потому что при сравнении идёт посимвольное сравнени
// если первый символ первого члена больше первого символа второго, то
// результат true
let i = 'ёжик' > 'еблоко';
console.log( 'ежик' > 'яблоко' );
// мой ответ неверный, на самом деле, чем находится дальше по порядку, 
// тем выше приоритет. В данном случае стояла буква "ё", которая имеет
// наивысший приоритет из всех букв
// 12)Чему равно 0 || "" || 2 || undefined || true || falsе ?
// мой ответ : 2, потому что это первое по счёту слева направо true значение
let j = 0 || "" || 2 || undefined || true || false;
console.log( j );







