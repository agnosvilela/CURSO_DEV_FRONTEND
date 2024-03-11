// declarando um objeto
var aluno_academia = {
    id: 10,
    nome: "Agnos ",
    altura: 1.70,
    peso: 105
};

//criando variaveis e acessando seus valores
var nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
var altura_aluno = aluno_academia.altura;

// calculo para imc de uma pessoa
var imc_aluno = peso_aluno / (altura_aluno * altura_aluno).toFixed(2);

console.log(" o IMC do aluno é " + altura_aluno);

// condição apos o resultado do imc
if (imc_aluno < 18.5) {
    console.log("O aluno " + nome_aluno + "esta abaixo do peso");
}
else if (imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log(" O aluno " + nome_aluno + "Esta com peso normal");
}
else {
    console.log(" O aluno " + nome_aluno + "Esta acima do peso");
}

/** coleção de dados em javascript */

var colecao_disciplina = [
    { id: 1, nome: "Mat", carga_horaria: 240 },
    { id: 2, nome: "Port", carga_horaria: 220 },
];

console.log(colecao_disciplina[1]);
console.log(colecao_disciplina[0].nome);

var data_atual = new Date();
console.log(data_atual.getDay());

/**criando coleção de objetos de series de programação */

var colecao_series_programacao = [
    { nome: "Breaking Bad", horario: "21h", sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime" },
    { nome: "Fargo", horario: "22h", sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive." },
    { nome: "Lost", horario: "20h", sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break", horario: "23h", sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA" },
    { nome: "Black Mirror", horario: "23h", sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ", horario: "20h", sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto." },
    { nome: "Dark", horario: "22h", sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos." }
];

var data_atual = new Date();

var dia_semana = data_atual.getDay();
console.log(dia_semana)

var serie_do_dia = colecao_series_programacao[dia_semana];

var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);