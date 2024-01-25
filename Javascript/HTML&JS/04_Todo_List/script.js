let submitButton = document.getElementById("button");
let inputText = document.getElementById("innerText");
let list = document.getElementById("list");

submitButton.addEventListener("click", function() {
   let paragraph = document.createElement("p");
   let delButton = document.createElement("button");
   delButton.innerHTML = "delete";
   paragraph.innerHTML = innerText.value;
   paragraph.appendChild(delButton);
   delButton.addEventListener("click", function() {
      paragraph.remove();
   });
   paragraph.classList.add("item");
   delButton.classList.add("deleteButton");
   paragraph.classList.add("paragraphStyle");
   list.appendChild(paragraph);
   inputText.value = "";
});