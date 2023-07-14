let element = document.getElementById("typer");
let whatWeWantToType = ['We Are Freelancer', "We Are Designer", "We Are Editor", "We Are Developer", "We Are Raven Digital"];
let i = 0;
let interval = setInterval(function (){
    if (i === whatWeWantToType.length){
        i = 0;
    }
    element.innerHTML = whatWeWantToType[i];
    i++
}, 4000)