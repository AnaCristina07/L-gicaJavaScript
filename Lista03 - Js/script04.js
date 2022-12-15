/* Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira*/
function conversao(){
var cotDolar = parseFloat(prompt("Qual a cotação atual do dólar? "));
var qtdDolares = parseFloat(prompt("Quantos Dólares voce possui? "));
var conversao = qtdDolares*cotDolar;
document.write("O valor da conversão em reais é: R$" + conversao);
}