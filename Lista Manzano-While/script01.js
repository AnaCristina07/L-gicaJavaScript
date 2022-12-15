function calcular(){
    var numero = parseInt(prompt("Digite um número: "));
    var contador = 1;
    
    while (contador <= 10) {
        var resultado = numero * contador;
        document.write(numero + " X " + contador + " = " + resultado + "</br>");
        var contador = contador + 1
    }
}