import '../styles/mainSite.css'

const generateHero = ( ) =>{
    const div = document.createElement('div')
    div.classList.add('hero')
    const textDiv = document.createElement('div')
    textDiv.classList.add('text-div')
    div.appendChild(textDiv)
    generateLogo(textDiv)
    generateDescription(textDiv)
    generateButton(textDiv)
    generateDiv(textDiv)
    
    document.body.appendChild(div)
}

const generateLogo = (parent) =>{
    const span = document.createElement('span')
    span.classList.add('logo-hero-center')
    span.textContent = 'TONCHIN'
    parent.appendChild(span)
}

const generateDescription = (parent) =>{
    const span = document.createElement('span')
    span.textContent = 'contemporary japanese cuisine'
    parent.appendChild(span)
}

const generateButton = (parent) =>{
    const button = document.createElement('button')
    button.textContent = 'make a reservation'
    parent.appendChild(button)
}

const generateDiv = (parent) =>{
    const div = document.createElement('div')
    div.classList.add('lower-div')
    const spanOne = document.createElement('span')
    spanOne.textContent = 'private dining'
    const spanTwo = document.createElement('span')
    spanTwo.textContent = 'locations'
    div.appendChild(spanOne)
    div.appendChild(spanTwo)
    parent.appendChild(div)
}

export { generateHero }