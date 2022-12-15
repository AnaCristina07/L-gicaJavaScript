function Eleitores(){
var quantidadeEleitores=parseInt(prompt("Digite a quatidade de eleitores de um municipio:"));
var quantidadeVotosBrancos=parseInt(prompt("Digite a quatidade de votos brancos de um municipio:"));
var quantidadeVotosnulos=parseInt(prompt("Digite a quatidade de votos nulos de um municipio:"));
var quantidadeVotosVálidos=parseInt(prompt("Digite a quatidade de votos válidos de um municipio:"));
var porcentagemVotosBrancos = quantidadeVotosBrancos/quantidadeEleitores*100;
var porcentagemVotosNulos = quantidadeVotosnulos/quantidadeEleitores*100;
var porcentagemVotosVálidos=quantidadeVotosVálidos/quantidadeEleitores*100;
document.write("A porcentagem de votos brancos corresponde a :"+porcentagemVotosBrancos+"</br>");
document.write("A porcentagem de votos nulos corresponde a :"+porcentagemVotosNulos+"</br>");
document.write("A porcentagem de votos válidos corresponde a :"+porcentagemVotosVálidos+"</br>");
}