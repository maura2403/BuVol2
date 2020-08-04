const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
    if (menu.className != 'activeMenu menu') {menu.className = 'activeMenu menu';  }
    else {menu.className = 'menu';}

});
