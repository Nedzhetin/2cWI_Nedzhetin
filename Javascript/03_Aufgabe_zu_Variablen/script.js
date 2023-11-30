 // Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
// Preis von 8 Äpfeln
// Preis von 17 Bananen
// Preis von 1 Tonne Äpfel
// Preis von 1 Tonne Bananen



let banana = "Banane";
let apple = "Apple";

let appleWeight = 0.34;
let bananaWeight = 0.22;


let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let oneApplePrice = (0.34 * applePricePerKilo);
let oneBananaPrice = (0.22 * bananaPricePerKilo);

let bananaProKilo = 1/bananaWeight;
let appleProKilo = 1/appleWeight;

console.log("bananaProKilo = "  + bananaProKilo);
console.log("appleProKilo = "  + appleProKilo);
console.log("Preis von 8 Äpfeln = "  + oneApplePrice.toFixed(2) * 8);
console.log("Preis von 17 Bananen = "  + oneBananaPrice.toFixed(2) * 17);
console.log("Preis von 1 Tonne Äpfel = "  + oneApplePrice.toFixed(2) * 1000);
console.log("Preis von 1 Tonne Bananen = "  + oneBananaPrice.toFixed(2) * 1000);

