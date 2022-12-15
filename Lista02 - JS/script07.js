function volume(){
let altura= parseInt(prompt("Altura: "));
let raio= parseInt(prompt("Raio: "));
let volume =3.14 * (raio*raio) * altura;
document.write("O resultado é: "+ volume);
}