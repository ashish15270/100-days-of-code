let inputElement = document.querySelector('input')

//let chars = inputElement.addEventListener('input',inputElement)
function logInput(event) {
  let lengthofString = event.target.value.length
  
  if (lengthofString > 10) {
    document.getElementById('input').classList.add('warning')
  }
 // console.log(lengthofString)
 pElement = document.querySelector('p')
 //console.dir(pElement)
 pElement.textContent = 'Length: ' + lengthofString + ' / 60'
}

inputElement.addEventListener('input',logInput)

pElement = document.querySelector('p')


