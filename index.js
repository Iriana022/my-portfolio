const menu_button = document.querySelector(".menu-burger")
const sidebar = document.querySelector(".side")
menu_button.addEventListener("click", () => {
    sidebar.classList.toggle("in")
    menu_button.classList.toggle("in")
})