/*vamos percorrer um array de cursos de idiomas
  obter e imprimir os dados 
  calcular o valor da hora de cada curso. 
  é exibida uma mensagem de acordo com o valor da hora do curso.
  valor da hora == preco / carga horaria
  usar for of e if /else*/

var cursos = [
  { nome_curso: "Matematica", carga_horaria: "100", preco: "50" },
  { nome_curso: "Historia", carga_horaria: "120", preco: "80" },
  { nome_curso: "Portugues", carga_horaria: "150", preco: "100" },
  { nome_curso: "Ingles", carga_horaria: "80", preco: "50" },
  { nome_curso: "Artes", carga_horaria: "60", preco: "35" }
];

for (let produto_curso of cursos) {


  let curso_nome = produto_curso.nome_curso;
  let quantidade_horas = produto_curso.carga_horaria;
  let valor = produto_curso.preco;

  var valor_hora = valor / quantidade_horas;

  console.log("Nome do curos: " + curso_nome);
  console.log("Carga Horária do curso: " + quantidade_horas);
  console.log("Valor da hora: " + valor);

  if (valor_hora >= 15) {
    console.log("Hora / aula superior ou igual a R$ 15,00");
  }
  else {
    console.log("Hora / aula inferior ou  a R$ 15,00");
  }
  console.log("\n");
}