function calcular(){
    let nomeProduto = prompt("Informe a descrição do produto (Nome): ");
    let valorUnitario = parseInt(prompt("Digite o preço unitário do produto: "));
    let qtdComprada = parseInt(prompt("Quantidade adquirida: "));
    let total = valorUnitario * qtdComprada;
    let valorComDesconto = null;

    if (qtdComprada <= 5) {
        valorComDesconto = total - (total * 2/100);
    }

    if (qtdComprada > 5 && qtdComprada <= 10){
        valorComDesconto = total - (total * 3/100);
    }

    if (qtdComprada > 10) {
        valorComDesconto = total - (total * 5/100);
    }

    document.write(`O preço do produto ${nomeProduto} será: R$${valorComDesconto.toFixed(2)}`)
}
