"use strict";

function sumInput() {
    let array = [];    
    do {
        let message = prompt('Введите число: ', '');
        if (message === null || !isFinite(message) || message === '') break;
        array.push(+message);
        console.log(`Введенные числа: [${array}]`);
    }  while (true);  
    let reduceSumma = array.reduce(function (previousNumbers, item) {
        return item + previousNumbers;
    }, 0);          
    alert(`Сумма чисел равна: ${reduceSumma}`);    
}
sumInput();