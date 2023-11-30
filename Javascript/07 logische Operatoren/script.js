// Erstelle zwei Zufallszahl zwischen 0 und 100
// Speichere diese jeweils in einer Variable

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"

let randomNumber = Math.round(Math.random() * 100);
let randomNumberTwo = Math.round(Math.random() * 100);

console.log(randomNumber);
console.log(randomNumberTwo);

if (randomNumber < randomNumberTwo && randomNumber < 50) {
  console.log("Zahl 1 ist kleiner las Zahl 2 und Mini");
} else if (randomNumber < 30 || randomNumberTwo < 30) {
  console.log("Eine der beiden ist kleienr als 30");
} else if (randomNumber < 50 && randomNumberTwo != 50) {
  console.log("Erste Zahl klein, zweite kein 50ger");
}
