function calc() {
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;

  let imc = peso / (altura * altura);

  let classificacao = "";

  if (imc < 18.5) {
    classificacao = " Seu IMC é: " + imc.toFixed(2) + ". Está abaixo do peso.";
  } else if (imc < 24.9) {
    classificacao = " Seu IMC é: " + imc.toFixed(2) + ". Peso adequado.";
  } else if (imc < 29.9) {
    classificacao = " Seu IMC é: " + imc.toFixed(2) + ". Sobrepeso.";
  } else if (imc < 34.9) {
    classificacao = " Seu IMC é: " + imc.toFixed(2) + ". Obesidade grau I.";
  } else if (imc < 39.9) {
    classificacao = " Seu IMC é: " + imc.toFixed(2) + ". Obesidade grau II.";
  } else if (imc > 39.9) {
    classificacao = " Seu IMC é: " + imc.toFixed(2) + ". Obesidade grau III.";
  }

  document.getElementById("resultado").innerHTML = classificacao;
}