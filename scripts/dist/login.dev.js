"use strict";

/* Show hidden password */
var showHiddenPass = function showHiddenPass(inputPass, inputIcon) {
  var input = document.getElementById(inputPass),
      iconEye = document.getElementById(inputIcon);
  iconEye.addEventListener('click', function () {
    // Change password yo text
    if (input.type === 'password') {
      // switch to text
      input.type = 'text'; // add icon

      iconEye.classList.add('ri-eye-fill');
      iconEye.classList.remove('ri-eye-off-fill');
    } else {
      // change to password
      input.type = 'password'; // change icon

      iconEye.classList.add('ri-eye-off-fill');
      iconEye.classList.remove('ri-eye-fill');
    }
  });
};

showHiddenPass('input-pass', 'input-eye'); // 

var form = document.querySelector('#form'),
    user = document.getElementById('email'),
    pass = document.getElementById('pass'),
    button = document.getElementById('login-btn');
button.addEventListener('click', function (e) {
  e.preventDefault();
  var data = {
    user: user.value,
    pass: pass.value
  };
  console.log(data);
});