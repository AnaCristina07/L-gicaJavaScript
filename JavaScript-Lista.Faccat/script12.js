function calcular(){
let salario = parseInt(prompt("Informe o valor do seu salario fixo: "));
    let vendas = parseInt(prompt("Informe o valor total de suas vendas: "));
    let total, diferenca = undefined;

    if(vendas <= 1500) {
        total = salario + (vendas * (3/100));
        document.write("O salario total que o funcionario irá receber é:" + total)
    }

    else if (vendas > 1500) {
        diferenca = vendas - 1500
        total = salario + (1500 * (3/100)) + (diferenca * (5/100));
        document.write("O salario total que o funcionario irá receber é:" + total)
    }

}