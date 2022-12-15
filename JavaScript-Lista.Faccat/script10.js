function calcular(){
let horas_trabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas no mes: "));
let salario_hora = parseInt(prompt("Digite o valor recebido por horas trabalhadas: "));
let horas_extras = horas_trabalhadas - 160;
let salario_hora_extra = salario_hora * 1.5;
let salario_extra = salario_hora_extra * horas_extras;
let salario_final = (salario_hora_extra * horas_extras) + (160 * salario_hora);
document.write("Salário : " + 160*salario_hora + "</br>")
document.write("Salário das horas extras : " + salario_extra + "</br>")
document.write("Salário final : " + salario_final + "</br>")
  }