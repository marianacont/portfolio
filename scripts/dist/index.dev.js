"use strict";

var d = document;
var navButton = d.querySelector('nav .btn');
var menuList = d.querySelector('nav .menu');
var className = "active";
var gallery = d.querySelectorAll(".gallery li");
var prev = d.querySelectorAll('button .gallery-prev');
var next = d.querySelectorAll('button .gallery-next');
var indicators = d.querySelectorAll('.indicators button');

navButton.onclick = function () {
  return menuList.classList.toggle('active');
}; // Gallery


function getElement(array) {
  var newItem;

  for (el in array) {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
      newItem = el;
    }
  }

  return newItem;
}

function setElement(array, type) {
  var el = getElement(array);
  var newItem = type == "gallery-prev" ? el.previusElementSibling || el.parentNode.lastElementChild : type == "gallery-next" ? el.previusElementSibling || el.parentNode.lastElementChild : el;
  newItem.classList.add(className);
}