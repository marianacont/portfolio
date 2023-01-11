// Products
const shopDiv = document.getElementById('shop');
const seeCart = document.getElementById('see-cart')
const products = [
    {
        id: 'Jeans',
        price: 8200,
        gendre: 'women',
        img: 'assets/jean_2.jpg',
        lot:1
    },
    {
        id: 'Knitted top',
        price: 7100,
        gendre: 'women',
        img: 'assets/top.jpg',
        lot:1
    },
    {
        id: 'Blouse',
        price: 3500,
        gendre: 'women',
        img: 'assets/blouse.jpg',
        lot:1
    },
    {
        id: 'Yelow skirt',
        price: 4900,
        gendre: 'women',
        img: 'assets/skirt.jpg',
        lot:1
    },
        {
        id: 'White T-shirt',
        price: 2300,
        gendre: 'women',
        img: 'assets/tshirt_w.jpg',
        lot:1
    },
    {
        id: 'Jeans',
        price: 6700,
        gendre: 'women',
        img: 'assets/jean.jpg',
        lot:1
    },
    {
        id: 'Black Jacket',
        price: 9500,
        gendre: 'men',
        img: 'assets/jacket_m.jpg',
        lot:1
    },
    {
        id: 'Yellow hoodie',
        price: 6000,
        gendre: 'men',
        img: 'assets/hoodie.jpg',
        lot:1
    },
    {
        id: 'Jeans',
        price: 8500,
        gendre: 'men',
        img: 'assets/jeans_men2.jpg',
        lot:1
    },
    {
        id: 'Yellow Jumpsuit',
        price: 12500,
        gendre: 'women',
        img: 'assets/jumpsuit.jpg',
        lot:1
    },
    {
        id: 'Leggins and top',
        price: 11800,
        gendre: 'women',
        img: 'assets/leggins.jpg',
        lot:1
    },
    {
        id: 'Jeans',
        price: 7800,
        gendre: 'men',
        img: 'assets/men_jean.jpg',
        lot:1
    },
    {
        id: 'T-shirt',
        price: 3200,
        gendre: 'men',
        img: 'assets/tshirt2.jpg',
        lot:1
    },
    {
        id: 'Blue T-shirt',
        price: 2500,
        gendre: 'men',
        img: 'assets/tshirt-m.jpg',
        lot:1
    },
    {
        id: 'Flower dress',
        price: 5650,
        gendre: 'women',
        img: 'assets/dress.jpg',
        lot:1
    },
    {
        id: 'Classic sweater',
        price: 5200,
        gendre: 'men',
        img: 'assets/sweater.jpg',
        lot:1
    },
]

let cart = [];
const modalContainer = document.getElementById('modal-container');
const counter = document.getElementById('counter')


// Creación de productos
products.forEach((product) => {
    let content = document.createElement('div');
    content.className = "card"
    content.innerHTML = `
    <img class='shop-img' src='${product.img}'>
    <h3 class='shop-title'>${product.id}</h3>
    <p class='shop-price'>$${product.price}</p>
    
    `;
    shopDiv.append(content);

    // Botón para comprar
    let btn = document.createElement('button');
    btn.innerText = 'Add to cart';
    btn.className = 'shop-btn';
    content.append(btn);

// Productos repetidos
    btn.addEventListener("click", () => {
        // find repeated products
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
        if(repeat) {
            cart.map((prod) => {
                if(prod.id === product.id){
                    prod.lot++
                }
            })
        } else {
            cart.push({
                id: product.id,
                img: product.img,
                price: product.price,
                lot: product.lot
            });
        }

        
        console.log(cart)
        cartCounter()
    })
})


