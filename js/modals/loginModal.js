'use strict';
let signInButton = document.querySelector('.btn-log');
let modalOfLoginForm = document.querySelector('.login-modal');
let closeModalLoginForm = document.querySelector('.close-modal');
let emailForm = document.getElementById('emailForm');
let passwordForm = document.getElementById('passwordForm');
let submitLoginForm = document.getElementById('login-form-submit');

signInButton.addEventListener('click', () => {
  // Changed onclick to addEventListener
  modalOfLoginForm.style.display = 'flex'; // Changed querySelector to getElementById
});

closeModalLoginForm.addEventListener('click', () => {
  // Changed onclick to addEventListener
  modalOfLoginForm.style.display = 'none'; // Changed querySelector to getElementById
});

submitLoginForm.addEventListener('click', e => {
  // Changed onclick to addEventListener
  const email = emailForm.value; // Added const keyword for variable declaration
  const password = passwordForm.value; // Added const keyword for variable declaration

  if (email === 'vlad@gmail.com' && password === '123') {
    // Removed unnecessary parentheses
    alert('You have successfully logged in.');
    modalOfLoginForm.style.display = 'none';

    // location.reload();
  } else {
    alert('Wrong password or email');
  }
});
