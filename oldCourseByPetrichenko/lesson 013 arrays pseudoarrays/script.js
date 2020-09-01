(function main() {
    'use strict';
    // Объявления массива
    // var array1 = [];
    // var array2 = [1, 2, 3, 4, 5];

    // // добавим нновый элемент массива
    // array1[0] = 1;
    // console.log(array1);
    // // добавить ещё один элемент
    // array1[1] = 2;
    // console.log(array1);
    var testArray = [];
    var n = 50;
    fillArrWithRndNum(n, testArray);
    addElemsToEnd(n, testArray);
    removeElemsFromEnd(n,testArray);
    addElemsToStart(n, testArray);
    removeElemsFromStart(n, testArray);
    sortArrWithNum(testArray);
    fillArrWithRndChar(testArray);

}) ();

// Массивы и псевдомассивы



/**
 * Заполняет массив arr количеством elemNum элементов сл. числами 100-110
 *
 * @param {*} elemAmount - количество элементов
 * @param {*} arr - массив для действия
 */
function fillArrWithRndNum(elemAmount , arr) {
    for(let index = 0; index < elemAmount; index++) {
        arr[index] = Math.floor(Math.random() * 10 + 100);
    }
    console.log(arr);
}

/**
 * Перезаполняет весь массив arr сл. символами a-z
 *
 * @param {*} arr - массив для действия
 */
function fillArrWithRndChar(arr) {
    for(let index = 0; index < arr.length; index++) {
        arr[index] = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    }
    console.log(arr);
}

/**
 * Добавляет сл. число (200-210) в количестве elemAmount элементов в конец массива arr
 *
 * @param {*} elemAmount - количество элементов
 * @param {*} arr - массив для действия
 */
function addElemsToEnd(elemAmount, arr) {
    for(let index = 0; index < elemAmount; index++) {
        arr.push(Math.floor(Math.random() * 10 + 200)); 
    }
    console.log(arr);
}

/**
 * Удаляет elemAmount последних элементов массива arr
 *
 * @param {*} elemAmount - количество элементов
 * @param {*} arr - массив для действия
 */
function removeElemsFromEnd(elemAmount, arr) {
    for(let index = 0; index < elemAmount; index++) {
        arr.pop();
    }
    console.log(arr);
}

/**
 * Добавляет сл. число (300-310) в количестве elemAmount элементов в конец массива arr
 *
 * @param {*} elemAmount - количество элементов
 * @param {*} arr - массив для действия
 */
function addElemsToStart(elemAmount, arr) {
    for(let index = 0; index < elemAmount; index++) {
        arr.unshift(Math.floor(Math.random() * 10 + 300));
    }
    console.log(arr);
}

/**
 * Удаляет elemAmount первых элементов массива arr
 *
 * @param {*} elemAmount - количество элементов
 * @param {*} arr - массив для действия
 */
function removeElemsFromStart(elemAmount, arr) {
    for(let index = 0; index < elemAmount; index++) {
        arr.shift();
    }
    console.log(arr);
}

/**
 * Сортирует числовой массив по возрастанию
 *
 * @param {*} arr - массив для действия 
 */
function sortArrWithNum(arr) {
    arr.sort((a,b) => a - b);
    console.log(arr);
}

/**
 * Сортирует строчный массив по алфавиту
 *
 * @param {*} arr - массив для действия 
 */
function sortArrWithNum(arr) {
    arr.sort();
    console.log(arr);
}





