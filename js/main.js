function changeValue(amount) {
  var input = document.getElementById('numberInput');
  var currentValue = parseInt(input.value) || 0;

  // Verifica se a operação é de decremento e se o valor atual é maior que 0.
  if (amount < 0 && currentValue <= 0) {
    // Se o valor atual é 0 e a quantidade é negativa, não faz nada.
    return;
  } else {
    // Caso contrário, adiciona a quantidade ao valor atual.
    currentValue += amount;
  }

  // Atualiza o valor do input.
  input.value = currentValue;
}