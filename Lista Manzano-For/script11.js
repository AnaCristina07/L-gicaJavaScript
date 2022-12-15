function calcular (){
    var Celsius = 10
    document.write("C°" + "F° " + "K° " + "</br>")
    for (contador = 1; contador <= 10; contador++){
        var farenheit = (9 * Celsius + 160) / 5;
        var Celsius = Celsius + 10;
        var kelvin = Celsius + 273.15;
        
        document.write(Celsius + " ° " + " = " + farenheit + " ° " + " = "+ kelvin + " ° " + "</br>");
        
    }
}