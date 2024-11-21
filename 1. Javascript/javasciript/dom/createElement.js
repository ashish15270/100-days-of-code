let newAnchorElement = document.createElement('a')
newAnchorElement.href = 'https://www.google.com'
newAnchorElement.text = 'New link is Created'
console.dir(newAnchorElement)

paragraph = document.querySelector('p')
console.dir(paragraph)

paragraph.append(newAnchorElement)


