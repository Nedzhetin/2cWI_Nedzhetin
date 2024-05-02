const data1 = "14,3,12,8,9,11,4,3,2,4";
// Zähle jede 2te Zahl zusammen
// 14 + 12 + 9 +…

let sum = 0;
let numbers = data1.split(",");

console.log(numbers);

for (let i = 0; i < numbers.length; i = i + 2) {
  sum = sum + parseInt(numbers[i]);
}
console.log(sum);

const data2 = "Hans ist ein netter Kerl H";
// Gib obigen Text aus
// Lösche folgende Buchstaben; a e
// Vervierfache folgende Buchstaben: H
// HHHHns ist in nttr Krl HHHH

console.log(data2);
let text = data2.split("");

for (let i = 0; i <= text.length; i++) {
  if (text[i] == "a" || text[i] == "e") {
    text[i] = "";
  }

  if (text[i] == "H") {
    text[i] = "HHHH";
  }
}

let ergebnis = "";
for (let i = 0; i < text.length; i++) {
  ergebnis = ergebnis + text[i];
}
console.log(ergebnis);

const data3 = "4,9,-3,-9,-5,10,2,1,14";
// NImm alle positiven Zahlen und berechne den Mittelwert
// Ausserdem gib die Summe der negativen Zahlen aus

let sum1 = 0;
let negSum = 0;
let numbers1 = data3.split(",");

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] > 0) {
    sum1 = sum1 + parseInt(numbers1[i]);
  }

  if (numbers1[i] < 0) {
    negSum = negSum + parseInt(numbers1[i]);
  }
}

let posMittelwert = sum1 / numbers1.length;

console.log(sum1);
console.log(posMittelwert);
console.log(negSum);
