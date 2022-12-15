function calcular() {
    var contador = 50;
    var soma = 0;
    var media = 0;
    
    while (contador <= 70) {
        if (contador  % 2 == 0){
            var soma = soma + contador;
        }
        var contador = contador + 1;
    }
    var media = soma / 11;
    document.write("A soma dos numeros pares de 50 a 70 é: " + soma + " e a media é:" + media)
}   
 