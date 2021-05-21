const toggleBNT = document.querySelector(".navbar_toggleBNT")
const menu = document.querySelector(".navbar_menu")
const icons = document.querySelector(".navbar_icons")

toggleBNT.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});