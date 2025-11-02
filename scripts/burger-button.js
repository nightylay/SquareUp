const burgerButtonElement = document.querySelector('[data-js-burger-button]')
const headerOverlay = document.querySelector('[data-js-header-overlay]')

function openNavigationMenu() {
  burgerButtonElement.addEventListener('click', () => {
    burgerButtonElement.classList.toggle('is-active')
    headerOverlay.classList.toggle('is-visible')
    document.documentElement.classList.toggle('is-lock')
  })
}

export default openNavigationMenu