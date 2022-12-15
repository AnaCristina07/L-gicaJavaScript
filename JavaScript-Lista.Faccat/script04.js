function calcular(){
let qntMacas = parseInt(prompt("Quantas maças voce deseja comprar? "));
    if (qntMacas<=12){
        alert("O valor total é: " + qntMacas * 1.30);
    }
    else{
        alert("O valor total é: " + qntMacas*1.00);
    }
}