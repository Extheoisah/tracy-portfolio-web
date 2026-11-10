for (const stack of document.querySelectorAll('[data-preview-stack]')) {
  const cards = stack.querySelectorAll('button[aria-pressed]');

  for (const card of cards) {
    card.addEventListener('click', () => {
      const select = card.getAttribute('aria-pressed') === 'false';

      for (const preview of cards) {
        preview.setAttribute('aria-pressed', String(select && preview === card));
      }
    });
  }
}
