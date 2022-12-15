function calcular() {
    var contador = 0;
    var soma = 0;
    while (contador <= 100) {
        var soma = soma + contador;
        var contador = contador + 1;    
    }
    document.write("O valor da soma corresponde a: " + soma );
}