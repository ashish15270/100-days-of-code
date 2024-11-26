function resetGameStatus() {
  activePlayer = 0
  currentRound = 1
  gameIsOver = false
  console.log(gameData)
  gameOverEle.firstElementChild.innerHTML = 
  '<h2>You won! <span id="winner-name">Player Name</span></h2>'

  gameOverEle.style.display = 'none'

  let gameBoardIndex = 0
  for (let i=0;i<3;i++){
    for (let j=0;j<3;j++){
      gameData[i][j]=0
      gameBoardEle.children[gameBoardIndex].textContent = ''
      gameBoardEle.children[gameBoardIndex].classList.remove('disabled')
      gameBoardIndex++
    }
  }
}

function startNewGame() {
  if (players[0].name === '' || players[1].name === ''){
    alert('Please enter custom names for players')
    return
  }

  resetGameStatus()
  gameAreaEle.style.display = 'block'
  activePlayerName.textContent = players[0].name
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1
  }
  else {
    activePlayer = 0
  }
  activePlayerName.textContent = players[activePlayer].name
}

function selectGameField(event) {
  const selectedField = event.target
  const selectedCol = selectedField.dataset.col
  const selectedRow = selectedField.dataset.row

  if (gameData[selectedRow-1][selectedCol-1]>0 || gameIsOver) {
    alert('Please select  a valid field')
    return
  }
  selectedField.textContent = players[activePlayer].symbol
  selectedField.classList.add('disabled')

  gameData[selectedRow-1][selectedCol-1] = activePlayer + 1

  const winnerId = checkForGameover()
  if (winnerId!==0){
    endGame(winnerId)
  }

  currentRound++
  //console.log(currentRound)
  switchPlayer()
}

function checkForGameover () {
//check for columns

  for (let i=0;i<3;i++){
    if (
      gameData[i][0] > 0 && 
      gameData[i][0] === gameData[i][1] && 
      gameData[i][1] === gameData[i][2]
    ){
      return gameData[i][0]
    }
  }
//check for rows
for (let i=0;i<3;i++){
  if (
    gameData[0][i] > 0 && 
    gameData[0][i] === gameData[1][i] && 
    gameData[1][i] === gameData[2][i]
  ){
    return gameData[i][0]
  }
}
// check for diagonals

if (
  gameData[0][0]>0 && 
  gameData[0][0]=== gameData[1][1] && 
  gameData[1][1] === gameData[2][2]
) {
  return gameData[0][0]
}

if (
  gameData[0][2]>0 && 
  gameData[0][2]=== gameData[1][1] && 
  gameData[1][1] === gameData[2][0]
) {
  return gameData[0][2]
  
}

if (currentRound === 9){
  return -1
}
return 0
}

function endGame(winnerId){
  gameIsOver=true
  gameOverEle.style.display = 'block'

  if (winnerId > 0){
    gameAreaEle.firstElementChild.firstElementChild.textContent = 'You won ' + players[winnerId-1].name
    console.log(gameData)
  }
  else {
    gameOverEle.firstElementChild.textContent = 'It\'s a draw'
  }
  
}