/*
Write a page that displays a balloon (using the balloon emoji,🎈).

When you press the up arrow, it should inflate (grow) 10 percent, and when you press
the down arrow, it should deflate (shrink) 10 percent.

You can control the size of text (emoji are text) by setting the font-size
CSS property (style.fontSize) on its parent element. Remember to include a
unit in the value—for example, pixels (10px).

The key names of the arrow keys are "ArrowUp" and "ArrowDown". Make
sure the keys change only the balloon, without scrolling the page.
When that works, add a feature where, if you blow up the balloon past a
certain size, it explodes.

In this case, exploding means that it is replaced with
an💥 emoji, and the event handler is removed (so that you can’t inflate or
deflate the explosion).
*/

const balloon = document.createElement('span');
balloon.textContent = '🎈';
balloon.style.fontSize = '10px';
balloon.style.position = 'absolute';

const handleKeyDown = (e) => {
  e.preventDefault(); // prevent automatic browser behavior of scrolling
  const currentBalloonSize = balloon.style.fontSize.split('px')[0];
  if (currentBalloonSize >= 600) {
    balloon.textContent = '💥';
  }

  switch (e.key) {
    case 'ArrowUp':
      balloon.style.fontSize = `${1.1 * currentBalloonSize}px`; // grow by 10%
      break;
    case 'ArrowDown':
      balloon.style.fontSize = `${0.9 * currentBalloonSize}px`; // shrink by 10%
      break;
  }
};

// add the event listener to grow balloon
window.addEventListener('keydown', handleKeyDown);

// add event listener to make balloon explode & remove EventListener
window.addEventListener('keydown', (e) => {
  e.preventDefault(); // prevent automatic browser behavior of scrolling
  const currentBalloonSize = balloon.style.fontSize.split('px')[0];

  // make balloon explode after certain size & remove EventListener
  if (currentBalloonSize >= 600) {
    balloon.textContent = '💥';
    window.removeEventListener('keydown', handleKeyDown);
  }
});

// append our balloon to the DOM
const root = document.querySelector('#root');
root.appendChild(balloon);
