// sum our number

const clacSumBtn = document.querySelector('#calculator button')

function calcSum () {
  const inputNumber = document.getElementById('user-number').value
  requiredSum = 0
  for (let i=0;i<=inputNumber;i++) {
    requiredSum = requiredSum + i
  }
  
  document.getElementById('calculated-sum').textContent = requiredSum
  document.getElementById('calculated-sum').style.display = 'block'
}

clacSumBtn.addEventListener('click', calcSum)

//highligh links

const highlightLinksBtn = document.querySelector('#highlight-links button')

function highlightLinks() {
  const anchrElements = document.querySelectorAll('#highlight-links a');

  for (const anchor of anchrElements) {
    anchor.classList.add('highlight')
  }
}

highlightLinksBtn.addEventListener('click', highlightLinks)

// display user data

const dummyUserData = {
  firstName : 'Ashish',
  lastName : 'Kumar',
  age: 30
}

const displayUserDataBtn = document.querySelector('#user-data button')

function displayUserData() {
  const outputDataEle = document.querySelector('#output-user-data')

  outputDataEle.innerHTML = ''

  for (const key in dummyUserData) {
    const newDisplayItemEle = document.createElement('li')
    const displayItem = key.toUpperCase() + ' : ' + dummyUserData[key]
    newDisplayItemEle.textContent = displayItem
    outputDataEle.append(newDisplayItemEle)
  }
}

displayUserDataBtn.addEventListener('click', displayUserData)

// dice

const diceBtn = document.querySelector('#statistics button')

function rollDice() {
  return Math.floor(Math.random()*6+1)
}

function deriveNumDice() {
  const targetNumEle = document.querySelector('#user-target-number');
  const diceRollsList = document.getElementById('dice-rolls')

  const inputNum = targetNumEle.value
  diceRollsList.innerHTML = ''

  let hasRolledTArgetNum = false

  const totalRollsEle = document.getElementById('output-total-rolls')
  const outputTargetNumEle = document.getElementById("output-target-number")
  outputTargetNumEle.textContent = inputNum

  let i=0
  while(!hasRolledTArgetNum) {
    i++
    const rolledNumber = rollDice()
    if (rolledNumber == inputNum) {
      hasRolledTArgetNum = true
      const newRollListEle = document.createElement('li')
      newRollListEle.textContent = 'Roll : ' + i + rolledNumber
      totalRollsEle.append(newRollListEle)
    }
  }
  totalRollsEle.textContent = i
}

diceBtn.addEventListener('click', deriveNumDice)