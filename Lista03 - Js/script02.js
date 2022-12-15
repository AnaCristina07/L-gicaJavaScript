function calcular(){
let largura= parseInt(prompt("Escreva aqui a largura da caixa"));
let altura= parseInt(prompt("Escreva aqui a altura da caixa"));
let comprimento= parseInt(prompt("Escreva aqui o comprimento da caixa"));
let volume=comprimento*largura*altura;
document.write("O volume da caixa é: "+volume);
}