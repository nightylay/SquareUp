function toggleAccordion() {
  const accordionContainer = document.querySelector('[data-js-accordion-container]');
  const detailsElements = accordionContainer.querySelectorAll('details');

  detailsElements.forEach(detail => {
    detail.addEventListener('click', (e) => {
      if (e.target.closest('summary')) {
        const isOpening = !detail.open;

        detailsElements.forEach(d => {
          d.open = false;
        });


        if (isOpening) {
          detail.open = true;
        }

        e.preventDefault();
      }
    });
  });
}

export { toggleAccordion }
