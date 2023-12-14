let currentLevel = 1;
let value = document.querySelector('.value')
let acabou = document.querySelector('.acabou')
class levels {
  constructor(nivel, itens) {
    this.nivel = nivel;
    this.itens = itens;
  }
}
const level1 = new levels(0, [10, 10, 10, 30, 30]);
const level2 = new levels(1, [10, 10, 10, 30, 10]);
const level3 = new levels(2, [10, 10, 10, 30, 0]);
const level4 = new levels(3, [10, 10, 0, 30, 0]);
const level5 = new levels(4, [10, 0, 0, 30, 0]);

function sortearPorta() {
  const itensDoNivelAtual = eval(`level${currentLevel}.itens`);
  const indiceSorteado = Math.floor(Math.random() * itensDoNivelAtual.length);
  const valorSorteado = itensDoNivelAtual[indiceSorteado];
 
  console.log('itensDoNivelAtual', itensDoNivelAtual)

  let arraySemSorteado = itensDoNivelAtual.indexOf(indiceSorteado)
  itensDoNivelAtual.splice(arraySemSorteado, 1)

  value.innerHTML = valorSorteado
  console.log(' currentLevel',  currentLevel)
  currentLevel++;
  if(currentLevel === 6){
    acabou.innerHTML = 'acabou tentativas'
  }
  if(valorSorteado === 0){
    acabou.innerHTML = 'perdeu tudo'
  }
}
