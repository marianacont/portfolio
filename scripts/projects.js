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


let marquesina = "Projects";
let h1 = document.getElementById("proj-title");
h1.innerText = "";
let counter = 0;
let interval = setInterval(()=>{
    if(counter<marquesina.length){
        h1.innerText+=marquesina[counter];
        counter++;
    } else {
        h1.innerText = "";
        counter = 0;
    }
}, 300)