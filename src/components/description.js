import '../styles/description.css'

const str = 'Celebrating 20 years since first opening its doors in London, tonchin is sophisticated twist on the traditional Japanese Izakaya style of informal eating and drinking. Co-founded by Rainer Becker and Arjun Waney in 2002, tonchin has 13 venues globally and 7 seasonal locations.'

const generateContent = () =>{
    const div = document.createElement('div')
    div.classList.add('essence-hero')
    generateLeftContent(div)
    generateRightContent(div)
    document.body.appendChild(div)
}

const generateLeftContent = (parent) =>{
    const div = document.createElement('div')
    div.classList.add('essence-left-div')
    parent.appendChild(div)
}

const generateRightContent = (parent) =>{
    const div = document.createElement('div')
    div.classList.add('essence-right-div')
    const essenceSpan = document.createElement('span')
    essenceSpan.textContent = 'essence of tonchin'
    essenceSpan.classList.add('essence-small-text')
    const descSpan = document.createElement('span')
    descSpan.textContent = str
    descSpan.classList.add('essence-big-text')
    div.appendChild(essenceSpan)
    div.appendChild(descSpan)
    parent.appendChild(div)
} 

export { generateContent }