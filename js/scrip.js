const elHamburgerBtn = document.querySelector(".site-header__menu")

const elHeader = document.querySelector(".site-header")

elHamburgerBtn.addEventListener("click", () => {
  elHeader.classList.toggle("site-header--open")
})