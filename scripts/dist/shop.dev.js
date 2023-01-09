"use strict";

// Products
var shopDiv = document.getElementById('shop');
var seeCart = document.getElementById('see-cart');
var products = [{
  product: 'T-shirt',
  price: 2500,
  gendre: 'men',
  img: 'assets/shop/tshirt-m.jpg'
}, {
  product: 'T-shirt',
  price: 2300,
  gendre: 'women',
  img: 'assets/shop/tshirt_w.jpg'
}, {
  product: 'dress',
  price: 5650,
  gendre: 'women',
  img: 'assets/shop/dress.jpg'
}, {
  product: 'sweater',
  price: 5200,
  gendre: 'men',
  img: 'assets/shop/sweater.jpg'
}, {
  product: 'jeans',
  price: 6700,
  gendre: 'women',
  img: 'assets/shop/jean.jpg'
}, {
  product: 'jacket',
  price: 9500,
  gendre: 'men',
  img: 'assets/shop/jacket_m.jpg'
}];
var cart = [];
var modalContainer = document.getElementById('modal-container');
products.forEach(function (product) {
  var content = document.createElement('div');
  content.className = "card";
  content.innerHTML = "\n    <img class='shop-img' src='".concat(product.img, "'>\n    <h3 class='shop-title'>").concat(product.product, "</h3>\n    <p class='shop-price'>$").concat(product.price, "</p>\n    ");
  shopDiv.append(content);
  var btn = document.createElement('button');
  btn.innerText = 'Shop';
  btn.className = 'shop-btn';
  content.append(btn);
  btn.addEventListener("click", function () {
    cart.push({
      id: product.product,
      img: product.img,
      price: product.price
    });
    console.log(cart);
  });
}); // Cart shop