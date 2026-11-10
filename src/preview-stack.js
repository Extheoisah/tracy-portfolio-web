const mobilePreview = window.matchMedia('(width < 48rem), (hover: none) and (pointer: coarse)');
const viewer = document.createElement('dialog');
viewer.className = 'preview-viewer';
viewer.setAttribute('aria-labelledby', 'preview-viewer-title');
viewer.innerHTML = `
  <form class="preview-viewer-bar" method="dialog">
    <h2 id="preview-viewer-title"></h2>
    <button class="outline-link" type="submit" autofocus>Close</button>
  </form>
  <img alt="">
`;
document.body.append(viewer);

const viewerTitle = viewer.querySelector('h2');
const viewerImage = viewer.querySelector('img');
let opener;

viewer.addEventListener('close', () => {
  opener.focus({ preventScroll: true });
  viewerImage.removeAttribute('src');
});

for (const stack of document.querySelectorAll('[data-preview-stack]')) {
  const cards = stack.querySelectorAll('.preview-card');

  function updateCardControls() {
    for (const card of cards) {
      if (mobilePreview.matches) {
        card.removeAttribute('aria-pressed');
        card.setAttribute('aria-haspopup', 'dialog');
      } else {
        card.setAttribute('aria-pressed', 'false');
        card.removeAttribute('aria-haspopup');
      }
    }
  }

  updateCardControls();
  mobilePreview.addEventListener('change', updateCardControls);

  for (const card of cards) {
    card.addEventListener('click', () => {
      if (mobilePreview.matches) {
        const image = card.querySelector('img');
        const title = card.getAttribute('aria-label');
        opener = card;
        viewerTitle.textContent = title;
        viewerImage.alt = title;
        viewerImage.src = image.currentSrc || image.src;
        viewer.showModal();
        return;
      }

      const select = card.getAttribute('aria-pressed') === 'false';

      for (const preview of cards) {
        preview.setAttribute('aria-pressed', String(select && preview === card));
      }
    });
  }
}
