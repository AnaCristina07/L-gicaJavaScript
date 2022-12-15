function calcular(){
let SM = parseInt(prompt("Digite aqui o sálario mensal"));
let PR = parseInt(prompt("Digite aqui o valor Percentual do Reajuste em %:"));
NS = SM + (PR/100) * SM;
document.write("Novo Salário R$ " + NS);
}