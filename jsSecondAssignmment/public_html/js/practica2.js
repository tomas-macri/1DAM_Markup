const CODIGO=25;
console.log(misterio8(`<!DOCTYPE html>
          <html><head></head>
                <body>
                <h1 id="ejemploh1" class="verde" style="color:red">Este es un h1</h1>
                <h1 class="rojo" style="color:red">Este es un h1 rojo</h1>
                <h1 class="clase">primero</h1>
                <h1 class="clase">segundo</h1>
                <h1 class="clase">3</h1>
                <h1 class="clase">4</h1>
                <div class="clase">puede</div>
                <p id="test" class="clase">ask</p>
                <h2 id="unh2" class="clase">puede</h2>
                </body>
            </html>`));

function misterio1(document,id){
    if(document.getElementById(id)){
        return document.getElementById(id).innerHTML;
    }
    else{
        return "No existe ese id";
    }
}

function misterio2(doument, className){
    let resultado = "No existen con esa clase";
    let elements = document.getElementsByClassName(className);
    if (elements.length > 0)
    {
       resultado = document.getElementsByClassName(className)[0].style.color;
    }
    return resultado;
}
function misterio3(DOMDocument, tagName){
    let resultado = "No existen con esa etiqueta";
    let elements = document.getElementsByTagName(tagName);
    if (elements.length > 0){
        for (let i = 0; i < elements.length; i++){
            elements[i].id = "el" + tagName + (i+1);
        }
    }
    else{
        return resultado;
    }
    
}
function misterio4(){
    return true;
}
function misterio5(){
    return true;
}
function misterio6(DOMDocument, newID){
   let element = document.createElement("h1");
   element.id = newID;
   document.body.appendChild(element);
   return true;
}
function misterio7(DOMDocument, newID, newText, parentID){
   let element = document.createElement("h2");
   element.id = newID;
   let text = document.createTextNode(newText);
   element.appendChild(text);
   let parent = document.getElementById(parentID);
   if(parent !== null){
       parent.appendChild(element);
   }
   else{
       document.body.appendChild(element);
   }
   return parent;
}
function misterio8(DOMDocument){
    let ulList = document.createElement("ul");
    for (let i = 0; i < 3; i++){
        let liItem = document.createElement("li");
        liItem.className = "linea";
        let liText = document.createTextNode("HOLA");
        liItem.appendChild(liText);
        ulList.appendChild(liItem);
    }
    document.body.appendChild(ulList);
    return ulList;
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