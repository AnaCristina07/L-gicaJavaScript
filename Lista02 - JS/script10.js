function resultado(){
let numeroA= parseInt(prompt("Digite o primeiro numero para guardar no bloco a: "));
let numeroB= parseInt(prompt("Digite o primeiro numero para guardar no bloco b: "));
let numeroC = numeroA
numeroA = numeroB
numeroB = numeroC

document.write("Agora, o numero do bloco A é: "+ numeroA + "</br>");
document.write("E o numero do bloco B é: "+ numeroB + "</br>");
}