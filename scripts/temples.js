
// Hamburger menu toggle
const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  // Toggle icon between ☰ and ✖
  menuButton.textContent = nav.classList.contains('open') ? '✖' : '☰';});