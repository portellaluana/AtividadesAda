//1////////////////////////////////////
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

const novoCarro = new Carro("fiat", "uno", 2020);

console.log(novoCarro);

//2///////////////////////////////////
class Pessoa {
  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }
}

const outraPessoa = new Pessoa("Luana", 39, "Florianópolis");
console.log("Nome:", outraPessoa.nome);

//3///////////////////////////////////
class Conta {
  constructor(nome, saldo = 0) {
    this.nome = nome;
    this.saldo = saldo;
  }

  validaSaque(saque) {
    if (this.saldo >= saque) {
      return true;
    } else return false;
  }

  aprovaSaque(valor) {
    if (valor) {
      if (this.validaSaque(valor)) {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} aprovado`);
      } else
        console.log(
          `Saque de R$ ${valor} negado. Seu saldo é de R$ ${this.saldo}`
        );
    }
  }

  deposito(valor) {
    this.saldo += valor;
    console.log(`Seu saldo atual é de R$ ${this.saldo}`);
  }
}

const outraConta = new Conta("Luana", 500);
outraConta.aprovaSaque(900);
outraConta.deposito(900);
outraConta.aprovaSaque(1300);
outraConta.deposito(900);

//4///////////////////////////////////

class Circulo {
  constructor(raio) {
    this.raio = raio;
  }

  perimetro() {
    return Math.PI * this.raio ** 2;
  }
}
const novoCirculo = new Circulo(5);
console.log("Área do círculo:", novoCirculo.perimetro());

//5///////////////////////////////////
class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }
}
const novoLivro = new Livro("Um", "Autor", 1);
const outroLivro = new Livro("Dois", "Autor", 2);
console.log(outroLivro);
console.log(novoLivro);

//6///////////////////////////////////
class retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }
  area() {
    return this.largura * this.altura;
  }
}
const novoRatangulo = new retangulo(10, 5);
console.log(novoRatangulo.area());

//7///////////////////////////////////
class Aluno {
  constructor(nome, matricula, lista) {
    this.nome = nome;
    this.matricula = matricula;
    this.lista = lista;
  }
  calculaMedia() {
    let soma = this.lista.reduce(function(accumulator,value){
        return (accumulator + value)
      },0);
      return soma / this.lista.length

}}
const novoAluno = new Aluno("luana", 123, [10, 7, 4]);
console.log(novoAluno.calculaMedia());

//8///////////////////////////////////
// class Triangulo{
//     constructor(lado1, lado2, lado3){
//         this.lado1 = lado1;
//         this.lado2 = lado2;
//         this.lado3 = lado3;
//     }

// }


//9///////////////////////////////////
class Carrinho{
    constructor(nome,valor,quantidade){
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
    }
    calculaTotal(){
        let total = this.valor * this.quantidade
        return total
    }
}
const novoCarrinho = new Carrinho('produto1', 5, 4)
console.log(novoCarrinho.calculaTotal())


//10///////////////////////////////////
class Funcionario {
    constructor(nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    aumento(){
        let aumento = this.salario * 0.1
        let desconto = (this.salario + aumento) * 0.04;
        return (this.salario + aumento) - desconto
    }
}
const aumentoSalario = new Funcionario('luana','dev',2000)
console.log(`Aumento de 10% e desconto de 4%: R$ ${aumentoSalario.aumento()}`)
// console.log(aumentoSalario.desconto())
