import '../styles/footer.css'

const generateFooter = () =>{
    const div = document.createElement('div')
    div.classList.add('footer')
    generateFooterContent(div)
    document.body.appendChild(div)
    console.log('dhiv')
}

const generateFooterContent = (parent) =>{
    const childSpan = document.createElement('span')
    childSpan.textContent = '©f3bot'
    parent.appendChild(childSpan)
}

export { generateFooter }