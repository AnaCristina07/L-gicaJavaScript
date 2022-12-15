function calcular(){
let dataNasc = parseInt(prompt("Informe o ano em que voce nasceu: "));
let anoAtual = parseInt(prompt("Informe o ano atual: "));
let resultado = anoAtual-dataNasc;
        if (resultado >16){
            document.write("Voce pode votar!");
        }
        else{
            document.write("Voce não pode votar!");
        }
}