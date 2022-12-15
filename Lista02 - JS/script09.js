function total(){
let valor= parseInt(prompt("Informe a valor base do serviço: "));
let taxa= parseInt(prompt("Informe o percentual de taxa: "));
let horas= parseInt(prompt("Informe a quantidade de horas de serviço: "));
let total = valor+(valor*(taxa/100)*horas);
document.write("O valor total é: "+ total);
}