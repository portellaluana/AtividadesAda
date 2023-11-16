//EXERCICIO 1
const hotifrutis = [
  "banana",
  "agrião",
  "maçã",
  "abacaxi",
  "melancia",
  "laranja",
  "limão",
  "cenoura",
  "melancia",
  "batata",
  "brócolis",
  "abóbora",
  "tomate",
  "alho-poró",
  "alface",
  "espinafre",
  "rúcula",
  "couve",
  "acelga",
  "maçã",
  "batata",
];

const carrinho = (listaItens) => {
  const tipoItem = {
    fruta: ["banana", "maçã", "abacaxi", "melancia", "laranja", "limão"],
    legume: ["cenoura", "batata", "brócolis", "abóbora", "tomate", "alho-poró"],
    verdura: ["alface", "espinafre", "rúcula", "couve", "agrião", "acelga"],
  };

  const count = {
    fruta: 0,
    legume: 0,
    verdura: 0,
  };

  listaItens.forEach((item) => {
    if (tipoItem.fruta.includes(item)) {
      count.fruta++;
    } else if (tipoItem.legume.includes(item)) {
      count.legume++;
    } else if (tipoItem.verdura.includes(item)) {
      count.verdura++;
    }
  });

  return count;
};

const meuCarrinho = carrinho(hotifrutis);
console.log("Exercício 1: ", meuCarrinho);

//EXERCICIO 2
const empregados = [
  { nome: "João", salario: 1200 },
  { nome: "Maria", salario: 1500 },
  { nome: "Pedro", salario: 1800 },
  { nome: "Ana", salario: 1400 },
  { nome: "Carlos", salario: 2000 },
];

const maiorIgual1500 = (valor) => valor.salario >= 1500;
const menorIgual100 = (valor) => valor.salario <= 1000;

const yes = "Ao menos um colaborador tem salário maior ou igual a R$ 1500";
const not = "Ninguém recebe R$ 1000 ou menos";

console.log("Exercício 2: ", empregados.some(maiorIgual1500) ? yes : not);
console.log("Exercício 2: ", empregados.some(menorIgual100) ? yes : not);

//EXERCICIO 3
const pessoas = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

function calcularIMC(alguem) {
  const imc = alguem.peso / alguem.altura ** 2;
  return imc;
}

function mostrarIMC(listaPessoas) {
  for (let i = 0; i < listaPessoas.length; i++) {
    const imc = calcularIMC(listaPessoas[i]);
    console.log(`Exercício 3: O IMC de ${listaPessoas[i].nome} é ${imc}`);
  }
}

mostrarIMC(pessoas);

//EXERCICIO 4

const alunos = [
  { nome: "Ana", notas: [7, 8, 9] },
  { nome: "Pedro", notas: [5, 6, 7] },
  { nome: "Maria", notas: [9, 8, 10] },
  { nome: "João", notas: [6, 7, 8] },
  { nome: "Lucas", notas: [8, 9, 7] },
  { nome: "Julia", notas: [10, 8, 9] },
];

const mediaAluns = alunos.map((aluno) => {
  const somaNotas = aluno.notas.reduce((total, nota) => total + nota, 0);
  const media = somaNotas / aluno.notas.length;

  return {
    nome: aluno.nome,
    media: media,
  };
});

console.log("Exercício 4: ", mediaAluns);
