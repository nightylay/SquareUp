const headerLinks = document.querySelectorAll('[data-js-page]')

function setBackgroundOnActiveLink() {
  const path = window.location.pathname;
  let currentPage = 'index';

  if (!path.endsWith('/') && path !== '/') {
    const page = path.split('/').pop();
    currentPage = page.replace('.html', '');
  }

  headerLinks.forEach((link) => {
    link.classList.remove('is-active');
    if (link.dataset.jsPage === currentPage) {
      link.classList.add('is-active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setBackgroundOnActiveLink);
export { setBackgroundOnActiveLink }