const footer = document.querySelector(".footer");
const playerTurn = document.querySelector(".player-turn");
const restartGame = document.querySelector('.restart');
const bottom = document.querySelector('.bottom');
const cell = document.querySelectorAll(".cell");
const cell1 = document.querySelector(".cell1");
const cell2 = document.querySelector(".cell2");
const cell3 = document.querySelector(".cell3");
const cell4 = document.querySelector(".cell4");
const cell5 = document.querySelector(".cell5");
const cell6 = document.querySelector(".cell6");
const cell7 = document.querySelector(".cell7");
const cell8 = document.querySelector(".cell8");
const cell9 = document.querySelector(".cell9");

const Player = (name, marker) => {
  return { name, marker };
};

let isClicked = true;

const player = Player("Player1", "");

let playerPoints1 = 0;
let playerPoints2 = 0;

const checkWinner = () => {
 

  console.log(playerPoints1)

  if (cell1.textContent === 'x' && cell2.textContent === 'x' && cell3.textContent === 'x') {
    playerPoints1++;
    footer.innerHTML = "Player X won this round!!!"
  } else if (cell1.textContent === 'o' && cell2.textContent === 'o' && cell3.textContent === 'o'){
    playerPoints2++;
    footer.innerHTML = "Player O won this round!!!"
  } else if (cell4.textContent === 'x' && cell5.textContent === 'x' && cell6.textContent === 'x'){
    playerPoints1++;
    footer.innerHTML = "Player X won this round!!!";
  } else if (cell4.textContent === 'o' && cell5.textContent === 'o' && cell6.textContent === 'o'){
    playerPoints2++;
    footer.innerHTML = "Player O won this round!!!";
  } else if (cell7.textContent === 'x' && cell8.textContent === 'x' && cell9.textContent === 'x'){
    playerPoints1++;
    footer.innerHTML = "Player X won this round!!!"
  } else if (cell7.textContent === 'o' && cell8.textContent === 'o' && cell9.textContent === 'o'){
    playerPoints2++;
    footer.innerHTML = "Player O won this round!!!"
  } else if (cell1.textContent === 'x' && cell4.textContent === 'x' && cell7.textContent === 'x') {
    playerPoints1++;
    footer.innerHTML = "Player X won this round!!!"
  } else if (cell1.textContent === 'o' && cell4.textContent === 'o' && cell7.textContent === 'o'){
    playerPoints2++;
    footer.innerHTML = "Player O won this round!!!"
  } else if (cell2.textContent === 'x' && cell5.textContent === 'x' && cell8.textContent === 'x'){
    playerPoints1++;
    footer.innerHTML = "Player X won this round!!!"
  } else if (cell2.textContent === 'o' && cell5.textContent === 'o' && cell8.textContent === 'o'){
    playerPoints2++;
    footer.innerHTML = "Player O won this round!!!"
  } else if (cell3.textContent === 'x' && cell6.textContent === 'x' && cell9.textContent === 'o'){
    playerPoints1++;
    footer.innerHTML = "Player X won this round!!!"
  } else if (cell3.textContent === 'o' && cell6.textContent === 'o' && cell9.textContent === 'o'){
    playerPoints2++;
    footer.innerHTML = "Player O won this round!!!"
  } else if (cell1.textContent === 'x' && cell5.textContent === 'x' && cell9.textContent === 'x'){
    playerPoints1++;
    footer.innerHTML = "Player X won this round!!!"
  } else if (cell1.textContent === 'o' && cell5.textContent === 'o' && cell9.textContent === 'o'){
    playerPoints2++;
    footer.innerHTML = "Player O won this round!!!"
  } 
}

const restart = () => {
  cell.forEach(square => square.textContent = '')
  footer.innerHTML = "";
  bottom.innerHTML = "";
  isClicked = true;
}

const finalWinner = () => {
  if (playerPoints1 === 3) {
    bottom.innerHTML = "Player X won the GAME!!!"
    playerPoints1 = 0;
  } else if (playerPoints2 === 3){
    bottom.innerHTML = "Player O won the GAME!!!"
    playerPoints2 = 0;
  }
}




function gameBoard(e) {
  if (isClicked) {
    player.marker = 'x';
    e.target.innerHTML = player.marker;
    isClicked = false;
  } else {
    player.marker = "o";
    e.target.innerHTML = player.marker;
    isClicked = true;
  }
  

  checkWinner();
  finalWinner();
}

cell.forEach(square => {
  square.addEventListener('click', gameBoard , {once:true})
})

restartGame.addEventListener('click', restart);

