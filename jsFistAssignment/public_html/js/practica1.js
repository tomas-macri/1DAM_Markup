console.log(misterio3("división",2,2))
const CODIGO = 25;

function misterio1(edad) {
    if (typeof (edad) === "number" && edad >= 18 && edad <= 120) {
            return "Puedes conducir";
    } else {
        return "Introduce un numero válido";
    }
}

function misterio2(number) {
    switch (number){
        case 1:
        case'1':
            return "Enero"
        case 2:
        case'2':
            return "Febrero"
        case 3: 
        case '3':
            return "Marzo"
        case 4:
        case '4':
            return "Abril"
        case 5:
        case '5':
            return "Mayo"
        case 6:
        case '6':
            return "Junio"
        case 7:
        case '7':
            return "Julio"
        case 8:
        case '8':
            return "Agosto"
        case 9:
        case '9':
            return "Septiembre"
        case 10:
        case '10':
            return "Octubre"
        case 11:
        case '11':
            return "Noviembre"
        case 12: 
        case '12':      
            return "Diciembre"
        default:
            return "No es un mes"
    }
}

function misterio3(op, num1, num2) {
    let resultado
    if (op != "suma" && op != "resta" && op != "multiplicación" && op != "división"){
        resultado = "Introduce operación válida"
    }  
    else{
        if (!(typeof (num1) === "number" && typeof (num2) === "number")){
            resultado = "Los valores no son números"
        }
        else{
            switch (op){
                case "suma":
                    resultado = num1+num2
                    break
                case "resta":
                    resultado = num1-num2
                    break
                case "multiplicación":
                    resultado = num1*num2
                    break
                case "división":
                    if (num2 == 0){
                        resultado = "No dividir por 0"
                    }
                    else{
                        resultado = num1/num2
                    }
                    break
            }
        }
    }
    return resultado
}


function misterio4(dni, letter) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 
letter = letter.toUpperCase();
    let resultado = "El número no es válido"
    if (typeof (dni) == "number" && dni >= 0 && dni <= 999999999){
        posiLetraCorrecta = dni%23
       
        if(letras[posiLetraCorrecta] == letter){
            resultado = "El DNI es correcto"
        }
        else{
            resultado = "La letra o el número proporcionados no son correctos" 
        }
    }
    return resultado;
}
function misterio5() {
    return true;
}
function misterio6() {
    return true;
}
function misterio7() {
    return true;
}
function misterio8() {
    return true;
}
function misterio9() {
    return true;
}
function misterio10() {
    return true;
}
function misterio11() {
    return true;
}
function misterio12() {
    return true;
}
function misterio13() {
    return true;
}
function misterio14() {
    return true;
}
function misterio15() {
    return true;
}
function misterio16() {
    return true;
}
function misterio17() {
    return true;
}
function misterio18() {
    return true;
}
function misterio19() {
    return true;
}
function misterio20() {
    return true;
}



module.exports = {
    misterio1,
    misterio2,
    misterio3,
    misterio4,
    misterio5,
    misterio6,
    misterio7,
    misterio8,
    misterio9,
    misterio10,
    misterio11,
    misterio12,
    misterio13,
    misterio14,
    misterio15,
    misterio16,
    misterio17,
    misterio18,
    misterio19,
    misterio20,
    CODIGO
}