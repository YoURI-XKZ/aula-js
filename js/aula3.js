/*
função 
calcula media
sera chmada
pelo botao
*/
function calculamedia() {
    const tagnota1 = document.querySelector("#nota1")
    const tagnota2 = document.querySelector("#nota2")
    const tagnota3 = document.querySelector("#nota3")
    const tagnota4 = document.querySelector("#nota4")
    const tagresultado = document.querySelector(".resultadomedia")
    const tagbody = document.querySelector("body")

    //* pegando valores
    //^ value = valor dentro da tag

    let nota1 = Number(tagnota1.value)
    let nota2 = Number(tagnota2.value)
    let nota3 = Number(tagnota3.value)
    let nota4 = Number(tagnota4.value)
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(media);


    tagresultado.innerHTML = `a sua media é: ${media.toFixed(1)}`


    if (media >= 6) {
        tagbody.style.backgroundColor = "green"
    }
    else {
        tagbody.style.backgroundColor = "red"
    }
}
