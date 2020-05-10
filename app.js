const gameContainer = createElement(400, 20, 20, "lightgrey");
document.body.appendChild(gameContainer);

const newGame = new Game(gameContainer);

// const gameContainer = document.createElement('div');
// gameContainer.setAttribute('id', 'gameContainer');

// gameContainer.style.width = '400px';
// gameContainer.style.height = '400px';
// // gameContainer.style.margin = '0 auto';
// gameContainer.style.top = '20px';
// gameContainer.style.left = '20px';
// // gameContainer.style.border = '5px solid #333';
// gameContainer.style.backgroundColor = 'lightgrey';
// gameContainer.style.position = 'relative';

// document.body.appendChild(gameContainer);


// const game = new Game();

function createElement(size, x, y, color, player) {
  const div = document.createElement('div');

  const { style } = div;
  // dimensiunea elementului
  style.width = `${size}px`;
  style.height = `${size}px`;

  // pozitionarea elementului
  style.position = 'absolute';
  style.top = `${y}px`;
  style.left = `${x}px`;

  if (player) {
    style.borderRadius = '50%';
  }

  // culoaea elementului
  style.backgroundColor = color;

  return div;
}