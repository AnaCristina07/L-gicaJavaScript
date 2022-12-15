//*Escreva um algoritmo para ler as dimensões de um losango (diagonal maior, diagonal menor), calcular e escrever a área do losango. Dica a=D.d/2
function losango(){
    var maior= parseFloat(prompt("Digite o tamanho da diagonal maior"));
    var menor = parseFloat(prompt("Digite o tamanho da diagonal menor"));
    var losango = maior * menor/2;
    alert("A area do  losango é:"+losango);
} 