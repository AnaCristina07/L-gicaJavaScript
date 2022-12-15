function novoSalario(){
let salarioAtual= parseInt(prompt("Digite o seu salário atual: "));
let reajuste= parseInt(prompt("Digite o valor do seu reajuste: "));
let reajustePorcentagem = reajuste/100 * salarioAtual;
let novoSalario = salarioAtual + reajustePorcentagem;
document.write(`O novo salário é: ${novoSalario}</br>`);
}