class Jogo {
  constructor() {
    this.pontuacaoTotal = 0;
    this.chancesRestantes = 5;
  }

  escolheItem() {
    if (this.chancesRestantes > 0) {
      let mensagem = "";
      let pontosGanhos = 0;

      const random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log('random', random)
      if (random < 3 ) {
        mensagem = `GANHA 30`;
        pontosGanhos = +30;
      } else if (random > 2 && random < 5) {
        mensagem = `PERDEU TUDO`;
        pontosGanhos = this.pontuacaoTotal*0;
        this.chancesRestantes = 0;
      } else {
        pontosGanhos = +10;
        mensagem = `GANHA 10`;
      }

      this.pontuacaoTotal += pontosGanhos;
      this.chancesRestantes--;

      const resultado = document.getElementById('resultado');
      const pontuacaoAtual = document.getElementById('pontuacaoAtual');

      if (this.chancesRestantes === 0) {
        resultado.innerHTML = `Recarregue a página para jogar novamente!`;
      } else {
        resultado.innerHTML = `${mensagem}`;
      }

      pontuacaoAtual.textContent = `Total a ganhar: ${this.pontuacaoTotal}`;
    }
  }

  associarFormulario() {
    const itens = document.querySelectorAll('.item');
    const jogo = this;

    itens.forEach(item => {
      item.addEventListener('click', function() {
        jogo.escolheItem();
      });
    });
  }
}

const jogo = new Jogo();
jogo.associarFormulario();
