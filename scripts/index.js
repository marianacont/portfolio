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
    indicators.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            setElement(card, i);
            setElement(indicators, i)
        })
    })


// Elimina la clase 'active'
function getElement (elements){
        for (el of elements){
        if(el.classList.contains('active')){
            el.classList.remove('active');
            return el
        }
    }
}

// Permite pasar de un elemento al siguiente, al anterior, al primero o al último, según el nombre de su clase
function setElement(array, type){
    let el = getElement(array);

    let newItem = (
        type === 'icon-prev' ?
        (el.previousElementSibling || el.parentNode.lastElementChild) :
        type == 'icon-next' ?
        (el.nextElementSibling || el.parentNode.firstElementChild) :
        (array[type])
        )
        newItem.classList.add('active')

}
