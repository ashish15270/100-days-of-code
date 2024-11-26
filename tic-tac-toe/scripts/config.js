function openPLayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid
  playerConfigOverlay.style.display = 'block'
  backdrop.style.display = 'block'
}

function closePlayerConfig(){
  playerConfigOverlay.style.display = 'none'
  backdrop.style.display = 'none'
  formEle.firstElementChild.classList.remove('error')
  errorsOutputElement.textContent = ''
  formEle.firstElementChild.lastElementChild.value = ''
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const playerName = formData.get('playerName').trim();
  
  if (!playerName) {
    event.target.firstElementChild.classList.add('error')
    errorsOutputElement.textContent = 'Please enter a valid name!'
    return
  }

const updatedPlayerDataEle = document.getElementById('player-'+editedPlayer+'-data')
updatedPlayerDataEle.children[1].textContent = playerName

players[editedPlayer-1].name = playerName
closePlayerConfig()
}

