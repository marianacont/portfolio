const d = document;
const navButton = d.querySelector('nav .btn');
const menuList = d.querySelector('nav .menu');


navButton.onclick = () => menuList.classList.toggle('active');