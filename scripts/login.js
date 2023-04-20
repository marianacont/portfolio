/* Show hidden password */
const showHiddenPass = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon);

    iconEye.addEventListener('click', () =>{
        // Change password to text
        if(input.type === 'password'){
            // switch to text
            input.type = 'text'
            // add icon
            iconEye.classList.add('ri-eye-fill');
            iconEye.classList.remove('ri-eye-off-fill');
        } else {
            // change to password
            input.type = 'password'
            // change icon
            iconEye.classList.add('ri-eye-off-fill');
            iconEye.classList.remove('ri-eye-fill');
        }
    })
}

showHiddenPass('input-pass', 'input-eye');



// 
const form = document.querySelector('#form'),
        user = document.getElementById('email'),
        pass = document.getElementById('input-pass'),
        button = document.getElementById('login-btn');

const regMail = /[.-_\w]+@([\w-]+\.)+[\w-]+/g;
const regPassLook = /^(?=.+[A-z])(?=.+\d)(?=.+[$@!¡_*¿?&]){8,16}$/g

button.addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
        user: user.value,
        pass: pass.value
    }


    if(regMail.test(user.value)){
        console.log('válido')
    }else{
        console.log('mail no válido')
    }
    if(regPassLook.test(pass.value)){
        console.log('válida')
    }else{
        console.log('contraseña no válidoa')
    }

    if(user.value === 'user@host.com' & pass.value === '12345'){
        alert("Welcome back, User!")
    }else {
        alert("Wrong user")
    }
})

