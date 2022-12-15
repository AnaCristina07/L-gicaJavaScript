function calcular() {
    let valor = parseInt(prompt("Informe um valor: "))

    if(valor == 0){
    document.write("O valor é igual a zero!")    

    }
    else if (valor > 0) {
      document.write("O valor positivo!") 
    }
    else {
      document.write("O valor negativo!")  
    }
}