function consumo(){
let tempo= parseInt(prompt("Informe o tempo gasto na viagem em horas: "));
let VelMedia = parseInt(prompt("Informe a velocidade média em KM: "));
let Distancia = tempo * VelMedia;
let Consumo =  Distancia /12;
document.write("A distancia percorida foi de: " + Distancia);
document.write("O consumo foi de: "+ Consumo);
}