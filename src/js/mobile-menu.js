const mobileMenuButton = document.querySelector(".main-header__button");
const mobileMenu = document.querySelector(".main-header__list");
const button = document.querySelector(".main-header__close-button")
mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});
button.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
})