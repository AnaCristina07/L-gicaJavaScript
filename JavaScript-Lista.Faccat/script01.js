function media(){
   let nota1= parseInt(prompt("Digite a nota1: "));
   let nota2 = parseInt(prompt("Digite a nota2: "));
   let nota3 = parseInt(prompt("Digite a nota3: "));
let media = ((nota1*2)+(nota2*3)+(nota3*5)) /10;
document.write("A média ponderada é ", media);
}