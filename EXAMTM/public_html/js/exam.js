/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.addEventListener("DOMContentLoaded", assignEvents);

// array with src and title of the brands
const arrayIMG = ["apple", "burger king", "coca cola", "firefox", "heineken",
    "hewlett packard", "lays", "mitsubishi", "nike", "nissan",
    "pepsi", "pringles", "puma", "seat", "volkswagen"];

let sequenceInterval;

function assignEvents(){
    document.getElementById("start").addEventListener("click", startGame);
}


function startGame(){
    //first, we disable the button and the dropdown
    disableBeginButtons();
    
    document.getElementById("brand").innerHTML = arrayIMG[Math.floor(Math.random() * arrayIMG.length)];
    document.getElementById("ima").addEventListener("click", compareIMG);
    
    //we start showing images
    sequenceInterval = setInterval(showImage, getDifficulty());
}
function getDifficulty(){
    //we get the index of the option selected in the combo
    indexSelected = document.getElementById("mode").selectedIndex;
    let time;
    //depending on the index, we assign the amount of miliseconds
    switch(indexSelected){
        case 0:
            time = 2000;
            break;
        case 1:
            time = 1000;
            break;
        case 2:
           time = 500;
           break;
    }
    return time;
}

function showImage(){
        //we change the src of the image
        document.getElementById("ima").src = "img/"+arrayIMG[Math.floor(Math.random() * arrayIMG.length)]+".jpg";
    }
    
function compareIMG(event){
    //we get the src of the image
    let srcNow = event.target.src;
    //we keep only what is between the img/ and .jpg from the image src
    srcNow = srcNow.substring(srcNow.toLocaleString().lastIndexOf('/') + 1, srcNow.indexOf('.jpg'));
    //we change the %20 by ' ';
    srcNow = srcNow.replace('%20', ' ');
    
    //we get the right and wrong elements
    let rightIn = document.getElementById("right");
    let wrongIn = document.getElementById("wrong");
    
    //if the title is the same as the path of the event.target
    if (document.getElementById("brand").innerHTML === srcNow){
        //right value ++
        rightIn.value++;
    }
    else{
        //wrong value ++
        wrongIn.value++;
    }
    if (wrongIn.value < 3 && rightIn.value < 3){
        //if the player didn't win or lose, we get a new brand
        document.getElementById("brand").innerHTML = arrayIMG[Math.floor(Math.random() * arrayIMG.length)];
    }
    else{
        //the game has finished, we check if you win or you lost
        endGame(rightIn.value, event.target);
    }
}

function endGame(rights, img){
    let finalSrc;
    let finalText;
    if (rights === "3"){
        //you won
        finalSrc = "img/wellDone.jpg";
        finalText = "YOU ARE A GENIOUS";
    }
    else{
        //you lost
        finalSrc = "img/gameOver.jpg";
        finalText = "YOU ARE A DISASTER :/";
    }
    // we set the final status of the page
    setFinalElements(img, finalText, finalSrc);
}

function setFinalElements(img, finalText, finalSrc){
    document.getElementById("brand").innerHTML = finalText;
    clearInterval(sequenceInterval);
    img.removeEventListener("click", compareIMG);
    img.src = finalSrc;    
}

function disableBeginButtons(){
    document.getElementById("mode").disabled = true;
    document.getElementById("start").disabled = true;
}