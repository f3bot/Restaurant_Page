import '../styles/navbar.css'

const generateNavbar = () =>{
    const nav = document.createElement('nav')
    generateLeftDiv(nav)
    generateRightDiv(nav)
    document.body.appendChild(nav)
}

const generateLeftDiv = (parent) =>{
    const div = document.createElement('div')
    const p = document.createElement('p')
    div.classList.add('nav-left-div')
    p.textContent = 'MENU'
    div.appendChild(p)
    parent.appendChild(div)
}

const generateRightDiv = (parent) =>{
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.textContent = 'TONCHIN'
    div.appendChild(p)
    parent.appendChild(div)
}

export {generateNavbar}
