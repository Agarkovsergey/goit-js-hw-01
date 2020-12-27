let country = prompt('укажите страну для доставки');
let credit;
switch (country) {
    case 'Китай':
        credit = 100;
        alert(`Доставка в ${country} будет стоить ${credit} кредитов`);
        break
    case 'Чили':
        credit = 250;
        alert(`Доставка в ${country} будет стоить ${credit} кредитов`);
        break
    case 'Австралия':
        credit = 170;
        alert(`Доставка в ${country} будет стоить ${credit} кредитов`);
        break
    case 'Индия':
        credit = 80;
        alert(`Доставка в ${country} будет стоить ${credit} кредитов`);
        break
    case 'Ямайка':
        credit = 120;
        alert(`Доставка в ${country} будет стоить ${credit} кредитов`);
        break
    default:
    alert('В вашей стране доставка не доступна');
}
