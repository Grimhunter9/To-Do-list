var add=document.getElementById("add");
var box=document.getElementById("container");

//adding tasks into the div:
add.addEventListener("click",function(){
var content =prompt("Write your task here","");


var object=document.createElement("div");
var check=document.createElement("input")
var lab=document.createElement("label");
var icon=document.createElement("i");




object.className="obj";
lab.className="pa";
icon.className="fa fa-trash-o";
check.type="checkbox";



box.appendChild(object);

object.appendChild(check);
object.appendChild(lab);
object.appendChild(icon);

lab.innerHTML=content;

icon.addEventListener("click",function(){
    object.parentNode.removeChild(object);  
})

})






  







