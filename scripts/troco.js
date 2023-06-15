var visor, btCalcular, btReiniciar, btCadastrar, valorDespesa, maiorDespesa, menorDespesa, qtdDespesa, mediaDespesa, totalDespesa, valorRecebido, troco, mensagem;
var c200, c100, c50, c20, c10, c5, c2, m100, m50, m25, m10, m5, m1;

valorDespesa = maiorDespesa = menorDespesa = qtdDespesa = totalDespesa = mediaDespesa = 0;


function cadastrar() {
    valorDespesa = window.document.getElementById('idDespesa').value;
       
    if (valorDespesa <= 0 || valorDespesa == "") {
        visor.innerText = `Informe valores maiores que zero`;
        window.document.getElementById('idDespesa').focus();
    }
    else {
        valorDespesa = parseFloat(valorDespesa.replace(',','.'));  // para aceitar valores decimais tanto com vírgula como com ponto.
        totalDespesa += valorDespesa;

        // analisa maior e menor.
        if (qtdDespesa == 0) {  // estabelece na 1º vez o maior e menor valor.
            maiorDespesa = menorDespesa = valorDespesa; 
        }
        else {
            if (maiorDespesa < valorDespesa) {
                maiorDespesa = valorDespesa;
            }
            if (menorDespesa > valorDespesa) {
                menorDespesa = valorDespesa;
            }
        }

        // calcula a média.
        qtdDespesa += 1;
        mediaDespesa = Number(totalDespesa / qtdDespesa);

        // mostra resultados.
        visor.innerText = `Total: R$  ${totalDespesa.toFixed(2).replace('.', ',')}
        Maior: R$ ${maiorDespesa.toFixed(2).replace('.', ',')}
        Menor: R$ ${menorDespesa.toFixed(2).replace('.', ',')}
        Quantidade: ${qtdDespesa}
        Média: R$ ${mediaDespesa.toFixed(2).replace('.', ',')}`;

        // após cadastrar, limpa o input do valor e o deixa selecionado.
        window.document.getElementById('idDespesa').value = ""; 
        window.document.getElementById('idDespesa').focus();
    }
}


function calcularTroco() {
    c200 = c100 = c50 = c20 = c10 = c5 = c2 = m100 = m50 = m25 = m10 = m5 = m1 = valorRecebido = troco = 0;

    valorRecebido = window.document.getElementById('idPagamento').value;

    if (valorRecebido <= 0 || valorRecebido == "") {
        visor.innerText = `Informe valores maiores que zero`;
        window.document.getElementById('idPagamento').focus();
    }
    else {
        valorRecebido = parseFloat(valorRecebido.replace(',', '.'));
        troco = parseFloat((valorRecebido - totalDespesa).toFixed(2));

        if (troco == 0) {
            mensagem = `Sem necessidade de troco`;
        } 
        else if (troco < 0) {
            mensagem = `Ainda faltam \n R$ ${(troco * (-1)).toFixed(2).replace('.', ',')} \n para completar o pagamento`;
        } 
        else {
            mensagem = `Total: R$ ${totalDespesa.toFixed(2).replace('.', ',')}
            Recebido: R$ ${valorRecebido.toFixed(2).replace('.', ',')}
            Troco: R$ ${troco.toFixed(2).replace('.', ',')} \n
            Cédulas e Moedas: \n\n`;
        
            while (troco >= 200) {
                c200++;
                troco -= 200;
                troco += 0.001; // para resolver problemas com arredondamento.
            }
    
            while (troco >= 100) {
                c100++;
                troco -= 100;
                troco += 0.001; // para resolver problemas com arredondamento.
            }
        
            while (troco >= 50) {
                c50++;
                troco -= 50;
                troco += 0.001; // para resolver problemas com arredondamento.
            }
        
            while (troco >= 20) {
                c20++;
                troco -= 20;
                troco += 0.001; // para resolver problemas com arredondamento.
            }
        
            while (troco >= 10) {
                c10++;
                troco -= 10;
                troco += 0.001; // para resolver problemas com arredondamento.
            }
        
            while (troco >= 5) {
                c5++;
                troco -= 5;
                troco += 0.001; // para resolver problemas com arredondamento.
            }
    
            while (troco >= 2) {
                c2++;
                troco -= 2;
                troco += 0.001; // para resolver problemas com arredondamento.
            }
        
            while (troco >= 1) {
                m100++;
                troco -= 1;
                troco += 0.001; // para resolver problemas com arredondamento.
            }
        
            while (troco >= 0.5) {
                m50++;
                troco -= 0.5;
                troco += 0.001; // para resolver problemas com arredondamento.
            }
        
            while (troco >= 0.25) {
                m25++;
                troco -= 0.25;
                troco += 0.001; // para resolver problemas com arredondamento.
            }
        
            while (troco >= 0.10) {
                m10++;
                troco -= 0.10;
                troco += 0.001; // para resolver problemas com arredondamento.
            }
        
            while (troco >= 0.05) {
                m5++;
                troco -= 0.05;
                troco += 0.001; // para resolver problemas com arredondamento.
            }
    
            // p/ resolver problemas com arredondamento, fixa o valor menor que 5 cents p/ 2 casas decimais e multiplica por 100 para ficar número inteiro.
            m1 = parseInt(troco.toFixed(2) * 100); 
    
            mensagem += `C ( R$ 200 ) : ${c200} \n`;
            mensagem += `C ( R$ 100 ) : ${c100} \n`;
            mensagem += `C ( R$ 50 ) : ${c50} \n`;
            mensagem += `C ( R$ 20 ) : ${c20} \n`;
            mensagem += `C ( R$ 10 ) : ${c10} \n`;
            mensagem += `C ( R$ 5 ) : ${c5} \n`;
            mensagem += `C ( R$ 2 ) : ${c2} \n`;
            mensagem += `M ( R$ 1 ) : ${m100} \n`;
            mensagem += `M ( R$ 0,50 ) : ${m50} \n`;
            mensagem += `M ( R$ 0,25 ) : ${m25} \n`;
            mensagem += `M ( R$ 0,10 ) : ${m10} \n`;
            mensagem += `M ( R$ 0,05 ) : ${m5} \n`;
            mensagem += `M ( R$ 0,01 ) : ${m1} \n`;
        }
        visor.innerText = mensagem;
        window.document.getElementById('idDespesa').focus();



    }
}


function reiniciar() {
    valorDespesa = maiorDespesa = menorDespesa = qtdDespesa = totalDespesa = mediaDespesa = 0;
    visor.innerText = ``;
    window.document.getElementById('idDespesa').value = "";
    window.document.getElementById('idPagamento').value = "";
    window.document.getElementById('idDespesa').focus();
}


visor = window.document.getElementById('idVisor');

btCadastrar = window.document.getElementById('idBtCadastrar');
btCadastrar.addEventListener('click', cadastrar);

btReiniciar = window.document.getElementById('idBtReiniciar');
btReiniciar.addEventListener('click', reiniciar);

btCalcular = window.document.getElementById('idBtCalcular');
btCalcular.addEventListener('click', calcularTroco);

window.document.getElementById('idDespesa').focus(); // programa já inicia com input despesa selcionado
