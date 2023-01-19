'use strict';

let button = document.querySelectorAll('.button');
var modal = document.getElementById('myModal');
var img = document.querySelectorAll('.pic');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
var span = document.getElementsByClassName('close')[0];
let buttonTop = document.getElementById('topBtn');
let darkBody = document.body;
let login = document.querySelector('.btn-log');
let modalLogin = document.querySelector('.login-modal');
let closeModalLogin = document.querySelector('.close-modal');

login.onclick = () => {
  modalLogin.style.display = 'flex';
};

closeModalLogin.onclick = () => {
  modalLogin.style.display = 'none';
};

function darkMode() {
  darkBody.classList.toggle('dark-mode');
}

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

// Get the modal

// Get the image and insert it inside the modal - use its "alt" text as a caption

for (let i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

modal.onclick = function () {
  modal.style.display = 'none';
};

window.onscroll = function () {
  scrollTop();
};

function scrollTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonTop.style.display = 'block';
  } else {
    buttonTop.style.display = 'none';
  }
}

function topButton() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
