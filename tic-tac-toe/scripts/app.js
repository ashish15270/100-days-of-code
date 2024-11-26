const gameData = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

let editedPlayer = 0
let activePlayer = 0
let currentRound = 1
let gameIsOver = false

const players = [
  {
    name: '',
    symbol:'X'
  },
  {
    name: '',
    symbol:'O'
  }
]

const playerConfigOverlay = document.getElementById('config-overlay')
const backdrop = document.getElementById('backdrop')
const formEle = document.querySelector('form')
const errorsOutputElement = document.getElementById('config-errors')
const gameAreaEle = document.getElementById('active-game')
const activePlayerName = document.getElementById('active-player-name')
const gameOverEle = document.getElementById('game-over')
const gameBoardEle = document.getElementById('game-board')

const editPlayer1Btn = document.getElementById('edit-player-1-btn')
const editPlayer2Btn = document.getElementById('edit-player-2-btn')
const cancelConfig = document.getElementById("cancel-config-button")
const startBtn = document.getElementById('start-game-btn')
const gameFieldEles = document.querySelectorAll('#game-board li')


editPlayer1Btn.addEventListener('click',openPLayerConfig)
editPlayer2Btn.addEventListener('click',openPLayerConfig)
cancelConfig.addEventListener('click',closePlayerConfig)
formEle.addEventListener('submit',savePlayerConfig)
startBtn.addEventListener('click', startNewGame)

for (gameFieldEle of gameFieldEles){
  gameAreaEle.addEventListener('click', selectGameField)
}