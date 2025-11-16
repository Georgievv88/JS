let marka = "Golf";
let serija = "6";
let godina = 2009;
console.log(marka + serija + godina);

let registriran = true;
console.log("Voziloto e registrirano");

let cena = 7700;

if (cena <= 6000) {
  console.log("Prodadeno vozilo");
} else {
  console.log("Dostapno za kupuvanje");
}

console.log("-------------------------");

let broj = 333;

if (broj % 2 === 0) {
  console.log(broj + " e paren broj");
} else {
  console.log(broj + " e neparen broj");
}

let lice1 = "Marko";
let godini1 = 68;
console.log(lice1 + " ima " + godini1 + " godini");
let iskustvo = 30;
console.log("Marko ima " + iskustvo + " godini rabotno iskustvo");

if (godini1 >= 64 && iskustvo >= 15) {
  console.log("Marko ispolnuva uslovi za starosna penzija");
} else {
  console.log("Marko ne ispolnuva uslovi za penzija");
}

let lice2 = "Antonio";
godini1 = 24;
console.log("Antonio ima " + godini1 + " godini");
iskustvo = 2;
console.log("Antonio ima " +godini1 +" godini" +" i rabotno iskustvo od " +iskustvo +" godini"
);

if (godini1 >= 64 && iskustvo >= 15) {
  console.log("Antonio ima pravo na penzija");
} else {
  console.log("Antonio nema pravo na penzija");
}

let najaven = true; //test
let potvrden = false;
if (najaven && potvrden) {
  console.log("Pristapot e odobren");
} else {
  console.log("Pristapot e odbien");
}

let n = 25;
if (n % 3 === 0 && n % 5 === 0) {
  console.log("fizzbuzz");
} else if (n % 3 === 0) {
  console.log("fizz");
} else if (n % 5 === 0) {
  console.log("buzz");
}
