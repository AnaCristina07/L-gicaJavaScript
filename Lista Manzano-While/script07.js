function calcular() {
var contador = 1;
var primeiro = 0;
var anterior = 1;
var resultado = 0;
document.write(" 1" + "</br>")
while (contador <= 15) {
var resultado = primeiro + anterior;
document.write(resultado + "</br>");
 var primeiro = anterior;
 var anterior = resultado;
 var contador = contador + 1;

}
}