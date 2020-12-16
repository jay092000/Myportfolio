const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach((item) => item.classList.add('open'));
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach((item) => item.classList.remove('open'));

    showMenu = false;
  }
}
window.addEventListener('loaded', () => {
  LL.init({
    lineSize:         0.05,
    opacityDecrement: 0.75,
    speedExpFactor:   0.9,
    lineExpFactor:    0.6,
    sparklesCount:    15,
    maxOpacity:       0.99,  // should be a number between [0 ... 1]
    // texture1:         "http://path_to_texture",      // texture displayed on mouse hover
    // texture2:         "http://path_to_texture",      // texture displayed on mouse click
    // texture3:         "http://path_to_texture",      // texture displayed on sparkles
});});
