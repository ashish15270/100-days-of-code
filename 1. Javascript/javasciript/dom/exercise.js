// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice

console.dir(document.body)
h1Element = document.body.children[0].childNodes[0].data
console.dir(h1Element)

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)

console.dir(document.body.children[0].parentElement)
console.dir(document.body.children[0].parentElement.children[1])

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

getElementById = document.getElementsByTagName('h1')[0].outerText
console.dir(getElementById)

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice

getElementByClass = document.querySelector('.class').outerText
console.dir(getElementByClass)

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

document.querySelector('.class').outerText = 'This is a new link'
console.dir(document.querySelector('.class').outerText)

