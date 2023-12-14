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

console.log("Enter your name");
let Username = await readLineAsync();
console.log(Username);


readline.close();