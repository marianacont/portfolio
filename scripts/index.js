const navButton = document.querySelector('nav .btn');
const menuList = document.querySelector('nav .menu');

const card = document.querySelectorAll('.card');
const prev = document.querySelectorAll('.icon-prev');
const next = document.querySelectorAll('.icon-next');
const indicators = document.querySelectorAll('.indicators button');


navButton.onclick = () => menuList.classList.toggle('active');

// Gallery

    prev.forEach(b => b.addEventListener('click', () =>{
        setElement(card, 'icon-prev');
        setElement(indicators, 'icon-prev')
    })
    )
    next.forEach(b => b.addEventListener('click', () =>{
        setElement(card, 'icon-next');
        setElement(indicators, 'icon-next')
    })
    )


// Elimina la clase 'active'
function getElement (elements){
    let newItem
    for (el of elements){
        if(el.classList.contains('active')){
            el.classList.remove('active');
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
        (el.previousElementSibling || el.parentNode.lastElementChild) :
        type == 'icon-next' ?
        (el.nextElementSibling || el.parentNode.firstElementChild) :
        (el)
        )
        newItem.classList.add('active')

}




// function getElement(array){
//     let newItem
//     for(el in array){
//         if(el.classList.contains(className)){
//             el.classList.remove(className)
//             newItem = el;
//         }
//     }
//     return newItem
// }

// function setElement(array, type){
//     let el = getElement(array);
//     let newItem =(
//         type == "gallery-prev" ?
//     (el.previusElementSibling || el.parentNode.lastElementChild) :
//     type == "gallery-next" ?
//     (el.previusElementSibling || el.parentNode.lastElementChild) :
//     (el)
//     )
//     newItem.classList.add(className)
// }

// // Carrousel
