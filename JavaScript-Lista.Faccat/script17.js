function calcular(){
let valor1 = parseInt(prompt("Informe o valor 1: "));
let valor2 = parseInt(prompt("Informe o valor 2: "));
let valor3 = parseInt(prompt("Informe o valor 2: "));

if (valor3 < valor1 && (valor1 < valor2)) {
    document.write(valor1 + valor2);
}
else if (valor2 < valor1 && (valor1 < valor3)) {
    document.write(valor1 + valor3);
}
 else {
    document.write(valor2 + valor3);
}
}