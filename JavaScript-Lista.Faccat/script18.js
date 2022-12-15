function calcular(){
    let valores = Array();
    valores[0] = parseInt(prompt("Digite o 1° valor: "));
    valores[1] = parseInt(prompt("Digite o 2° valor: "));
    valores[2] = parseInt(prompt("Digite o 3° valor: "));
    let soma = undefined;

    if (valores[0] > valores[1] && valores[1] > valores[2]) {
        soma = valores[0] + valores[1]
        alert(`A ordem crescente é: ${valores[2]} ${valores[1]} ${valores[0]}`)
    } 
    
    if (valores[0] > valores[2] && valores[2] > valores[1]){
        soma = valores[0] + valores[2]
        alert(`A ordem crescente é: ${valores[1]} ${valores[2]} ${valores[0]}`)
    }
    if (valores[1] > valores[0] && valores[0] > valores[2]) {
        soma = valores[1] + valores[0]
        alert(`A ordem crescente é: ${valores[2]} ${valores[0]} ${valores[1]}`)
    }
    
    if (valores[1] > valores[2] && valores[2] > valores[0]) {
        soma = valores[1] + valores[2]
        alert(`A ordem crescente é: ${valores[0]} ${valores[2]} ${valores[1]}`)
    }
    
    if (valores[2] > valores[0] && valores[0] > valores[1]) {
         soma = valores[2] + valores[0]
         alert(`A ordem crescente é: ${valores[1]} ${valores[0]} ${valores[2]}`)
    }
    
    if (valores[2] > valores[1] && valores[1] > valores[0]){
        soma = valores[2] + valores[1]
        alert(`A ordem crescente é: ${valores[0]} ${valores[1]} ${valores[2]}`)
    }
    
}