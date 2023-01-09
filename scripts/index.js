const d = document;
const navButton = d.querySelector('nav .btn');
const menuList = d.querySelector('nav .menu');
const className = "active";
const gallery = d.querySelectorAll(".gallery li");
const prev = d.querySelectorAll('button .gallery-prev');
const next = d.querySelectorAll('button .gallery-next');
const indicators = d.querySelectorAll('.indicators button')


navButton.onclick = () => menuList.classList.toggle('active');


// Gallery

function getElement(array){
    let newItem
    for(el in array){
        if(el.classList.contains(className)){
            el.classList.remove(className)
            newItem = el;
        }
    }
    return newItem
}

function setElement(array, type){
    let el = getElement(array);
    let newItem =(
        type == "gallery-prev" ?
    (el.previusElementSibling || el.parentNode.lastElementChild) :
    type == "gallery-next" ?
    (el.previusElementSibling || el.parentNode.lastElementChild) :
    (el)
    )
    newItem.classList.add(className)
}

// Carrousel
