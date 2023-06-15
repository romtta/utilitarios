var peso, altura, imc, visor, btCalcular, btApagar, status, mensagem;

function calcular() {
    peso = Number(window.document.getElementById('idPeso').value);
    altura = Number(window.document.getElementById('idAltura').value);
    visor = window.document.getElementById('idVisor');
    
    if (altura <= 30 || altura > 280 || peso < 1) {
        mensagem = "Informe valores válidos"
    } 
    else {
        imc = peso / ((altura / 100) ** 2);
        imc = parseFloat(imc.toFixed(2));  // para fixar em 2 casas decimais.
        mensagem = `IMC: ${imc} \n Classificação: `;
        
        if (imc < 18.5) {
            mensagem += `MAGREZA`;
        } 
        else if (imc <= 24.9) {
            mensagem += `NORMAL`;
        }
        else if (imc <= 29.9) {
            mensagem += `SOBREPESO`;
        } 
        else if (imc <= 39.9) {
            mensagem += `OBESIDADE`;
        }
        else {
            mensagem += `OBESIDADE GRAVE`;
        } 
    }
    visor.innerText = mensagem;
}

function apagar() {
    peso = altura = imc = 0;
    visor.innerText = "";
    window.document.getElementById('idAltura').value = "";
    window.document.getElementById('idPeso').value = "";
    window.document.getElementById('idPeso').focus();
}

window.document.getElementById('idPeso').focus();

btCalcular = window.document.getElementById('idBtCalcular');
btCalcular.addEventListener('click', calcular);

btApagar = window.document.getElementById('idBtApagar');
btApagar.addEventListener('click', apagar);
