function calcular() {
    var contador = 0;
    var resultado = 0;
    while (contador <= 15) {
        var resultado = resultado * 3;
       
        if (resultado == 0) {
            var resultado = resultado + 1;
        };
        
        document.write("3 ^ " + contador + " = " + resultado + "</br>");
        var contador = contador + 1;
    }
}