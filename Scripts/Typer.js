let element = document.getElementById("typer");
let whatWeWantToType = ['Freelancer', "Designer", "Editor", "Developer"];
let i = 0;
let interval = setInterval(function (){
    if (i === whatWeWantToType.length){
        i = 0;
    }
    element.innerHTML = whatWeWantToType[i];
    i++
}, 4000)