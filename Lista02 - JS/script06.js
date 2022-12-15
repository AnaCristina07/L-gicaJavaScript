function celsius(){
let fahrenheit = parseInt(prompt("Digite a temperatura em Fº: "));
let celsius = (fahrenheit-32) * (5/9);
document.write("A temperatura em celsius é :", celsius);
}