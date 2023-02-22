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
    const a = document.createElement('a')
    const img = document.createElement('img')
    a.classList.add('link')
    img.src = '../src/assets/github3.png'    
    a.appendChild(img)
    a.href = 'https://github.com/f3bot'
    parent.appendChild(a)
}

export { generateFooter }