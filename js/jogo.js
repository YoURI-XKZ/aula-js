let playerscre = 0
let machinescr = 0

const playerscredisplay = document.getElementById("playerscore")
const machinescrdisplay = document.getElementById("machinescore")
const resultdisplay = document.getElementById("result")
const body = document.body;

const btnrock = document.getElementById ("rock")
const btnpaper = document.getElementById ("paper")
const btnscissor = document.getElementById ("scissor")

//-------------------------------------------------------------
btnrock.addEventListener("click", function(){
    playround("pedra");
})

btnpaper.addEventListener("click", function(){
    playround("pedra");
})

btnscissor.addEventListener("click", function(){
    playround("pedra");
})

function getmachinechoice(){
    const choices = ["pedra","papel","tesoura"];
    const randomindex = Math.floor(Math.random()* choices.length);
    return choices [randomindex];

    

}
///^ random * possibilidades)  ( lengh tamanho na da variavel)

function playround(playerchoice){
    //* machinechoice recebe retorno da função getmachinechoice, escolhe 
    const machinechoice = getmachinechoice();
    let result;
}


