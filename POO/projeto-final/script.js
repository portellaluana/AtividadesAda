let level = document.querySelector(".level");
let item = document.querySelectorAll(".item");
let currentLevel = 1;
let acabou = document.querySelector(".acabou");
let totalGanho = 0;
let porta1 = document.querySelector('.porta1')
let porta2 = document.querySelector('.porta2')
let porta3 = document.querySelector('.porta3')
let porta4 = document.querySelector('.porta4')
let porta5 = document.querySelector('.porta5')
const btnAtualizar = document.querySelector(".btn-refresh");

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


  let arraySemSorteado = itensDoNivelAtual.indexOf(indiceSorteado);
  itensDoNivelAtual.splice(arraySemSorteado, 1);

  currentLevel++;

  level.innerHTML = `Level ${currentLevel}`;

  totalGanho = totalGanho + valorSorteado;

  if (currentLevel === 6) {
    level.innerHTML = `Acabou`;
    btnAtualizar.style.display = "flex";

    for (i = 0; i < item.length; i++) {
      item[i].classList.add("gameover");
    }
  }
  
  if (valorSorteado === 0) {
    level.innerHTML = `Perdeu tudo`;
    acabou.innerHTML = `Perdeu tudo`;
    btnAtualizar.style.display = "flex";

    for (i = 0; i < item.length; i++) {
      item[i].classList.add("gameover");
    }
  } else acabou.innerHTML = `Total a ganhar R$ ${totalGanho}`;

  if(currentLevel === 2){
    porta1.classList.add('hide')
    porta2.classList.remove('hide')
  }
  if(currentLevel === 3){
    porta2.classList.add('hide')
    porta3.classList.remove('hide')
  }
  if(currentLevel === 4){
    porta3.classList.add('hide')
    porta4.classList.remove('hide')
  }
  if(currentLevel === 5){
    porta4.classList.add('hide')
    porta5.classList.remove('hide')
  }
}


