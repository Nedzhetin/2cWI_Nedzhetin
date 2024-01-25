const boxes = document.getElementsByClassName("box");
let currentPlayer = "X";
let won = false;
let winnerDisplay = document.getElementById("winnerDisplay");


function printBox(x) {
    if (boxes[x].innerHTML == "" && won != true){
        boxes[x].innerHTML = currentPlayer;
        winConditions();
        if(currentPlayer == "X" && won != true){
            currentPlayer = "O";
        }else if (won != true){
            currentPlayer ="X";
        }
    }
    if (won == true) {
        winnerDisplay.classList.add("winnerDisplay");
        console.log(currentPlayer + " won");
        let p = document.createElement("p");
        p.innerHTML = currentPlayer + " won"; 
        p.classList.add("wonText");
        winnerDisplay.appendChild(p);
        let button = document.createElement("button");
        button.classList.add("restartButton");
        button.innerHTML = "restart";
        button.addEventListener("click", function(){
            restartGame();
        });
        winnerDisplay.appendChild(button);

        
    }
}


function restartGame(){
    location.reload();
}



function winConditions(){
    if((boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML && boxes[0].innerHTML != "") ||
    (boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML && boxes[3].innerHTML != "") ||
    (boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML && boxes[6].innerHTML != "") ||
    (boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML && boxes[0].innerHTML != "") ||
    (boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML && boxes[1].innerHTML != "") ||
    (boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML && boxes[2].innerHTML != "") ||
    (boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML && boxes[0].innerHTML != "") ||
    (boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML && boxes[2].innerHTML != "")
    ){
        won = true;
    }

}

