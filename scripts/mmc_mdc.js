var btCalcular, btApagar, num1, num2, auxiliar, mmc, mdc, resto, visor;


function calcular() {
   num1 = Number(window.document.getElementById('idNum1').value);
   num2 = Number(window.document.getElementById('idNum2').value);

   if (num1 <= 0 || num2 <= 0) {
      visor.innerText = `Informe números naturais \n maiores que zero`;
   } 
   else {
      if (num1 == num2) {
         visor.innerText = `MMC = ${num1} \nMDC = ${num1}`; // mmc e mdc de números iguais são o próprio número.
      } 
      else {
         if (num1 < num2) { // ordena os números informados, para num1 ser sempre o maior entre eles (necessário para fazer mdc).
            auxiliar = num1;
            num1 = num2;
            num2 = auxiliar;
         }

         // MMC
         for (auxiliar = (num1 * num2); auxiliar >= num1; auxiliar--) { // o cont decresce da multiplicação deles (o máximo que um mmc pode ser) até o maior deles.
            if (auxiliar % num1 == 0 && auxiliar % num2 == 0) {  // se os 2 nums forem divisíveis pelo contador, este se torna o novo mmc.
               mmc = auxiliar;
            }
         }

         // MDC (pelo algoritmo de Euclides)
         do {
            resto = num1 % num2 // como estão ordenados, num1 será maior que num2.
            if (resto != 0) { // se a divisão não for exata...
               num1 = num2; // o antigo divisor torna-se o novo dividendo...
               num2 = resto; // e o resto torna-se o novo divisor.
            }
            else {
               mdc = num2; // se a divisão for exata, logo o divisor é o mdc e é o fim do processo.
            }
         } while ( resto != 0);

         visor.innerText = `MMC = ${mmc} \nMDC = ${mdc}`;
      }
   }
}


function apagar() {
   mmc = mdc = num1 = num2 = auxiliar = resto = 0;
   visor.innerText = "";
   window.document.getElementById('idNum1').value = "";
   window.document.getElementById('idNum2').value = "";
   window.document.getElementById('idNum1').focus();
}

window.document.getElementById('idNum1').focus();

visor = window.document.getElementById('idVisor');

btCalcular = window.document.getElementById('idBtCalcular');
btCalcular.addEventListener('click', calcular);

btApagar = window.document.getElementById('idBtApagar');
btApagar.addEventListener('click', apagar);
