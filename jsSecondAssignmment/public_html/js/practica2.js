const CODIGO=25;

function misterio1(domDocument,id){
    if(domDocument.getElementById(id)){
        return domDocument.getElementById(id).innerHTML;
    }
    else{
        return "No existe ese id";
    }
}

function misterio2(domDocument, className){
    let resultado = "No existen con esa clase";
    let elements = domDocument.getElementsByClassName(className);
    if (elements.length > 0)
    {
       resultado = domDocument.getElementsByClassName(className)[0].style.color;
    }
    return resultado;
}
function misterio3(domDocument, tagName){
    let resultado = "No existen con esa etiqueta";
    let elements = domDocument.getElementsByTagName(tagName);
    if (elements.length > 0){
        for (let i = 0; i < elements.length; i++){
            elements[i].id = "el" + tagName + (i+1);
        }
    }
    else{
        return resultado;
    }
    
}
function misterio4(domDocument, tagName, existingClass){
    if (domDocument.querySelector(tagName+"."+existingClass) !== null){
        return true;
    }
    return false;
}

function misterio5(domDocument, classN){
    return domDocument.getElementsByClassName(classN).length;
}
function misterio6(domDocument, newID){
   let element = domDocument.createElement("h1");
   element.id = newID;
   domDocument.body.appendChild(element);
   return true;
}
function misterio7(domDocument, newID, newText, parentID){
   let element = domDocument.createElement("h2");
   element.id = newID;
   let text = domDocument.createTextNode(newText);
   element.appendChild(text);
   let parent = domDocument.getElementById(parentID);
   if(parent !== null){
       parent.appendChild(element);
   }
   else{
       domDocument.body.appendChild(element);
   }
   return parent;
}
function misterio8(domDocument){
    let ulList = domDocument.createElement("ul");
    for (let i = 0; i < 3; i++){
        let liItem = domDocument.createElement("li");
        liItem.className = "linea";
        let liText = domDocument.createTextNode("HOLA");
        liItem.appendChild(liText);
        ulList.appendChild(liItem);
    }
    domDocument.body.appendChild(ulList);
    return ulList;
}
function misterio9(domDocument){
    let liElements = domDocument.getElementsByClassName("linea");
    let parent = domDocument.getElementsByTagName("ul")[0];
    let newValues = Array("primero", "segundo", "tercero");
    
    for (let i = 0; i<liElements.length;i++){
        let liItem = liElements[i];
        liItem.id = newValues[i];
        liItem.innerHTML = newValues[i];
        let liText = domDocument.createTextNode(newValues[i]);
        parent.replaceChild(liItem, liElements[i]);
    }
}

function misterio10(domDocument, newTag, newID, newColor, newBgColor, text){
    let element = domDocument.createElement(newTag);
    element.id = newID;
    element.style.color = newColor;
    element.style.backgroundColor = newBgColor;
    let textNode = domDocument.createTextNode(text);
    element.appendChild(textNode); 
    domDocument.body.appendChild(element);
}
function misterio11(domDocument, idReplace){
    let element = domDocument.getElementById(idReplace);
    if (element !== null){
        element.className = "clase";
    }
    else{
        return "No existe ese id";
    }
    return true;
}
function misterio12(domDocument, selectedID){
    let element = domDocument.getElementById(selectedID);
    if (element === null)
    {
        return 0;
    }
      return domDocument.getElementById(selectedID).childElementCount+1;
}
function misterio13(domDocument, newTitle){
    domDocument.title = newTitle;
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
};