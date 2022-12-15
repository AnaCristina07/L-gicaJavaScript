function calcular(){
let conta = parseInt(prompt("Informe o numero da conta: "));
    let saldo = parseInt(prompt("Digite o saldo: "));
    let debito = parseInt(prompt("Digite o valor em debito: "));
    let credito = parseInt(prompt("Digite o valor de crédito: "));
    let saldoAtual = saldo - debito + credito

    if(saldoAtual >= 0) {
        document.write("O saldo está POSITIVO! " + saldoAtual)
    } 
    else {
        document.write("O saldo está NEGATIVO! " + saldoAtual)
    }
}