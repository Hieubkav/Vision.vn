//  Đóng mở menu
function closeMenuOnOutsideClick(event, menu, menuButton) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.add('hidden');
        document.removeEventListener('click', (event) => closeMenuOnOutsideClick(event, menu, menuButton));
    }
}
function toggleMenu(menu, menuButton) {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        document.addEventListener('click', (event) => closeMenuOnOutsideClick(event, menu, menuButton));
    } else {
        menu.classList.add('hidden');
        document.removeEventListener('click', (event) => closeMenuOnOutsideClick(event, menu, menuButton));
    }
}

// Đống mở sidebar menu
function toggleSide(menuId) {
    var menu = document.querySelectorAll("#"+menuId)
    menu.forEach(element => {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
    
}
