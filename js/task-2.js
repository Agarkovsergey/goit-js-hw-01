'use strict'
const total = 100;
const ordered = 50;
const messageFail = "На складе недостаточно твоаров!";
const messageSuccess = "Заказ оформлен, с вами свяжется менеджер";
if (total >= ordered) {
    console.log(messageSuccess);
} else {
    console.log(messageFail);
}

