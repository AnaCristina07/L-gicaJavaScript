function calcular(){
let n1 = parseInt(prompt("Qual a primeira nota do seu aluno(a)?"));
let n2 = parseInt(prompt("Qual a segunda nota do seu aluno(a)?"));
let n3 = parseInt(prompt("Qual a terceira nota do seu aluno(a)?"));
   let mediaDosExercicios =  (n1+n2+n3)/3
   let mediaDeAproveitamento = (n1+n2*2+n3*3+mediaDosExercicios)/7
   if (mediaDeAproveitamento>9.0){
      document.write("Sua media de aproveitamento é A");
   }
   else if((mediaDeAproveitamento>=7.5) && (mediaDeAproveitamento<9.0)){
        document.write("Sua media de aproveitamento é B")
   }
        else if ((mediaDeAproveitamento>=6.0) && (mediaDeAproveitamento<7.5)){
        document.write("Sua media de aproveitamento é C")
        }
        else {
        document.write("Sua media de aproveitamento é D")
}
        }