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

//the array of coordinates
let coordArray = Array();

//maximum number of rounds that can be played
let totalMines;

// this will tell us on what round is the user playing. It always begins in 1.
let roundPl = 1;

//this will tell us how many times has the user clicked during the current round
let clicksPl;

//crono interval so it can be accesed when the player ends the game
let cronoInterval;

//time between elements depends of the level of difficutlty chosen
let timeBetweenElements;

function startGame() {
    let myWidth = document.getElementById("columns").value;
    let myHeight = document.getElementById("rows").value;
    let myLevel = document.getElementById("level").value;

    disableBeginButtons();
    displayBlockMessageAndCounters();
    drawField(myWidth, myHeight);

    generateSequence(myWidth, myHeight, myLevel);
    /*let contSeconds = 0;
    cronoInterval = setInterval(addTime, 1000);
    function addTime() {
        let crono = document.getElementById("cronoP");
        crono.innerHTML = "Seconds: " + contSeconds;
        contSeconds++;
    }
    timeBetweenElements = getTime(myLevel);
    playGame();*/
}


function getTime(level) {
    let result;
    switch (level) {
        case "1":
            result = 1000;
            break;
        case "2":
            result = 800;
            break;
        case "3":
            result = 500;
            break;
    }
    return result;
}


function displayBlockMessageAndCounters() {
    document.getElementById("message").style.display = "block";
    document.getElementById("crono").style.display = "block";
    document.getElementById("score").style.display = "block";
}

function disableBeginButtons() {
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

function createButton(i, myWidth, j) {
    let keys = document.createElement("button");
    let newId = j + "_" + i;

    keys.id = newId;
    keys.className = "btnField";
    keys.name = "btnField";
    //cambio - colores grises
    keys.style.backgroundColor = "lightgrey";
    return keys;
}

function enableEventsField() {
    let fieldButtons = document.getElementsByName("btnField");
    for (i = 0; i < fieldButtons.length; i++) {
        fieldButtons[i].addEventListener("mousedown", check);
        fieldButtons[i].addEventListener("mouseup", rePaintButton);
    }
}

function disableEventsField() {
    let fieldButtons = document.getElementsByName("btnField");
    for (i = 0; i < fieldButtons.length; i++) {
        fieldButtons[i].removeEventListener("mousedown", check);
        fieldButtons[i].removeEventListener("mouseup", rePaintButton);
    }
}

let previousColorBtnClicked;

function rePaintButton(event) {
    document.getElementById(event.target.id).style.backgroundColor = previousColorBtnClicked;
}

function check(event) {
    console.log("click on " + event.target.id);
    let messageElement = document.getElementById("playing");
    let coordinates = event.target.id.split('_');
    
    let found = false;
    let text = "It's safe here";
    for (let i = 0; i < coordArray.length && !found; i++){
        if (parseInt(coordinates[0]) === coordArray[i].x && parseInt(coordinates[1]) === coordArray[i].y){
            found = true;
            console.log(coordArray[i].x + "" + coordArray[i].y);
            text = "You found a mine in " + coordinates;
        }
    }
    messageElement.innerText = text;
    
    
    
    
    
    /*let messageElement = document.getElementById("playing");
    let pressedBtn = event.target;
    previousColorBtnClicked = pressedBtn.style.backgroundColor;
    pressedBtn.style.backgroundColor = "yellow";


    let coordinates = event.target.id.split('_');

    //event.button === 0 is left click (1 is the wheel and 2 the right click)
    if (coordArray[clicksPl].x === parseInt(coordinates[0]) && coordArray[clicksPl].y === parseInt(coordinates[1]) && event.button === 0) {
        clickCorrect(messageElement);
    } else {
        clickIncorrect(messageElement);
    }*/
}

function clickCorrect(messageElement) {
    clicksPl++;
    if (clicksPl === roundPl) {
        document.getElementById("scoreP").innerHTML = "Score: " + roundPl;
        roundPl++;
        if (roundPl > totalMines) {
            //end game - YOU WON
            //this function is in an timeout so we don't get a bug
            setTimeout(disableEventsField, 200);
            let text = "YOU WON!!!!!!!!!";
            messageElement.innerHTML = text;
            clearInterval(cronoInterval);
        } else {
            //this function is in an timeout so we don't get a bug
            //next round
            setTimeout(playGame, 200);
        }
    }
}

function clickIncorrect(messageElement) {
    //end game - YOU LOST
    setTimeout(disableEventsField, 200);
    let text = "YOU LOST :(";
    messageElement.innerHTML = text;
    clearInterval(cronoInterval);
}

function generateSequence(myWidth, myHeight, myLevel) {
    totalMines = myLevel * 2;
    let xPos;
    let yPos;
    for (let i = 0; i < totalMines; i++) {
        do{
        xPos = Math.floor(Math.random() * (myWidth));
        yPos = Math.floor(Math.random() * (myHeight));
    }while(coordExist(xPos + "" + yPos))
        coordArray.push({x: xPos, y: yPos});
    }
    console.log(coordArray);
}

function coordExist(code){
    exists = false;
    for (let i = 0; i < coordArray.length && !exists; i++){
        if (code === coordArray[i].x + coordArray[i].y + ""){
            exists = true;
        }
    }
    return exists;
}

function playGame() {
   
    let cont = 0;
    clicksPl = 0;
    let prevCol;
    //delete buttons click event
    disableEventsField();
    const sequenceInterval = setInterval(showElement, timeBetweenElements);

}























// cambio - innecesario
    /*function showElement() {
        if (cont === 0) {
            prevCol = roundPlnot0Cont0(cont, prevCol);
        } else if (cont < roundPl) {
            prevCol = contLessRoundPl(cont, prevCol);
        } else if (cont === roundPl) {
            prevCol = contEqualsRoundPl(cont, prevCol, sequenceInterval);
        }
        cont++;
    }

    
}

function roundPlis0(cont, prevCol, sequenceInterval) {
        let btnSequenceId = coordArray[cont].x + "_" + coordArray[cont].y;
        prevCol = document.getElementById(btnSequenceId).style.backgroundColor;
        document.getElementById(btnSequenceId).style.backgroundColor = "red";
        setInterval(function () {
            document.getElementById(btnSequenceId).style.backgroundColor = prevCol;
        }, 1000);
        clearInterval(sequenceInterval);
        enableEventsField();
        return prevCol;

    }

    function roundPlnot0Cont0(cont, prevCol) {
        let btnSequenceId = coordArray[cont].x + "_" + coordArray[cont].y;
        prevCol = document.getElementById(btnSequenceId).style.backgroundColor;
        document.getElementById(btnSequenceId).style.backgroundColor = "red";
        return prevCol;
    }

    function contLessRoundPl(cont, prevCol) {
        let previousBtnId = coordArray[cont - 1].x + "_" + coordArray[cont - 1].y;
        document.getElementById(previousBtnId).style.backgroundColor = prevCol;


        let btnSequenceId = coordArray[cont].x + "_" + coordArray[cont].y;
        prevCol = document.getElementById(btnSequenceId).style.backgroundColor;
        //a time out so there is a moment where every button has it color
        setTimeout(function () {
            document.getElementById(btnSequenceId).style.backgroundColor = "red";
        }, 150);
        return prevCol;
    }

    function contEqualsRoundPl(cont, prevCol, sequenceInterval) {
        let previousBtnId = coordArray[cont - 1].x + "_" + coordArray[cont - 1].y;
        document.getElementById(previousBtnId).style.backgroundColor = prevCol;
        clearInterval(sequenceInterval);
        //after showing the sequence to be followed, we enable de mousedown events
        enableEventsField();
    }


*/