let nome = "clube da luta"


document.write("<h3>Selecionado: ", nome[6], "</h3>");


//* seleção apos o limite
console.log(" a 14ª letra é: ", nome[14])
//^ abaixo do minimo
console.log(" a -2 letra é: ", nome[-2])






//* funções string---------------------------------------

console.log("o indice 8 é: ", nome.charAt(8));

let frase = "e eu sinto Shadow no meu cu, larissa não quero teus beijus";
console.log('O indice de "Shadow" É: ', frase.indexOf("Shadow"));


let frase2 = "só me apaixono por ouriços pretos ou com azuils nos pelos";

console.log = ('o indice de "ouriços" é: ', frase2.indexOf("aranha"))

//* função replace - substitui um string dentro de texto


//^ expressão regular (controle avançado de strings)

console.log ("================lastindexof====================")

console.log("buscando a letra do final ao começo: ", frase2.lastIndexOf("a"));
//* --------------------------------------------------------------------------------------




let substring = "peter parker".slice(6,11);
