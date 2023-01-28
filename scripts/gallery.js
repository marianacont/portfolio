const card = document.querySelectorAll('.card');
const prev = document.querySelectorAll('.icon-prev');
const next = document.querySelectorAll('.icon-next');
const indicators = document.querySelectorAll('.indicators button');


prev.forEach(b => b.addEventListener('click', () =>{
    setElement(card, 'icon-prev');
    
})
)
next.forEach(b, i => b.addEventListener('click', () =>{
    setElement(card, 'icon-next');
    
})
)

function getElement (elements){Mn 
    let newItem
    for (el of elements){
        if(el.classList.conatins(className)){
            el.classList.remove(className);
            newItem = el
        }
    }
    return newItem
}

// Permite pasar de un elemento al siguiente, al anterior, al primero o al último, según el nombre de su clase
function setElement(array, type){
    let el = getElement(array);

    let newItem = (
        type === 'icon-prev' ?
        (el.previusElementSibling || el.parentNode.lastElementChild) :
        type == 'icon.next' ?
        (el.nextElementSibling || el.parentNode.firstElementChild) :
        (el)
        )
        newItem.classList.add(className)

}