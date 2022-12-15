//* Escreva um algoritmo para ler as dimensões de um trapézio (base maior, base menor e altura), calcular e escrever a área do trapézio. a=(B+b).h/2 
function trapezio(){
    var Bmaior = parseFloat(prompt("Informe o tamanho da base maior do trapézio"));
    var Bmenor = parseFloat(prompt("Informe o tamanho da base menor do trapézio"));
    var altura = parseFloat(prompt("Informe a altura do trapézio"));
    var trapezio = Bmaior+Bmenor;
    var multiplicação = trapezio*altura; 
    var divisão = multiplicação/2;
    alert("A aréa do trapézio é:"+divisão)
}