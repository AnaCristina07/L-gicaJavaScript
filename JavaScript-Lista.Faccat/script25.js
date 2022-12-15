function calcular(){
    let bancoDeDados = [1234, 9999];
    let usuario = parseInt(prompt("Digite seu codigo de usuario: "));

    if (usuario !== bancoDeDados[0]){
        alert(`{Erro} Usuario inválido, tente novamente!`);

    }else if (usuario == bancoDeDados[0]) {
        let senha = parseInt(prompt("Digite sua senha:"));

        if(senha !== bancoDeDados[1]) {
            alert(`{Erro} Senha inválida, tente novamente!`)

        }else if(senha == bancoDeDados[1]){
            alert(`Acesso pertimido! seja bem vindo :)`)
        }
    }
}