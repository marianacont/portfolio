"use strict";

// let marquesina = "Projects";
// let h1 = document.createElement("h1");
// h1.innerText = "";
// document.querySelector('header').appendChild(h1);
// let counter = 0;
// let interval = setInterval(()=>{
//     if(counter<marquesina.length){
//         h1.innerText+=marquesina[counter];
//         counter++;
//     } else {
//         h1.innerText = "";
//         counter = 0;
//     }
// }, 300)
var marquesina = "Projects";
var h1 = document.getElementById("proj-title");
h1.innerText = "";
var counter = 0;
var interval = setInterval(function () {
  if (counter < marquesina.length) {
    h1.innerText += marquesina[counter];
    counter++;
  } else {
    h1.innerText = "";
    counter = 0;
  }
}, 300);