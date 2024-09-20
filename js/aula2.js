let nome = "Harry Potter";
 
 
document.write("<h3>Selecionado: ", nome[6], "</h3>");
 
// * POSSIVEIS ERROS
 
// ^ SELEÇÃO ALÉM DO LIMITE
 
console.log("A 14ª letra é: ", nome[14]);
// ^ SELEÇÃO ABAIXO DO MINIMO
console.log("A -2ª letra é: ", nome[-2]);
 
 
//* ----------------------funções string ----------------------
 
// ^ CHARAT - encontra o caractere em...(indice)
 
console.log("O índice 8 é: ", nome.charAt(8));
 
 
// ^ INDEXOF - Encontra o índice de uma palavra.
 
let frase = "Batatinha quando nasce espalha a rama pelo chão";
console.log('O índice de "rama" É: ', frase.indexOf("rama"));
// todo Quando não encontra ele retorna -1
console.log('O índice de "aranha" É: ', frase.indexOf("aranha"));
 
// * O segundo argumento de indexOf
let frase2 = "A aranha arranha a rã. A rã arranha a aranha. Nem a aranha arranha a rã. Nem a rã arranha a aranha";
 
console.log('Indice de "aranha" É:', frase2.indexOf("aranha", 12));
// * Apòs o ponto
console.log('Após o ponto', frase2.indexOf("aranha", frase2.indexOf(".", 38)));
 
// * Função Replace - Substitui uma string por outra dentro de um texto
 
console.log("=========REPLACE=========");
 
// ^ Inverte só a primeira palavra encontrada (A PRIMEIRA ARANHA)
console.log("Substituindo a aranha: ", frase2.replace("aranha", "cachorro"));
 
// ^ Invertendo todas as aranhas
// ^ Com expressão regular (Controle avançado de strings)
console.log("Substituindo a aranha: ", frase2.replace(/aranha/g, "cachorro"));
 
console.log("=========LASTINDEXOF=========");
//* Funciona como o indexOf porém buscando do final para o começo
 
console.log("Buscando da direita para a esquerda: ", frase2.lastIndexOf("a"));
 
console.log("=========Slice=========");
 
let subString = "Peter Parker".slice(6, 12);
 
console.log(subString);
console.log(subString.slice(3, 6));
 
//* CORTANDO O PRIMEIRO NOME
 
let nomeStr = "Sucrilhos Flakes Brasil Japão";
 
console.log(nomeStr.slice(0, nomeStr.indexOf(" ")));
 
//* CORTANDO O SEGUNDO NOME
console.log(nomeStr.slice(nomeStr.indexOf(" ")+1, nomeStr.indexOf(" ", nomeStr.indexOf(" ")+1)));
 
console.log("=========Length=========");
 
//* Descobrindo o comprimento de uma string
 
let meuNome = "Kleber Lucas da Silva";
 
console.log("O comprimento do meu nome é: ", meuNome.length);
 
console.log("A ultima letra é: ", "Arnold Schwarzenegger"["Arnold Schwarzenegger".length-1])
 
console.log("=========TRIM=========");
 
//* TRIM - REMOVE OS ESPAÇOS EXTRAS ENVOLTA DA STRING
 
let entrada = "   Javascript      ";
 
let entradaSemEspaco = entrada.trim();
 
console.log(entrada, "Sem o trim: ", entrada.length);
console.log(entradaSemEspaco, "Com o trim: ", entradaSemEspaco.length);
 
 
 
// * UPPER CASE E LOWER CASE
 
//^ Encontrando a tag no HTML para manipulá-la
// ^ Precisamos de um identificador, e nossa TAG <h2> tem um id
 
const h2 = document.querySelector('#meuh2');
 
//* Manipulando esse H2
 
let fraseMostrar = "Olha só eu mudei!!!!!";
 
h2.innerHTML = fraseMostrar;
 
h2.style.color = "blue";
 
console.log("lowercase: ", fraseMostrar.toLowerCase());
console.log("UPPERCASE: ", fraseMostrar.toUpperCase());
 
//* 19/09/2024
 
//^ INTERPOLAÇÃO - EXIBINDO VARIÁVEIS/VALORES DENTRO DE STRING
//? prompt == input(python) == leia(VisualG)
let filmeFavorito = prompt("Digite o nome do seu filme favorito");
 
console.log("=========INTERPOLAÇÃO=========");
//* acento grave ` = shift + acento
console.log(`O seu filme favorito é: ${filmeFavorito}`)
 
let precoLitro = prompt("Digite o valor do Etanol");
let totalPago = prompt("Digite quanto pagou");
 
 
alert(`Você comprou ${(totalPago / precoLitro).toFixed(3)} litros`);
 
console.log(`
    Quando surge o alviverde imponente
    No gramado em que a luta o aguarda
    Sabe bem o que vem pela frente...
`);
 
//* CARACTERES DE IMPRESSÃO
// * \N = QUEBRA LINHA
console.log("Olá \n tudo \n\n\n\n bem?");
 
// * \T = espaço de tabulação (ESPAÇO MAIOR)
console.log("Casa \t\t Sonserina");
console.log("Patrono \t\t Gavião");
 
//* \"  - Permite adicionar aspas duplas mesmo dentro de aspas duplas
 
console.log("Essa é uma \"aspas\" interna");
 