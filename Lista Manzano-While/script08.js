function calcular() {
    var celsuis = 0;
    var fahre  = 0;
    
    document.write("C°----- F°"  +"</br>")
    document.write("</br>")
    while (celsuis < 100) {
        var celsuis = celsuis + 10;
        var fahre = (9 * celsuis + 160)/5
        var contador = contador + 1;
    
        document.write(celsuis + "°" +  " = " + fahre  + "°" + "</br>");
    }
}