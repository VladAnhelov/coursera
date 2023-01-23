'use strict';
let signInButton = document.querySelector('.btn-log');

let modalOfLoginForm = document.querySelector('.login-modal');
let loginForm = document.querySelector('login-form');
let closeModalLoginForm = document.querySelector('.close-modal');
let emailForm = document.getElementById('emailForm');
let passwordForm = document.getElementById('passwordForm');
let submitLoginForm = document.getElementById('login-form-submit');

signInButton.onclick = () => {
  modalOfLoginForm.style.display = 'flex';
};

closeModalLoginForm.onclick = () => {
  modalOfLoginForm.style.display = 'none';
};

submitLoginForm.addEventListener('click', e => {
  const email = emailForm.value;
  const password = passwordForm.value;
  if (email === 'vlad@gmail.com' && password === '123') {
    alert('You have successfully logged in.');
    modalOfLoginForm.style.display = 'none';
    //  location.reload();
  } else {
    alert('Wrong password or email');
  }
});
