class Jogo {
  constructor() {
    this.itens = [
      { nome: "perdeTudo", chance: 0.2, valor: 0 },
      { nome: "ganhaTudo", chance: 0.2, valor: 30 },
      { nome: "ganhaPouquinho", chance: 0.2, valor: 10 },
      { nome: "ganhaPouquinho", chance: 0.2, valor: 10 },
      { nome: "ganhaPouquinho", chance: 0.2, valor: 10 },
    ];
    this.pontuacaoTotal = 0;
    this.chancesRestantes = 5;
  }

  escolheItem(nomeItem) {
    if (this.chancesRestantes > 0) {
      let mensagem = "";
      let pontosGanhos = 0;

      const itemSelecionado = this.itens.find(item => item.nome === nomeItem);
      const random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

      if (random < 3 && itemSelecionado.nome === "ganhaTudo") {
        mensagem = `GANHA 30`;
        pontosGanhos = +30;
      } else if (random > 2 && random < 5 && itemSelecionado.nome === "perdeTudo") {
        mensagem = `PERDEU TUDO`;
        pontosGanhos = 0;
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
        resultado.innerHTML = `Suas chances acabaram. Sua pontuação total é: ${this.pontuacaoTotal}. Recarregue a página para jogar novamente!`;
      } else {
        resultado.innerHTML = `Chances restantes: ${this.chancesRestantes}. ${mensagem}`;
      }

      // pontuacaoAtual.textContent = `Pontuação atual: ${this.pontuacaoTotal}`;
    }
  }

  associarFormulario() {
    const itens = document.querySelectorAll('.item');
    const jogo = this;

    itens.forEach(item => {
      item.addEventListener('click', function(event) {
        console.log('id', event.currentTarget.id)
        const nomeItem = event.currentTarget.id;
        jogo.escolheItem(nomeItem);
      });
    });
  }
}

const jogo = new Jogo();
jogo.associarFormulario();
