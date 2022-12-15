//* 12) Escreva um algoritmo para ler as dimensões de um círculo (raio), calcular e escrever a área do círculo. a=pi*r²
function raio(){
    var raio = parseFloat(prompt("Digite o valor do raio"));
    var area = 3.14*raio**2
    alert("A área é:" +area);
}