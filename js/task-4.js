'use strict'
let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let quantity = prompt("количество дроидов которые пользователь хочет купить");
if (quantity !== null) {
    quantity = Number(quantity);
    totalPrice = quantity * pricePerDroid;
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        credits = credits - totalPrice;
        console.log(`Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`);
    }
} else {
    alert("Отменено пользователем!");
}
