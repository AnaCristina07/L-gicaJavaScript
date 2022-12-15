function media(){
 let nota1 = parseInt(prompt("Informe a primeira nota: "));
 let nota2 = parseInt(prompt("Informe a segunda nota: "));
 let media = (nota1+nota2)/2;
        if (media<=6){
            document.write("Não aprovado, media: " + media);
        }
        else{
            document.write("Aprovado!: " + media);
        }
    }
