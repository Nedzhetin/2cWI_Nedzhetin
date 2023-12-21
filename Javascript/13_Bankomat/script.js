import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);

    });
  });
};

let kontoStand = 0;
let isFinished = false;



while(!isFinished){
console.log("1. Einzahlen");
console.log("2. Abheben");
console.log("3. Konstostand");
console.log("4. Beeden");
let selection = await readLineAsync();
if(selection == 1){
    console.log("Wie viel € möchten Sie einzahlen");
   let einzahlung =  Number(await readLineAsync());
   kontoStand = kontoStand + einzahlung;
   console.log("Ihre Einzahlung würde erfolgreich abgeschlossen");
}
else if(selection == 2){
    console.log("Wie viel € möchten Sie abheben");
   let abhebung =  Number(await readLineAsync());
   kontoStand = kontoStand - abhebung;
   console.log("Ihre Abhebung würde erfolgreich abgeschlossen");
}
else if(selection == 3){
    console.log("Ihre Kontostand: " + kontoStand);
}
else if(selection == 4){
    readline.close();
}
}



