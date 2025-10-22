const burger = document.getElementById('burger');
const menu = document.getElementById('parentlink');

burger.addEventListener('click', () => {
  console.log("Burger diklik!");
  menu.classList.toggle('active');
});
