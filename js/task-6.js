'use strict'
let total = 0;
while(true) {
    let input = prompt('введите число');
    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }    
    input = Number(input);
    if (Number.isNaN(input)) {
        alert(`Было введено не число, попробуйте еще раз`)
        continue;
    }    
    total += input;
} 