document.getElementById("textEditor").value =
   localStorage["file"] || ""; // default text

   
   setInterval(function () { 
    localStorage["file"] = document.getElementById("textEditor").value + ' ';
    console.log(document.getElementById("textEditor").value)

   }, 1000);

function saveFile() {
    var blob = new Blob([document.getElementById("textEditor").value],
       { type: "text/plain;charset=utf-8" });
    saveAs(blob, "luminaryDocument.html");
 }


let abus = 'color: var(--mercury); background-color: var(--luminary); border-style: solid; border-color: var(--mercury); border-width: 1px; padding: 5px; opacity: 0.5;'



function defaultMenu(){
    document.getElementById("ide-menu-item-1").style = abus
    document.getElementById("ide-menu-item-2").style = abus
    document.getElementById("ide-menu-item-3").style = abus
}

const node = document.createElement("div");

function insertBody(){
    var editorContent = document.getElementById("textEditor").value
    document.getElementById("ide-body").innerHTML = editorContent
    
}

function updateBody(){
    var bodyContent = document.getElementById("ide-body").innerHTML
    document.getElementById("textEditor").value = bodyContent
    
    

}