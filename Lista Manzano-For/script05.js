function soma(){
    var soma = 0;
    for (contador = 1; contador <= 500; contador++) {
        if (contador % 2 == 0) {
            var soma = soma + contador;
        };
    };
    document.write(soma);
    
    }