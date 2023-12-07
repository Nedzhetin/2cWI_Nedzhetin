for (let i = 0; i < 4; i++) {
  if (i % 2 == 0) {
    console.log("XXXX");
  } else {
    console.log("OOOO");
  }
}

let counter = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    counter = counter + i;
    console.log(i);
  }
  console.log(counter);
}

//console.log("X   X")
//console.log("XX  X")
//console.log("X X X ")
//console.log("X   X ")

for (let i = 0; i <= 3; i++) {
  if (i == 0) {
    console.log("X   X");
  }
  if (i == 1) {
    console.log("XX  X");
  }
  if (i == 2) {
    console.log("X X X ");
  }
  if (i == 3) {
    console.log("X   X ");
  }
}
