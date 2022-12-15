function calcular (){
    var resultado = 0
for (var contador = 0; contador <= 15; contador++){
var resultado = resultado * 3;
if(resultado == 0 ){
var resultado = resultado + 1;        
    };
document.write("3 ^" + contador +  " = " + resultado+ "</br>"); 
}
}