// Products
const shopDiv = document.getElementById('shop');
const seeCart = document.getElementById('see-cart')
const products = [
    {
        id: 'Blue T-shirt',
        price: 2500,
        gendre: 'men',
        img: 'assets/tshirt-m.jpg',
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
        id: 'dress',
        price: 5650,
        gendre: 'women',
        img: 'assets/dress.jpg',
        lot:1
    },
    {
        id: 'sweater',
        price: 5200,
        gendre: 'men',
        img: 'assets/sweater.jpg',
        lot:1
    },
    {
        id: 'jeans',
        price: 6700,
        gendre: 'women',
        img: 'assets/jean.jpg',
        lot:1
    },
    {
        id: 'jacket',
        price: 9500,
        gendre: 'men',
        img: 'assets/jacket_m.jpg',
        lot:1
    },
]

let cart = [];
const modalContainer = document.getElementById('modal-container');
const counter = document.getElementById('counter')

products.forEach((product) => {
    let content = document.createElement('div');
    content.className = "card"
    content.innerHTML = `
    <img class='shop-img' src='${product.img}'>
    <h3 class='shop-title'>${product.id}</h3>
    <p class='shop-price'>$${product.price}</p>
    
    `;
    shopDiv.append(content);

    let btn = document.createElement('button');
    btn.innerText = 'Shop';
    btn.className = 'shop-btn';
    content.append(btn);


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


