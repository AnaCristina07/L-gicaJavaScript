function calcular (){
var base = parseInt(prompt("Digite o valor da base: "));
var expoente = parseInt(prompt("Digite o valor do expoente: "));
var resultado = 1
for (contador = 1; contador <= expoente; contador++){
var resultado = resultado * base;
}
document.write(base + " ^ " + expoente + " = " + resultado);
};