//Bereich auswählen
const body = document.querySelector("body")
//Element erzeugen
const div1 = document.createElement("div")
//HTML Inhalt erzeugen
div1.innerHTML = "Change the DOM"
//Append created Element to chosen Element
body.appendChild(div1)

//  <button onclick="btnRed">Red</button>
function turnRed () {
  document.body.style.backgroundColor = "red";
};

//  <button id="btnBlue">Blue</button>
const btnBlue = document.getElementById("btnBlue")
btnBlue.onclick = () => {
  document.body.style.backgroundColor = "blue"
};

//  <button id="btnGreen">Green</button>   
const btnGreen = document.querySelector("#btnGreen");
btnGreen.addEventListener("click", () => {
  document.body.style.backgroundColor = "green"
});

//read-in text from input field
const submit = document.querySelector("#submit")
submit.addEventListener("click", () => {

  let inputText = document.getElementById("name").value;

  //add input txt to the DOM
  const div2 = document.createElement("div")
  div2.innerHTML = inputText
  body.appendChild(div2)
})









