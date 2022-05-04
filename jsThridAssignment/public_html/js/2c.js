/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


       document.addEventListener('DOMContentLoaded', assignEvents);
        
            function assignEvents(){
                
                document.getElementById("imgMessi").addEventListener("click", hideIMG);
            }
            
            function hideIMG(){
                let img = document.getElementById("imgMessi");
                let p = document.getElementById("p1");
                
                p.style.display="block";
                img.style.display="none";
            }