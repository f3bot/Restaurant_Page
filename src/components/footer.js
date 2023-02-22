import '../styles/footer.css'

const generateFooter = () =>{
    const div = document.createElement('div')
    generateFooterContent(div)
    document.body.appendChild(div)
}

const generateFooterContent = (parent) =>{
    const childSpan = document.createElement('span')
    childSpan.textContent = '©f3bot'
    parent.appendChild(childDiv)
}

export { generateFooter }