document.addEventListener("DOMContentLoaded", assignEvents);

let num1;
let num2;
let op;

function assignEvents(){
    let btnNumbers = document.getElementsByClassName("numberButton");
    let btnOps = document.getElementsByClassName("opButton");
    console.log(btnNumbers.length);
    for (let i=0; i<btnNumbers.length;i++){
        btnNumbers[i].addEventListener("click", clickNumber);
    }
    for (let i=0; i<btnOps.length;i++){
        btnOps[i].addEventListener("click", clickOp);
    }
    
    document.getElementById("equalButton").addEventListener("click", showResult);
    
}

function clickNumber(event){
    inputText = document.getElementById("txtCuenta");
    if(inputText.value === "0"){
        inputText.value="";
    }
    document.getElementById("txtCuenta").value += event.target.value;
}

function clickOp(event){
    inputText = document.getElementById("txtCuenta");
    
        // infinite sumas
    
//    else{
       op = event.target.value;
       if (isNaN(num1)){
           num1 = parseInt(inputText.value);
       }
       else if (isNaN(num2))
       {
           num2 = parseInt(inputText.value);
       }
       else{
           showResult();
       }
       inputText.value = "0";      
  //  }

}

function showResult(){
    inputText = document.getElementById("txtCuenta");
    let result;
    if (isNaN(num1)){
        num1 = parseInt(inputText.value);
    }
    if (isNaN(num2)){
        num2 = parseInt(inputText.value);
        }
    
    console.log(op);
    switch(op){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2!== 0){
                result = num1 / num2;
            }
            else{
                alert("You can not divide by 0");
                result=num1;
            }
            break;
        default:
            result = num1;
            break;
    }
    inputText.value = result;
    num1=undefined;
    num2=undefined;
    op=undefined;
}
