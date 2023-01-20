"use strict";

function sumInput() {
    let array = [];
    let summation = 0;
    do {
        let message = prompt('Введите число: ', '');
        if (message === null || !isFinite(message) || message === '') break;
        array.push(+message);
        console.log(`Введенные числа: [${array}]`);
    }  while (true);        
    for (let number of array) {
        summation += number;
    }
    alert(`Сумма чисел равна: ${summation}`);
    return summation;
}

sumInput();