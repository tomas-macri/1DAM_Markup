/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

          document.addEventListener('DOMContentLoaded', assignEvents);
        
            function assignEvents(){
                
                document.getElementById("imgMessi").addEventListener("click", replaceIMG);
            }
            
            function replaceIMG(){
                let actual = document.getElementById("imgMessi");
                let par = document.createElement("p");
                let text = document.createTextNode("this is a p from 2b");
                par.appendChild(text);
                document.body.replaceChild(par, actual);
            }
