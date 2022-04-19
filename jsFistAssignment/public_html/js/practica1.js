console.log(misterio20([23],0));
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
            return "Enero";
        case 2:
        case'2':
            return "Febrero";
        case 3: 
        case '3':
            return "Marzo";
        case 4:
        case '4':
            return "Abril";
        case 5:
        case '5':
            return "Mayo";
        case 6:
        case '6':
            return "Junio";
        case 7:
        case '7':
            return "Julio";
        case 8:
        case '8':
            return "Agosto";
        case 9:
        case '9':
            return "Septiembre";
        case 10:
        case '10':
            return "Octubre";
        case 11:
        case '11':
            return "Noviembre";
        case 12: 
        case '12':      
            return "Diciembre";
        default:
            return "No es un mes";
    }
}

function misterio3(op, num1, num2) {
    let resultado;
    if (op !== "suma" && op !== "resta" && op !== "multiplicación" && op !== "división"){
        resultado = "Introduce operación válida";
    }  
    else{
        if (!(typeof (num1) === "number" && typeof (num2) === "number")){
            resultado = "Los valores no son números";
        }
        else{
            switch (op){
                case "suma":
                    resultado = num1+num2;
                    break
                case "resta":
                    resultado = num1-num2;
                    break
                case "multiplicación":
                    resultado = num1*num2;
                    break
                case "división":
                    if (num2 === 0){
                        resultado = "No dividir por 0";
                    }
                    else{
                        resultado = num1/num2;
                    }
                    break
            }
        }
    }
    return resultado;
}


function misterio4(dni, letter) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 
letter = letter.toUpperCase();
    let resultado = "El número no es válido";
    if (typeof (dni) === "number" && dni >= 0 && dni <= 999999999){
        posiLetraCorrecta = dni%23;
       
        if(letras[posiLetraCorrecta] === letter){
            resultado = "El DNI es correcto";
        }
        else{
            resultado = "La letra o el número proporcionados no son correctos";
        }
    }
    return resultado;
}
function misterio5(array) {
    let resultado;
    if (!Array.isArray(array) || array.length < 3){
        resultado="No es posible";
    }
    else{
        resultado=array[2];
    }
    return resultado;
}
function misterio6(letter) {
    letter = letter.toString().toUpperCase();
    let resultado;
    switch(letter){
        case "A":
            resultado = "Nota entre 8 y 10";
            break;
        case "B":
            resultado = "Nota entre 6.5 y 8";
            break;
        case "C":
            resultado = "Nota entre 5 y 6.5";
            break;
        case "D":
            resultado = "Nota entre 4 y 5";
            break;
        case "E":
            resultado = "Nota entre 0 y 4";
            break;
        default:
            resultado= "Introduce una nota válida";
            break;
    }
    return resultado;
}
                                                                   
function misterio7(number) {
    number = parseInt(number);
    let resultado;
    if (Number.isNaN(number) || number < 0){
        resultado = "Introduce un número positivo";
    }
    else{
        let i=1;
        numberAdded = number;
        while (numberAdded < 100){
            i++;
            numberAdded+=number;
        }
        resultado = i;
    }
    return resultado;
}
function misterio8(number) {
    number = parseInt(number);
    let resultado="";
    if (Number.isNaN(number) || number < 1 || number > 9){
        resultado = "Introduce un número de 1 a 9";
    }
    else{
        for (i=1;i<=9;i++){
            resultado+=i + "x" + number + "=" + i*number;
            if (i===9){
                resultado+=".";
            }
            else{
                resultado+=",";
            }
        }
    }
    return resultado;
}

function misterio9(rows, columns) {
    let resultado = "Introduce dos números positivos menores que 10";
    if (rows < 10 && typeof rows==="number" && columns <10 && typeof columns==="number"){
        resultado = "<table>";
        for (i = 0; i < rows;i++){
            resultado+="<tr>";
            for (j = 0; j < columns; j++){
                resultado+="<td></td>";
            }
            resultado+="</tr>";
        }
        resultado+="</table>";
    }
    return resultado;
}
                                                                                            
function misterio10() {
    return "Hoy es el día " + new Date().getDay() + " del mes " + new Date().getMonth();
}
function misterio11(word) {
    let resultado;
    if (typeof word !== "string")
    {
        resultado="Mete un string";    
    }
    else{
        resultado="";
        if(word.length > 10)
        {
            resultado="substring:"+word.substring(1,4);
        }
        else{
            resultado="longitud:"+word.length;
        }
    }
    return resultado;
}
function misterio12(word) {
    let resultado;
    if (typeof word !== "string")
    {
        resultado="Mete un string";
    }
    else{
        resultado="";
        for(i=word.length-1; i>=0;i--){
            resultado+=word[i];
        }
    }
    return resultado;
}
function misterio13(word) {
     let resultado;
    if (typeof word !== "string")
    {
        resultado="Mete un string";
    }
    else{
        resultado=word.toString().toUpperCase();
    }
    return resultado;
}
function misterio14(sentence) {
    if (typeof sentence !== "string")
    {
        return "Mete un string";
    }
    else {
        if (sentence.includes("DAM")){
            return true;
        }
        else{
            return false;
        }
    }
}
function misterio15(name, sur1, sur2) {
    let resultado="";
    if (typeof name !== "string" || typeof sur1 !== "string" || typeof sur2 !== "string")
    {
        resultado = "Alguno no es string";
    }
    else{
        resultado={firstname: name, lastname1: sur1, lastname2: sur2}; 
        resultado = JSON.stringify(resultado);
    }
    return resultado;
}
function misterio16(sentence) {
    if (typeof sentence !== "string")
    {
        return "Mete un string";
    }
    else {
        return sentence.replace("suspender", "aprobar");
    }
    return true;
}
function misterio17(arrayNum) {
    let resultado="<ul>";
    for (i=0; i<arrayNum.length; i++){
        resultado+="<li>" + arrayNum[i] + "</li>";
    }
    resultado+="</ul>";
    return resultado;
}
function misterio18(arrayNum) {
   let resultado="<ol>";
    for (i=arrayNum.length-1; i>=0; i--){
        resultado+="<li>" + arrayNum[i] + "</li>";
    }
    resultado+="</ol>";
    return resultado;
}
function misterio19(code) {
    code = JSON.stringify(code);
    code = JSON.parse(code);
    return code.nombre + " " + code.apellido1 + " " + code.apellido2 + "." ;
}
function misterio20(arrayNum, index) {
    let resultado = "No es posible";;
    if(typeof index === "number" && Array.isArray(arrayNum) && index < arrayNum.length){
        resultado={resultado: arrayNum[index]};
        resultado = JSON.stringify(resultado);
    }
    return resultado;
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
};