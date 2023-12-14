 let arr = [4,1,2,3]

 arr.push(17,199);

 console.log(arr);

 let counter = 0;

 for( let i = 0; i < arr.length; i++){
     counter = counter +  arr[i];
    
 }

 let mittelWert = counter/arr.length;

 console.log(counter);
console.log(mittelWert);

//Aufgabe 2

let arr2 = ["Susi","Paula","Hans"];

console.log("Meine Freunde sind " + arr2[0] + ", " + arr2[1] + " und " + arr2[2]);

arr2.push("Sepp");

console.log("Meine Freunde sind " + arr2[0] + ", " + arr2[1] + ", " + arr2[2] + " und " + arr2[3]);

