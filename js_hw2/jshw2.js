const Console1 = {
    Brand: "Sony",
    Model: "PlayStation 4",
    ReleaseYear: 2016,
    HoursPlayed: 4200,
    Color: "Црна",
    Price: 15000,
};

console.log("Бренд:", Console1.Brand);
console.log("Цена:", Console1.Price);
console.log(Console1.HoursPlayed, Console1.ReleaseYear, "Играно часови и година на издавање");

console.log("------------");

const Console2 = {
    Brand: "Microsoft",
    Model: "Xbox One S",
    ReleaseYear: 2017,
    HoursPlayed: 3800,
    Color: "Бела",
    Price: 14000,
};

console.log("Бренд:", Console2.Brand);
console.log("Цена:", Console2.Price);
console.log("Часови играње и година:", Console2.HoursPlayed, Console2.ReleaseYear);

console.log("------------");

const Console3 = {
    Brand: "Nintendo",
    Model: "Switch",
    ReleaseYear: 2019,
    HoursPlayed: 2500,
    Color: "Неон",
    Price: 18000,
};

console.log("Бренд:", Console3.Brand);
console.log("Цена:", Console3.Price);
console.log("Часови играње и година:", Console3.HoursPlayed, Console3.ReleaseYear);

console.log("------------");

const Console4 = {
    Brand: "Sony",
    Model: "PlayStation 5",
    ReleaseYear: 2021,
    HoursPlayed: 1200,
    Color: "Бело",
    Price: 33000,
};

console.log("Бренд:", Console4.Brand);
console.log("Цена:", Console4.Price);
console.log("Часови играње и година:", Console4.HoursPlayed, Console4.ReleaseYear);

console.log("------------");

const Console5 = {
    Brand: "Microsoft",
    Model: "Xbox Series X",
    ReleaseYear: 2021,
    HoursPlayed: 900,
    Color: "Црна",
    Price: 32000,
};

console.log("Бренд:", Console5.Brand);
console.log("Цена:", Console5.Price);
console.log("Часови играње и година:", Console5.HoursPlayed, Console5.ReleaseYear);

console.log("------------");

// 1. Проверка на возраст за влез по 12 часот

const gamerName = "Даниел";
const gamerAge = 50;

function ageVerification(age) {
    let result;

    if (age >= 18) {
        console.log("Дозволен влез");
    } else {
        console.log("Недозволен влез. Мора да имате 18+ години");
    }

    if (age > 65) {
        console.log("Предупредување: Долги гејминг сесии не се препорачуваат");
    }

    return result;
}

const proverka1 = ageVerification(gamerAge);

console.log("------------");

// 4. Ваучер попусти по возраст

const V10 = 10;  
const V20 = 20;
const V50 = 50;

function ageVoucher(age, basePrice) {
    let finalPrice;

    if (age <= 18) {
        finalPrice = basePrice - (basePrice * V10) / 100;
        console.log("Добиен е 10% попуст за млади гејмери.");
    } else if (age <= 55) {
        finalPrice = basePrice - (basePrice * V20) / 100;
        console.log("Добиен е 20% стандарден попуст.");
    } else if (age > 60) {
        finalPrice = basePrice - (basePrice * V50) / 100;
        console.log("Добиен е 50% попуст за пензионери гејмери.");
    }

    return finalPrice;
}

let kupuvacAge = 15;
let cenaNaProizvod = 4000;

const finalnaCena = ageVoucher(kupuvacAge, cenaNaProizvod);
console.log("Вашата конечна цена е: " + finalnaCena);

console.log("------------");


// 5. попусти по ден

let buyerName2 = "Стефан";
let purchaseDay = "четврток";
let totalCost = 1000;

const TUESDAY = 12;
const THURSDAY = 18;
const SATURDAY = 25;

function discountByDay(day, price) {
    let final;

    if (day === "вторник") {
        final = price - (price * TUESDAY) / 100;
    } else if (day === "четврток") {
        final = price - (price * THURSDAY) / 100;
    } else if (day === "сабота") {
        final = price - (price * SATURDAY) / 100;
    } else {
        final = null; // нема попуст
    }

    return final;
}

const denPopustCena = discountByDay(purchaseDay, totalCost);
console.log("Цена со попуст за " + purchaseDay + " е " + denPopustCena);

