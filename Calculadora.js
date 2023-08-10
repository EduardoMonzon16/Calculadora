function Agregar(caracter) {
    var entrada = document.getElementById('resultado');
      if (caracter === '.' && entrada.value.slice(-1) === '.') {
        return; 
      }
      entrada.value += caracter;

}

function Limpiar() {
    document.getElementById('resultado').value = '';
}

function Calcular() {
    var expression = document.getElementById('resultado').value;
    try {
        var resultado = eval(expression);
        document.getElementById('resultado').value = resultado;
    } catch (error) {
        document.getElementById('resultado').value = 'Error';
    }
}

function Raiz() {
    var expression = document.getElementById('resultado').value;
    try {
        var resultado = Math.sqrt(eval(expression));
        document.getElementById('resultado').value = resultado;
    } catch (error) {
        document.getElementById('resultado').value = 'Error';
    }
}

function Porcentaje(value) {
    document.getElementById('resultado').value += value.replace(/%/g, "*0.01"); 
  }


