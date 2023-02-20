import '../styles/mainSite.css'

const generateContent = () =>{
    generateLeftDiv()
    const div = document.createElement('div')  
    let img = document.createElement('img')
    img.src = '../src/assets/marinated-black-cod.jpg'
    div.appendChild(img)

    document.body.appendChild(div)
}

const generateLeftDiv = (parent) =>{
    console.log("LEFT")
    const descriptionDiv = document.createElement('div')

}

let descriptionText = 'The menu is comprehensive and alluring. Dishes are authentic but not traditional with bold, intense flavours and an emphasis on simple presentation acquired through quality ingredients. There is no set protocol on ordering from the menu; izakaya style means that dishes are designed to be shared at the table.'

export { generateContent }