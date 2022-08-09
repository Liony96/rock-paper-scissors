

function ready() {
  let overlays = Array.from(document.getElementsByClassName('overlay-text'));
  let buttons = Array.from(document.getElementsByClassName('selection-container'));

  overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('visible');
      //game.StartGame();
    });
  });

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      //game.displaySelection(btn)
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
} else {
  ready();
}