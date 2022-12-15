function Custo(){
    let custofab = parseInt(prompt("Digite o custo da fábrica de um carro:"));
    let imposto = custofab + (45*custofab) / 100;
    let percentual = custofab + (28*custofab) / 100;
    let total = custofab+imposto+percentual;
    document.write("Seu carro saíra por:" + total);

}

/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.*/