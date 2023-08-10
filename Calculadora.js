function AgregarNumero(value) {
    document.getElementById('resultado').value += value;
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