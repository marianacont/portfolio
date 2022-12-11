/* Show hidden password */
const showHiddenPass = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon);

    iconEye.addEventListener('click', () =>{
        // Change password yo text
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

showHiddenPass('input-pass', 'input-eye')