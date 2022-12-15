function calcular(){
let num1 = parseInt(prompt("Informe o valor 1: "));
let num2 = parseInt(prompt("Informe o valor 2: "));
  if (num1 > num2){
    document.write("A ordem crescente é: " + num1 + " e " + num2);
     }
     else{
     document.write("A ordem crescente é: "+ num2+ " e "+ num1);
     }
    }