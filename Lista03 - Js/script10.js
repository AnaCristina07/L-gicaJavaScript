function calcular(){
let A = parseFloat(prompt("Qtd de Votos Validos Para Candidato A:"));
let B = parseFloat(prompt("Qtd de Votos Validos Para Candidato B:"));
let C = parseFloat(prompt("Qtd de Votos Validos Para Candidato C:"));
let votosNulos = parseFloat(prompt("Qtd de Votos Nulos:"));
let votosBrancos = parseFloat(prompt("Qtd de Votos em Branco:"));
votosValidos = A + B + C;
totalEleitores = votosValidos + votosNulos + votosBrancos;
percTotalValido = (votosValidos * 100) / totalEleitores;
percValidoA = (A * 100) / totalEleitores;
percValidoB = (B * 100) / totalEleitores;
percValidoC = (C * 100) / totalEleitores;
percNulo = (votosNulos * 100) / totalEleitores;
percBranco = (votosBrancos * 100) / totalEleitores;
document.write("Total de Eleitores:  " + totalEleitores ,"</br>");
document.write("Porcentagem total de votos válidos: " + percTotalValido, "</br>");
document.write("Porcentagem de votos válidos do candidato A: " + percValidoA,"%" , "</br>");
document.write("Porcentagem de votos válidos do candidato B: " + percValidoB,"%"  , "</br>");
document.write("Porcentagem de votos válidos do candidato C: " + percValidoC,"%" , "</br>");
document.write("Porcentagem de votos brancos: " + percBranco,"%" , "</br>");
document.write("Porcentagem de votos nulos: " + percNulo,"%" ,"</br>");
}