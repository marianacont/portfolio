"use strict";

// Products
var shopDiv = document.getElementById('shop');
var seeCart = document.getElementById('see-cart');
var products = [{
  id: 'Blue T-shirt',
  price: 2500,
  gendre: 'men',
  img: 'assets/tshirt-m.jpg',
  lot: 1
}, {
  id: 'White T-shirt',
  price: 2300,
  gendre: 'women',
  img: 'assets/tshirt_w.jpg',
  lot: 1
}, {
  id: 'dress',
  price: 5650,
  gendre: 'women',
  img: 'assets/dress.jpg',
  lot: 1
}, {
  id: 'sweater',
  price: 5200,
  gendre: 'men',
  img: 'assets/sweater.jpg',
  lot: 1
}, {
  id: 'jeans',
  price: 6700,
  gendre: 'women',
  img: 'assets/jean.jpg',
  lot: 1
}, {
  id: 'jacket',
  price: 9500,
  gendre: 'men',
  img: 'assets/jacket_m.jpg',
  lot: 1
}];
var cart = [];
var modalContainer = document.getElementById('modal-container');
var counter = document.getElementById('counter');
products.forEach(function (product) {
  var content = document.createElement('div');
  content.className = "card";
  content.innerHTML = "\n    <img class='shop-img' src='".concat(product.img, "'>\n    <h3 class='shop-title'>").concat(product.id, "</h3>\n    <p class='shop-price'>$").concat(product.price, "</p>\n    \n    ");
  shopDiv.append(content);
  var btn = document.createElement('button');
  btn.innerText = 'Shop';
  btn.className = 'shop-btn';
  content.append(btn);
  btn.addEventListener("click", function () {
    // find repeated products
    var repeat = cart.some(function (repeatProduct) {
      return repeatProduct.id === product.id;
    });

    if (repeat) {
      cart.map(function (prod) {
        if (prod.id === product.id) {
          prod.lot++;
        }
      });
    } else {
      cart.push({
        id: product.id,
        img: product.img,
        price: product.price,
        lot: product.lot
      });
    }

    console.log(cart);
    cartCounter();
  });
});