/**Estrutura de repetição são blocos de codigo que podem
 * ser executados diversas vezes.
 */

for (let contador = 0; contador < 10; contador++) {
    console.log(contador);
}


let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++; // se nao colocar vai gerar um loop infinito

}

/*********************************************** */
let capital_emprestado = 3000;
let taxa_juros = 0.02;

let contador2 = 1;
let parcelas_totais = 5;

while (contador2 <= parcelas_totais) {
    let numero_parcelas = contador;
    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcelas;

    console.log(numero_parcelas + "" + juros_emprestimo);
    contador2++;

}



