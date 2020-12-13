var btnTranslate = document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");


function clickeventhandler() {
    console.log("clicked");
console.log("input:"+ txtinput.value);}


btnTranslate.addEventListener("click", clickeventhandler)



