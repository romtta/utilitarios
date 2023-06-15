var btCalcular, btApagar, visor, n, p, arranjo = 1, cont;


function calcular() {
    n = Number(window.document.getElementById('idN').value);
    p = Number(window.document.getElementById('idP').value);

    if (n < p ) {
        visor.innerText = `O valor de N deve ser \n igual ou maior que o de P`;
    }
    else if (n <= 0 || p <= 0) {
        visor.innerText = `Informe valores maiores que zero`;
    }
    else {
        for (cont = n; cont > (n - p); cont--) {
            arranjo *= cont;
        }

        visor.innerText = `A ( ${n}, ${p} ) = ${arranjo}`;

        // apaga para não gerar erros ao se clicar em "Calcular" repetidas vezes.
        n = p = cont = 0;
        arranjo = 1;
    }
}


function apagar() {
    n = p = cont = 0;
    arranjo = 1;
    visor.innerText = "";
    window.document.getElementById('idN').value = "";
    window.document.getElementById('idP').value = "";
    window.document.getElementById('idN').focus();
}

window.document.getElementById('idN').focus();

visor = window.document.getElementById('idVisor');

btCalcular = window.document.getElementById('idBtCalcular');
btCalcular.addEventListener('click', calcular);

btApagar = window.document.getElementById('idBtApagar');
btApagar.addEventListener('click', apagar);
