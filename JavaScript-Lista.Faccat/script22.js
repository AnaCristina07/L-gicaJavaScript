function calcular(){
    let tipo = prompt("Escolha o combustível: [A]-Álcool | [G]-Gasolina: ");
    let qtdAbastecida = parseInt(prompt("Quantidade em litros abastecida: "));
    let total = 0;

    if (tipo === "A" || tipo === "a"){
        if(qtdAbastecida <= 20){
            total = 2.9 * (qtdAbastecida - (qtdAbastecida * 3/100));
            document.write("O valor com desconto será: " + total);

        }else{
            total = 2.9 * (qtdAbastecida - (qtdAbastecida * 5/100));
            document.write("O valor com desconto será: " + total);
        }
    }

    if (tipo === "G" || tipo === "g"){
        if(qtdAbastecida <= 20){
            total = 3.3 * (qtdAbastecida - (qtdAbastecida * 4/100));
            document.write("O valor com desconto será: " + total);

        }else{
            total = 3.3 * (qtdAbastecida - (qtdAbastecida * 6/100));
            document.write("O valor com desconto será: " + total);
        }
    }

}