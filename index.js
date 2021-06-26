const menuBtn = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menu-links');
const loginWrapper = document.querySelector('.login-wrapper');
const closeMenuBtn = document.querySelector('.close-menu-btn button');


menuBtn.addEventListener('click', () => showMenu());
closeMenuBtn.addEventListener('click', () => closeMenu());

function showMenu(){
  console.log('cliked');
  menuLinks.style.display = 'flex';
  loginWrapper.style.display = 'none';
}

function closeMenu(){
  console.log('cliked');
  menuLinks.style.display = 'none';
  loginWrapper.style.display = 'flex';
}