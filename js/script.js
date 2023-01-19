'use strict';

let modalToOpenPicture = document.getElementById('myImgModal');
let pictureOfMyDogAndMe = document.querySelectorAll('.pic');
let modalContent = document.getElementById('modal-content');
let descriptionPicture = document.getElementById('caption');
let buttonTop = document.getElementById('topBtn');
let darkBody = document.body;

function darkMode() {
  darkBody.classList.toggle('dark-mode');
}

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

document.querySelectorAll('.menu').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('active');
  });
});

for (let i = 0; i < pictureOfMyDogAndMe.length; i++) {
  pictureOfMyDogAndMe[i].onclick = function () {
    modalToOpenPicture.style.display = 'block';
    modalContent.src = this.src;
    descriptionPicture.innerHTML = this.alt;
  };
}

modalToOpenPicture.onclick = function () {
  modalToOpenPicture.style.display = 'none';
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
