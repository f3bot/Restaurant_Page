import '../styles/description-two.css'

const generateSecondHero = () =>{
    const parentDiv = document.createElement('div')
    parentDiv.classList.add('taste-hero')
    generateRightContent(parentDiv)
    generateLeftContent(parentDiv)
    document.body.appendChild(parentDiv)
    console.log("HI")
}

const generateLeftContent = (parent) =>{
    const div = document.createElement('div')
    div.classList.add('taste-left-div')
    parent.appendChild(div)
}

const generateRightContent = (parent) =>{
    const div = document.createElement('div')
    div.classList.add('taste-right-div')
    const tasteSpan = document.createElement('span')
    tasteSpan.textContent = 'taste of tonchin'
    tasteSpan.classList.add('taste-small-text')
    const descSpan = document.createElement('span')
    descSpan.textContent = 'Featuring modern Japanese cuisine that is authentic but not traditional. The menu showcases a variety of dishes from its three kitchens: the main kitchen, the sushi counter and the robata grill.'
    descSpan.classList.add('taste-big-text')
    div.appendChild(tasteSpan)
    div.appendChild(descSpan)
    parent.appendChild(div)
} 

export { generateSecondHero }