const menuOpenHandler = document.getElementById("menu-icon-open");
const menuCloseHandler = document.getElementById("menu-icon-close");
const menu = document.getElementById("menu");

menuOpenHandler.addEventListener("click", () => {
    menuOpenHandler.style.display = "none";
    // menuOpen.style.animation = 'backOutRight .6s cubic-bezier(0.5, 0, 0.5, 1) '
    menuCloseHandler.style.display = "block";
    menu.style.display = "block";
    menu.style.animation = "backInDown 1s";
});
menuCloseHandler.addEventListener("click", () => {
    menu.style.animation = "backOutDown 1s";
    setTimeout(() => {
    menu.style.display = "none";
    }, 580);
    menuCloseHandler.style.display = "none";
    menuOpenHandler.style.display = "block";
    // menuOpen.style.animation = 'backInLeft .6s cubic-bezier(0.5, 0, 0.5, 1) '
});
