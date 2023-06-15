var btCalcular, btApagar, a, b, c, x1, x2, delta, mensagem, visor;

function calcular() {
    visor = window.document.getElementById('idVisor');
    a = Number(window.document.getElementById('idCoeficienteA').value);
    b = Number(window.document.getElementById('idCoeficienteB').value);
    c = Number(window.document.getElementById('idCoeficienteC').value);

    if (a != 0) {
        delta = (b ** 2) - (4 * a * c);

        if (delta > 0) {
            x1 = ((b * -1) + Math.sqrt(delta)) / (2 * a);
            x1 = x1.toFixed(2);
            x2 = ((b * -1) - Math.sqrt(delta)) / (2 * a);
            x2 = x2.toFixed(2);
            mensagem = `S = { ${x1} , ${x2} }`;
        } 
        else if (delta < 0) {
            mensagem = `A equação não possui \n resultados reais`;
        } 
        else {
            x1 = ((b * -1) + Math.sqrt(delta)) / (2 * a);
            x1 = x1.toFixed(2);
            mensagem = `S = { ${x1} }`;
        }
    } else {
        mensagem = `O coeficiente A deve \n ser diferente de zero`;
    }
    visor.innerText = mensagem;
}

function apagar() {
    a = b = c = delta = x1 = x2 = 0;
    mensagem = "";
    visor.innerText = "";
    window.document.getElementById('idCoeficienteA').value = "";
    window.document.getElementById('idCoeficienteB').value = "";
    window.document.getElementById('idCoeficienteC').value = "";
    window.document.getElementById('idCoeficienteA').focus();
}

window.document.getElementById('idCoeficienteA').focus();

btCalcular = window.document.getElementById('idBtCalcular');
btCalcular.addEventListener('click', calcular);

btApagar = window.document.getElementById('idBtApagar');
btApagar.addEventListener('click', apagar);
