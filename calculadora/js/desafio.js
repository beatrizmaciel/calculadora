var inputValorHora = document.querySelector("#valor-hora");
var inputHorasProjeto = document.querySelector("#horas-projeto");
var calculo = document.querySelector("#resposta");

function calcular() {
    var valor = inputValorHora.value;
    var projeto = inputHorasProjeto.value;

    var total = projeto * valor;

    calculo.textContent = "R$" + total.toFixed(2);
}