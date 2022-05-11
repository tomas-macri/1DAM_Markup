/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.addEventListener("DOMContentLoaded", assignEvents);

function assignEvents() {
    document.getElementById("btnCreateField").addEventListener("click", startGame);
}
    const colorArray = ['#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    
function startGame() {
    let myWidth = document.getElementById("columns").value;
    let myHeight = document.getElementById("rows").value;
    let myLevel = document.getElementById("level").value;

    disableBeginButtons();
    displayBlockMessageAndCounters();   
    drawField(myWidth, myHeight);
    
    generateSequence(myWidth, myHeight, myLevel);
    
}

function generateSequence(x, y, level){
    
}

function displayBlockMessageAndCounters(){
    document.getElementById("message").style.display = "block";
    document.getElementById("crono").style.display = "block";
    document.getElementById("score").style.display = "block";
}

function disableBeginButtons(){
    document.getElementById("rows").disabled = true;
    document.getElementById("columns").disabled = true;
    document.getElementById("level").disabled = true;
    document.getElementById("btnCreateField").disabled = true;
}

function drawField(myWidth, myHeight) {
    for (i = 0; i < myHeight; i++) {
        for (j = 0; j < myWidth; j++) {
            
            let keys = createButton(i, myWidth, j);
            document.getElementById("field").appendChild(keys);
        }
        let space = document.createElement("br");
        document.getElementById("field").appendChild(space);
    }
    enableEventsField();
}

function createButtons(i, myWidth, j){
    let keys = document.createElement("button");
    let newId = j + "_" + i;

    keys.id = newId;
    keys.className = "btnField";
    keys.name = "btnField";
    keys.style.backgroundColor = colorArray[(i * myWidth) + j];
    return keys;
}

function enableEventsField() {
    let fieldButtons = document.getElementsByName("btnField");
    for (i = 0; i < fieldButtons.length; i++) {
        fieldButtons[i].addEventListener("mousedown", check);
    }
}

function check(event) {
    let messageElement = document.getElementById("playing");
    let coordinates = event.target.id.split('_');
    let text = "The button " + coordinates + " has been clicked";
    messageElement.innerHTML = text;
}



