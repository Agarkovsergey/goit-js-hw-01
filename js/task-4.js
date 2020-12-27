let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let quantity = Number(prompt("количество дроидов которые пользователь хочет купить"));
console.log(credits, pricePerDroid, totalPrice, quantity);
if (quantity !== null) {
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
