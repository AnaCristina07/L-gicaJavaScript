function calcular(){
    let qtdAtual = parseInt(prompt("Informe a quantidade atual do estoque: "));
    let qtdMaxima = parseInt(prompt("informe a capacidade maxima do estoque:"));
    let qtdMinima = parseInt(prompt("Informe a quantidade minina do estoque: "));
    let media = (qtdMaxima + qtdMinima) / 2

    if (qtdAtual >= media) {
        document.write("Não efetuar compra do produto, estoque disponivel!")
    } 
    else {
        document.write("A quantidade atual está baixa, efetue a reposição do produto!")
    }
}