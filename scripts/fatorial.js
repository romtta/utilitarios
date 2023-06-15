var btFatorial, btApagar, num, visor, cont, fatorial;


function fatorial() {
    num = Number(window.document.getElementById('idNumero').value);
    visor = window.document.getElementById('idVisor');
    fatorial = 1;

    if (num < 0) {
        visor.innerText = `Insira apenas \n números naturais`;
    } 
    else {
        for (cont = num; cont > 1; cont--) {
            fatorial *= cont; 
        }
        visor.innerText = `${num}! = ${fatorial} `;
    }

    window.document.getElementById('idNumero').value = "";
    window.document.getElementById('idNumero').focus();
}


function apagar() {
    num = 0;
    fatorial = 1;
    window.document.getElementById('idNumero').value = "";
    window.document.getElementById('idNumero').focus();
    visor.innerText = "";
}

window.document.getElementById('idNumero').focus();

btFatorial = window.document.getElementById('idBtFatorial');
btFatorial.addEventListener('click', fatorial);

btApagar = window.document.getElementById('idBtApagar');
btApagar.addEventListener('click', apagar);
