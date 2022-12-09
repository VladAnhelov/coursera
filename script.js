'use strict';

let button = document.querySelectorAll('.button');
for (let i = 0; i < button.length; i++)
  button[i].addEventListener('click', function () {
    button[i].textContent = 'Added';
    console.log(button[i], typeof button[i]);
  });
