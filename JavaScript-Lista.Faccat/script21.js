function calcular (){
let numero1 = parseInt(prompt("Digite o primeiro numero"));
let numero2 = parseInt(prompt("Digite o segundo numero"));

if (numero1==numero2){
document.write("Numeros iguais");
}
else if (numero1>numero2) {
document.write("O primeiro e maior");
}
else{
document.write("O segundo e maior");
}
}