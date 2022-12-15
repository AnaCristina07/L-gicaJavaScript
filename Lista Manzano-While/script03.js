function calcular(){
    var contador = 0;
    var soma = 0;
    
    while (contador <= 500) {
        var contador = contador + 1;
        if (contador % 2 == 0) {
            var soma = soma + contador;
    
        }
    }
    document.write("A Soma dos números pares até 500 é: " + soma);
}