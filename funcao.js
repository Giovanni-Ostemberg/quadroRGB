window.addEventListener('load', start);

var rangeVermelho = document.querySelector('#rangeVermelho');
var rangeVerde = document.querySelector('#rangeVerde');
var rangeAzul = document.querySelector('#rangeAzul');
var inputVermelho = null;
var inputAzul = null;
var inputVerde = null;
var caixaCor = document.querySelector('#caixa-cor');

function start() {
  // preventFormSubmit();
  colorCalculator();
  render();
}

function colorCalculator() {}

function render() {
  inputVermelho = document.querySelector('#inputVermelho');
  inputVerde = document.querySelector('#inputVerde');
  inputAzul = document.querySelector('#inputAzul');

  inputVermelho.value = rangeVermelho.value;
  inputVerde.value = rangeVerde.value;
  inputAzul.value = rangeAzul.value;

  rangeVermelho.addEventListener('focus', rangeVermelhoAtivo);
  rangeAzul.addEventListener('focus', rangeAzulAtivo);
  rangeVerde.addEventListener('focus', rangeVerdeAtivo);

  var valorCor =
    'rgb(' +
    rangeVermelho.value +
    ',' +
    rangeVerde.value +
    ',' +
    rangeAzul.value +
    ')';

  caixaCor.style.backgroundColor = valorCor;

  console.log(valorCor);
}

function rangeVermelhoAtivo() {
  console.log('Range vermelho ativo');

  rangeVermelho.addEventListener('change', handleChange);
  rangeVerde.addEventListener('change', handleChange);
  rangeAzul.addEventListener('change', handleChange);
  render();
}

function rangeVerdeAtivo() {
  console.log('Range verde ativo');

  rangeVerde.addEventListener('keyup', handleChange);
  render();
}

function rangeAzulAtivo() {
  console.log('Range azul ativo');

  rangeAzul.addEventListener('keyup', handleChange);
  render();
}

function handleChange() {
  var rangeEditado = event.target.value;
  render();
  switch (rangeEditado) {
    case rangeVermelho:
      break;

    case rangeVerde:
      break;

    case rangeAzul:
      break;
  }
}
