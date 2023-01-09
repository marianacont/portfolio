"use strict";

var shopCart = function shopCart() {
  modalContainer.innerHTML = '';
  modalContainer.style.display = 'flex';
  var modalHeader = document.createElement('div');
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = "<h2 class=\"modal-title\">Your cart</h2>";
  modalContainer.append(modalHeader);
  var modalBtn = document.createElement('h2');
  modalBtn.innerText = 'X';
  modalBtn.className = 'modal-btn';
  modalBtn.addEventListener('click', function () {
    modalContainer.style.display = "none";
  });
  modalHeader.append(modalBtn);
  cart.forEach(function (product) {
    var cartContent = document.createElement('div');
    cartContent.className = 'modal-content';
    cartContent.innerHTML = "\n        <img src=".concat(product.img, ">\n        <h3>").concat(product.id, "</h3>\n        <p>$").concat(product.price, "</p>\n        <p>").concat(product.lot, "</p>\n        <p>Total: ").concat(product.lot * product.price, "</p>");
    modalContainer.append(cartContent); // Delete product button

    var deleteElement = document.createElement('span');
    deleteElement.innerText = '❌';
    deleteElement.className = 'delete-element';
    cartContent.append(deleteElement);
    deleteElement.addEventListener('click', deleteProduct);
  });
  var total = cart.reduce(function (acc, el) {
    return acc + el.price * el.lot;
  }, 0);
  var divTotal = document.createElement('div');
  divTotal.className = 'total-content';
  divTotal.innerHTML = "Total: $".concat(total);
  modalContainer.append(divTotal);
};

seeCart.addEventListener('click', shopCart); // Delete product function

var deleteProduct = function deleteProduct() {
  var foundId = cart.find(function (element) {
    return element.id;
  });
  cart = cart.filter(function (cartId) {
    return cartId !== foundId;
  });
  cartCounter();
  shopCart();
}; // Counter function


var cartCounter = function cartCounter() {
  counter.style.display = "block";
  counter.innerText = cart.length;
};