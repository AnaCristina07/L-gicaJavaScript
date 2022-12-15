function calcular(){
let morango = parseInt(prompt("Digite o valor em Kg de morangos comprados: "));
let maca = parseInt(prompt("Digite o valor em Kg de maças compradas: "));
let totalKg = morango + maca
let totalMorango, totalMaca, totalCompra, valorFinal = null;

if (morango <= 5) {
    totalMorango = morango * 2.5
} else {
    totalMorango = morango * 2.2
}

 if (maca <= 5) {
    totalMaca = maca * 1.8
} else {
    totalMaca = maca * 1.5
}

totalCompra = totalMorango + totalMaca

if(totalKg > 8 || totalCompra > 25) {
    valorFinal = totalCompra - (totalCompra * 10/100)
    document.write("O valor total que o cliente irá pagar é: "+ valorFinal)

} else {
    document.write("O valor total que o cliente irá pagar é: "+ totalCompra)
}
}