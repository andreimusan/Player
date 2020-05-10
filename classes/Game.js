class Game {
  constructor(gameContainer) {
    this.container = gameContainer;
    this.startGame();
    // this.player1 = new Player();
    // this.obstacle1 = new Obstacle();
    // this.obstacle2 = new Obstacle();
    // this.obstacle3 = new Obstacle();
    // this.obstacle4 = new Obstacle();
    // this.obstacle5 = new Obstacle();
  }

  startGame() {
    this.playerDiv = new Player();
    this.player = this.playerDiv.div;
    this.movePlayer();
    this.obstacle = new Obstacle(20, this.container);
    this.moveObstacle();
  }

  // logica de miscare pentru player
  movePlayer() {
    document.addEventListener('keydown', (event) => {
      
      const oldTop = parseInt(this.player.style.top);
      const oldLeft = parseInt(this.player.style.left);
      const border = this.container.getBoundingClientRect();
      const obstacle = this.playerHitObstacle();

      // logica de miscare
      if (event.keyCode === 40 && border.bottom !== oldTop + 20 && obstacle !== "down") { // key down + blocam iesirea din gameContainer in partea de jos si atingerea obiectelor de jos
          this.player.style.top = `${oldTop + 20}px`;
      } else if (event.keyCode === 38 && border.top !== oldTop && obstacle !== "up") { // key up + blocam iesirea din gameContainer in partea de sus si atingerea obiectelor de sus
          this.player.style.top = `${oldTop - 20}px`;
      } else if (event.keyCode === 37 && border.left !== oldLeft && obstacle !== "left") { // key left + blocam iesirea din gameContainer in partea stanga si atingerea obiectelor din stanga
          this.player.style.left = `${oldLeft - 20}px`;
      } else if (event.keyCode === 39 && border.right !== oldLeft + 20 && obstacle !== "right") { // key righ + blocam iesirea din gameContainer in partea stanga si atingerea obiectelor din dreapta
          this.player.style.left = `${oldLeft + 20}px`;
      }
    })
  }

  moveObstacle() {
    this.obstacle.displayObstacles();

    const moveInterval = setInterval(() => {
      for (let i = 0; i < this.obstacle.obstacles.length; i++) {
        const obstTop = parseInt(this.obstacle.obstacles[i].style.top);
        this.obstacle.obstacles[i].style.top = `${obstTop - 20}px`;
        this.obstacle.removeObstacles()
        
        this.loseLife();
        if (this.playerDiv.life === 0) {
          clearInterval(moveInterval);
          this.gameOver();
        }
      }
    }, 100);
  }

  playerHitObstacle() {
    const playerTop = parseInt(this.player.style.top);
    const playerLeft = parseInt(this.player.style.left);

    const obstacles = this.obstacle.obstacles;

    for (let i = 0; i < obstacles.length; i++){
      const obstTop = parseInt(obstacles[i].style.top);
      const obstLeft = parseInt(obstacles[i].style.left);

      if (playerTop + 20 === obstTop && playerLeft === obstLeft) {
        return "down";
      } else if (playerTop - 20 === obstTop && playerLeft === obstLeft) {
        return "up";
      } else if (playerTop === obstTop && playerLeft + 20 === obstLeft) {
        return "right";
      } else if (playerTop === obstTop && playerLeft - 20 === obstLeft) {
        return "left";
      }
    }
  }

  loseLife() {
    const playerTop = parseInt(this.player.style.top);
    const playerLeft = parseInt(this.player.style.left);

    const obstacles = this.obstacle.obstacles;

    for (let i = 0; i < obstacles.length; i++){
      const obstTop = parseInt(obstacles[i].style.top);
      const obstLeft = parseInt(obstacles[i].style.left);

      if (playerTop === obstTop && playerLeft === obstLeft) {
        this.player.style.top = `${playerTop - 20}px`;
        this.playerDiv.changeLife();
      }
    }
  }

  gameOver() {
    // const div = document.createElement('div');
    // div.classList.add('game-over');
    // div.innerHTML = `<span>GAME OVER</span>`;
    // const { style } = div;
    // style.display = "flex";
    // style.justifyContent = "center";
    // style.alignItems = "center";

    // this.container.appendChild(div);

    alert('GAME OVER')
  }
}