const hamburgerBtn = document.querySelector('.menu-burger-menu');
const navMenuMobile = document.querySelector('.mobile-menu-nav ');
const xBtn = document.querySelector('.close-menu');
const navLink = document.querySelectorAll('.mobile-link');

hamburgerBtn.addEventListener('click', () => {
  navMenuMobile.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
  xBtn.classList.toggle('active');
});

xBtn.addEventListener('click', () => {
  navMenuMobile.classList.remove('active');
  hamburgerBtn.classList.remove('active');	
  xBtn.classList.remove('active');
});

navLink.forEach((element) => element.addEventListener('click', () => {
  navMenuMobile.classList.remove('active');
  hamburgerBtn.classList.remove('active');	
  xBtn.classList.remove('active');
}));