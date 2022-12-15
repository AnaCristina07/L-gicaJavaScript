function calcular(){
let horarioInicial = parseInt(prompt("Informe o horario inicial do jogo: "));
let horarioFinal = parseInt(prompt("Informe o horario final do jogo: "));
let total = horarioFinal-horarioInicial;
         if (total<=0){
            total = total+24
        document.write("A quantidade de horas jogadas foi: "+ total);
         }
         else{
         document.write("A quantidade de horas jogadas foi: ", total);
         }
}