function calcular() {
    var contador = 0;
    var soma=0;
    var media = 0;
    while (contador < 10) {
        var numero = parseInt(prompt("Digite um valor: "));
        var soma = soma + numero;
        var contador = contador + 1;
    }
    var media = soma / 10
    document.write(soma + "</br>" + media)
}