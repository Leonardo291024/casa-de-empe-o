function toggleMenu(){
    let menu = document.getElementById('menu-mobile');
    let menuIcon = document.querySelector('.logo__menu');
    let closeIcon = document.querySelector('.close-icon');

    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    menuIcon.style.display = 'none'
    closeIcon.style.display = 'block'
}

function closeMenu() {
    var menu = document.querySelector('.mobile-menu');
    var menuIcon = document.querySelector('.menu-icon');
    var closeIcon = document.querySelector('.close-icon');
  
    menu.style.display = 'none';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }