//8 ) Um professor, muito legal, fez 3 provas durante um semestre
//mas só vai levar em conta as duas notas mais altas para calcular 
//a média.
//Faça uma aplicação que peça o valor das 3 notas, mostre como 
//seria a média com essas 3 provas, a média com as 2 notas mais
//altas, bem como sua nota mais alta e sua nota mais baixa.

var nota1 = parseInt(prompt("Digite a primeira nota"));
var nota2 = parseInt(prompt("Digite a segunda nota"));
var nota3 = parseInt(prompt("Digite a terceira nota"));


function media(event) {
    var aux = nota1

    if (nota2 > aux) {
    aux = nota2
    document.body.append(nota2)
    }
    if(nota3 > aux) {
      aux = nota3
      document.body.append(nota3)
    }else {
      document.body.append(nota1)
    }
    
}
media(event)