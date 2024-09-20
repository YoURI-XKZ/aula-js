let nome = prompt ("Seu nome completo")

document.write ('seu nome é: ', nome,"<br>")
document.write ('seu nome tem: ',nome.length,' letras!<br>')
document.write ('seu nome com letras maiusculas: ',nome.toUpperCase(),'<br>')
document.write ('seu nome em minusculas: ',nome.toLowerCase(),'<br>')
document.write('a terceira letra do seu nome é: ',nome[2],'<br>')
document.write ('o indice de Y é: ',nome.indexOf("Y"),'<br>')
document.write ('o ultimo indice de i: ',nome.lastIndexOf("i"),"<br>" )
document.write('as ultimas 3 letras do seu nome: ',nome.slice(nome.indexOf(" ")+1,nome.indexOf(" ",nome.indexOf(" ")+1)))
document.write
