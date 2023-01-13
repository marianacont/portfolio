// Crear modal
const shopCart = () => {

    modalContainer.innerHTML = '';
    modalContainer.style.display = 'flex';
    const modalHeader = document.createElement('div');
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `<h2 class="modal-title">My order</h2>`;
    modalContainer.append(modalHeader);

    const modalBtn = document.createElement('h2');
    modalBtn.innerText = 'X';
    modalBtn.className = 'modal-btn';

    modalBtn.addEventListener('click', () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalBtn);

    
// Carga productos al carrito/modal
    cart.forEach((product) => {
        let cartContent = document.createElement('div');
        cartContent.className = 'modal-content';
        cartContent.innerHTML = `
        <img src=${product.img}>
        <h3>${product.id}</h3>
        <p>$${product.price}</p>
        <span class="rest"> - </span>
        <p>${product.lot}</p>
        <span class="sum"> + </span>
        <p>Total: ${product.lot * product.price}</p>`

        modalContainer.append(cartContent);

// Sumar y restar productos desde el modal
    let rest = cartContent.querySelector('.rest')
    rest.addEventListener("click", () =>{
        product.lot--;
        saveLocal()
        shopCart()        
    })
    let sum = cartContent.querySelector('.sum')
    sum.addEventListener("click", () =>{
        product.lot++;
        saveLocal()
        shopCart()        
    })

// Delete product button
        let deleteElement = document.createElement('span');
        deleteElement.innerText = '❌';
        deleteElement.className = 'delete-element';
        cartContent.append(deleteElement);

        deleteElement.addEventListener('click', deleteProduct)
        })
        
    const total = cart.reduce((acc, el) => acc + el.price * el.lot, 0);
    const divTotal = document.createElement('div');
        divTotal.className = 'total-content';
        divTotal.innerHTML = `Total: $${total}`;
        modalContainer.append(divTotal);
    }

    seeCart.addEventListener('click', (shopCart))


// Delete product function
    const deleteProduct = () => {
        const foundId = cart.find((element) => element.id);
        cart = cart.filter((cartId) => {
            return cartId !== foundId;
        })
        cartCounter()
        saveLocal()
        shopCart()
    }

// Counter function
const cartCounter = () =>{
    counter.style.display= "block";
    const cartLength = cart.length;
    localStorage.setItem('cartLength', JSON.stringify(cartLength));
    counter.innerText = JSON.parse(localStorage.getItem('cartLength'));
}
cartCounter()