let element = document.querySelector('input')

console.dir(element)

//element.textContent='ashish'

function logContent() {
  console.log(element.value)
}
//console.log('hey')


element.addEventListener('input',logContent)

