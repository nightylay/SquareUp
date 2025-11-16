const headerLinks = document.querySelectorAll('[data-js-page]')

function setBackgroundOnActiveLink() {
  const currentUrl = window.location.href
  const formattedUrl = currentUrl.split('/').at(-1).split('.').at(0)
  headerLinks.forEach((link) => {
    let valueDataLink = link.dataset.jsPage
    link.classList.remove('is-active')
    if (valueDataLink === formattedUrl) {
      link.classList.add('is-active')
    }
  })
}

export { setBackgroundOnActiveLink }  