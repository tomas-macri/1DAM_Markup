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
let roundNr;

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

    let coordArray = generateSequence(myWidth, myHeight, myLevel);
    let contSeconds = 0;
    cronoInterval = setInterval(addTime, 1000);
    function addTime() {
        let crono = document.getElementById("cronoP");
        crono.innerHTML = "Seconds: " + contSeconds;
        contSeconds++;
    }
    timeBetweenElements = getTime(myLevel);
    playGame();
}


function getTime(level) {
    let result;
    console.log("level: " + level);
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
    console.log("Rewsult: " + result);
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
    keys.style.backgroundColor = colorArray[(i * myWidth) + j];
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
    let messageElement = document.getElementById("playing");
    let pressedBtn = event.target;
    previousColorBtnClicked = pressedBtn.style.backgroundColor;
    pressedBtn.style.backgroundColor = "yellow";


    let coordinates = event.target.id.split('_');

    //event.button === 0 is left click (1 is the wheel and 2 the right click)
    if (coordArray[clicksPl].x === parseInt(coordinates[0]) && coordArray[clicksPl].y === parseInt(coordinates[1]) && event.button === 0) {
        clickCorrect(messageElement);
    } else {
        clickIncorrect(messageElement);
    }
}

function clickCorrect(messageElement) {
    clicksPl++;
    if (clicksPl === roundPl) {
        document.getElementById("scoreP").innerHTML = "Score: " + roundPl;
        roundPl++;
        if (roundPl > roundNr) {
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
    roundNr = myLevel * 5;
    for (let i = 0; i < roundNr; i++) {

        coordArray.push({x: Math.floor(Math.random() * (myWidth)), y: Math.floor(Math.random() * (myHeight))});
        console.log("x: " + coordArray[i].x);
    }
}

function playGame() {
   
    let cont = 0;
    clicksPl = 0;
    let prevCol;
    //delete buttons click event
    disableEventsField();
    console.log("tune" + timeBetweenElements);
    const sequenceInterval = setInterval(showElement, timeBetweenElements);

    function showElement() {
        console.log("masx" + roundPl);
        if (roundPl === 0) {
            prevCol = roundPlis0(cont, prevCol, sequenceInterval);
        } else if (cont === 0) {
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
        console.log(btnSequenceId);
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
        console.log(btnSequenceId);
        prevCol = document.getElementById(btnSequenceId).style.backgroundColor;
        document.getElementById(btnSequenceId).style.backgroundColor = "red";
        return prevCol;
    }

    function contLessRoundPl(cont, prevCol) {
        let previousBtnId = coordArray[cont - 1].x + "_" + coordArray[cont - 1].y;
        console.log("ANTES: " + previousBtnId);
        console.log("Previous color: " + prevCol);
        document.getElementById(previousBtnId).style.backgroundColor = prevCol;


        let btnSequenceId = coordArray[cont].x + "_" + coordArray[cont].y;
        console.log("AHORA:" + btnSequenceId);
        prevCol = document.getElementById(btnSequenceId).style.backgroundColor;
        //a time out so there is a moment where every button has it color
        setTimeout(function () {
            document.getElementById(btnSequenceId).style.backgroundColor = "red";
        }, 150);
        return prevCol;
    }

    function contEqualsRoundPl(cont, prevCol, sequenceInterval) {
        let previousBtnId = coordArray[cont - 1].x + "_" + coordArray[cont - 1].y;
        console.log("ANTES: " + previousBtnId);
        console.log("Previous color: " + prevCol);
        document.getElementById(previousBtnId).style.backgroundColor = prevCol;
        clearInterval(sequenceInterval);
        //after showing the sequence to be followed, we enable de mousedown events
        enableEventsField();
    }



