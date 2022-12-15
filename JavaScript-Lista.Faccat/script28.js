function calcular (){
let codigoFun= parseInt(prompt("Escreva seu n° de Funcionário:"));
let nascimento= parseInt(prompt("Em que ano você nasceu?"));
let ano= parseInt(prompt("Em que ano você esta?"));
let entradaFun= parseInt(prompt("Em que ano você entrou na empresa?"));
let idade =  ano - nascimento
let tempoDeTb =  ano - entradaFun

 if (idade >= 65){
   document.write("Requerente de retirada")
 }
   else if  (tempoDeTb >= 30){
      document.write("Requerente de retirada")
   }
      else if ((tempoDeTb >= 25) && (idade >= 60)){
        document.write("Requerente de retirada")
      }
        else{
      document.write("Não requerer")
}
}