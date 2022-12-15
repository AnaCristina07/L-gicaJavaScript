function DiasVividos(){
var ano=parseInt(prompt("Digite sua idade em anos:"));
var mes=parseInt(prompt("Digite a quantidade de meses que passou desde o seu ultimo aniversario:"));
var dia=parseInt(prompt("Digite a quantidade de dias que passou desde o seu ultimo aniversario:"));
var diasvividos=ano*365+mes*30+dia;
document.write("A quantidade de dias vividos corresponde a :"+diasvividos);

}