'use strict';

let button = document.querySelectorAll('.button');
// click add button to make a order

for (let i = 0; i < button.length; i++)
  button[i].addEventListener('click', function () {
    button[i].textContent = 'Added';
    console.log(button[i], typeof button[i]);
  });

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

document.querySelectorAll('.menu').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('active');
  });
});
