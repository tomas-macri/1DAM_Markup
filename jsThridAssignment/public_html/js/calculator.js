document.addEventListener("DOMContentLoaded", assignEvents);

function assignEvents(){
    let btnNumbers = document.getElementsByClassName("numberButton");
    
    console.log(btnNumbers.length);
    for (let i=0; i<btnNumbers.length;i++){
        btnNumbers[i].addEventListener("click", clickNumber);
    }
}

function clickNumber(event){
    alert(event.id);
        
}

