function calcular(){
    var resultado = 0
    var anterior = 1
    var primeiro = 0
    
    document.write("1-")
    for (contador = 1; contador <= 15; contador ++){
        var resultado = primeiro + anterior;
        document.write(resultado + "-");
        var primeiro = anterior;
        var anterior = resultado;
    }
}