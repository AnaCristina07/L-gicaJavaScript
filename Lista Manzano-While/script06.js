function calcular() {
    var base = parseInt(prompt("Digite o valor da base: "));
    var expo = parseInt(prompt("Digite o valor do expoente: "));
    var resultado = 1;
    var contador = 0;
        while (contador < expo) {
            var resultado = resultado * base;
            var contador = contador + 1;
        }
        document.write(resultado);
        
    }