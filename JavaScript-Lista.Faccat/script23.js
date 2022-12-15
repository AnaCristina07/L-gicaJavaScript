function calcular(){
    let HM_velho = parseInt(prompt("Quantos anos tem o primeiro homem?"));
    let HM_novo = parseInt(prompt("Quantos anos tem o segundo homem?"));
    let ML_velha = parseInt(prompt("Quantos anos tem a primeira mulher?"));
    let ML_nova = parseInt(prompt("Quantos anos tem a segunda mulher?"));

    if (HM_velho < HM_novo){
       auxiliar = HM_velho
       HM_velho = HM_novo
       HM_novo = auxiliar
    }
    
    if (ML_velha < ML_nova) {
       auxiliar = ML_velha
       ML_velha = ML_nova
       ML_nova = auxiliar
    }
    
       document.write("A soma das idades do homem mais velho com a mulher mais nova é: ")
       document.write(HM_velho+ML_nova + "</br>")
    
       document.write("O produto das idades do homem mais novo com a mulher mais velha é: ")
       document.write(HM_novo*ML_velha + "</br>")
}