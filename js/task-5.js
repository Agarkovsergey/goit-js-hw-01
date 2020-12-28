'use strict'
let country = prompt('укажите страну для доставки');
let credit;
switch (country.toLowerCase()) {
    case 'китай':
        credit = 100;
        alert(`Доставка в ${country} будет стоить ${credit} кредитов`);
        break
    case 'чили':
        credit = 250;
        alert(`Доставка в ${country} будет стоить ${credit} кредитов`);
        break
    case 'австралия':
        credit = 170;
        alert(`Доставка в ${country} будет стоить ${credit} кредитов`);
        break
    case 'индия':
        credit = 80;
        alert(`Доставка в ${country} будет стоить ${credit} кредитов`);
        break
    case 'ямайка':
        credit = 120;
        alert(`Доставка в ${country} будет стоить ${credit} кредитов`);
        break
    default:
        alert('В вашей стране доставка не доступна');
}
