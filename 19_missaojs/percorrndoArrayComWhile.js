let paises = ["Brasil", "china", "argentina", "portugal"];
let contador = 0;

while (contador < paises.length) {
    console.log(paises[contador]);
    contador++;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

let pares = 0;
let impar = 0;

let contador3 = 0;

while (contador3 < numeros.length) {
    if (numeros[contador3] % 2 == 0) {
        pares++
    }
    else {
        impar++
    }
    contador3++
}
console.log(pares);
console.log(impar);



let nomes = ["Agnos", "sulen", "jean", "vilela"];

let contador4 = 0;

while (contador4 < nomes.length) {
    console.log(nomes[contador4]);
    contador4++;
}

let contador5 = 0;

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

do {

    console.log(meses[contador]);
    contador5++;

} while (contador5 < meses.length);