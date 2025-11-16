const headerLinks = document.querySelectorAll('[data-js-page]')

function setBackgroundOnActiveLink() {
  const currentUrl = window.location.href
  const formattedUrl = currentUrl.split('/').at(-1).split('.').at(0)
  headerLinks.forEach((link) => {
    let formattedTextLink = link.textContent.toLowerCase()
    link.classList.remove('is-active')
    if (formattedTextLink === formattedUrl) {
      link.classList.add('is-active')
    } else if (formattedTextLink === 'home' && formattedUrl === 'index') {
      link.classList.add('is-active')
    }
  })
}

export { setBackgroundOnActiveLink } 