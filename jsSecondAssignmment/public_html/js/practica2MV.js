
const CODIGO=25;

function misterio1(htmlDocument,id){
    if(htmlDocument.getElementById(id)){
        return htmlDocument.getElementById(id).innerHTML;
    }
    else{
        return "No existe ese id";
    }
}

function misterio2(){
    return true;
}
function misterio3(htmlDocument, tagName){
    let elements = htmlDocument.getElementsByTagName(tagName);
    let result;
    
    if (elements.length === 0) {
        result = "No existen con esa etiqueta";
    }
    else {
        for(i=0; i < elements.length; i++){
            elements[i].id = "el" + tagName + (i+1);
        }
        result = elements;
    }
    return result;
}
function misterio4(){
    return true;
}
function misterio5(){
    return true;
}
function misterio6(htmlDocument, newId){
    element = htmlDocument.createElement("h1");
    element.id = newId;
    htmlDocument.body.appendChild(element);
    return true;
}
function misterio7(htmlDocument, newId, text, parentId){
    element = htmlDocument.createElement("h2");
    element.id = newId;
    let node = htmlDocument.createTextNode(text);
    element.appendChild(node);
    let parentElement = htmlDocument.getElementById(parentId);
    if(parentElement !== null){
        parentElement.appendChild(element);
    }
    else {
        htmlDocument.body.appendChild(element);
    }
    return true;
}
function misterio8(htmlDocument){
    unList = htmlDocument.createElement("ul");
    for (i=0; i<3; i++){
        listItem = htmlDocument.createElement("li");
        let node = htmlDocument.createTextNode("HOLA");
        //d.className += " otherclass";
        listItem.className = "linea";
        listItem.appendChild(node);
        unList.appendChild(listItem);
    }      
    htmlDocument.body.appendChild(unList);
    return true;
}
function misterio9(){
    return true;
}
function misterio10(){
    return true;
}
function misterio11(){
    return true;
}
function misterio12(){
    return true;
}
function misterio13(){
    return true;
}
function misterio14(){
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
    CODIGO
}