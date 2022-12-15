function calcular(){
let nometime1 = prompt("Informe o nome do primeiro time");
let golstime1 = parseInt(prompt("Quantidade de gols marcados pelo"));
let nometime2 = prompt("Informe o nome do segundo time");
let golstime2 = parseInt(prompt("Quantidade de gols marcados pelo"));

if  (golstime1 > golstime2){
document.write(`${nometime1} Ganhou!!!`)
}

else if (golstime1 < golstime2){
document.write(`${nometime2} Ganhou!!!`)
}

else if (golstime1 = golstime2){
document.write("Empate")
}
}