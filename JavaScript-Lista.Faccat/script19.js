function calcular(){
let ladoA = parseInt(prompt("Informe o valor de um lado do trângulo: "));
let ladoB = parseInt(prompt("Informe o valor do segundo lado do trângulo: "));
let ladoC = parseInt(prompt("Informe o valor do terceiro do trângulo: "));


if((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)) {
    document.write("Esse valor forma um triângulo")

}else {
    document.write("Esse valor não forma um triângulo")
}
}
