var btCalcular, btApagar, visor, n, p, combinacao, cont;

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
        combinacao = fatorial(n) / (fatorial(p) * fatorial(n - p));

        visor.innerText = `C ( ${n}, ${p} ) = ${combinacao}`;
    }
}

function fatorial(num) {
    var fatorial = 1;

    for (cont = num; cont >= 1; cont--) {
        fatorial *= cont;
    }
    return fatorial;
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
