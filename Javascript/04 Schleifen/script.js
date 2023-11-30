
// Zähle von 7 bis 45
// Zähle von 9 bis 99
// Zähle rückwärts von 10 bis 0
// Zähle rückwärts von 1234 bis 1207

// Gib Deinen Namen genau 8 mal aus
// Zähle von 0 auf 10, dann gib Deinen Namen aus, dann zähle 10 auf 0


for(let i = 7; i <= 45; i++){
    console.log(i);
}

for(let i = 9; i <= 99; i++){
    console.log(i);
}

for(let i = 10; i >= 0; i--){
    console.log(i);
}

for(let i = 1234; i >= 1207; i--){
    console.log(i);
}

for(let i = 0; i <= 7; i++){
    console.log("Nedzhetin");
}

for(let i = 0; i <= 10; i++){
    console.log(i);
    if(i  == 10){
        console.log("Nedzhetin");
        for(let j = 10; j >= 0; j-- ){
            console.log(j);
        }
    }
}

