class Obstacle{
  constructor(size, gameContainer){
    this.container = gameContainer;
    this.size = size;
    this.obstacles = [];
    // this.moveObstacle();
    this.removeObstacles();
    // this.createObstacle();
    // this.div = Obstacle.displayObstacle();
  }

  createObstacle() {
    const containerWidth = this.container.getBoundingClientRect().width;
    const containerHeight = this.container.getBoundingClientRect().height;
    const x = (containerWidth - this.size) / 20;
    const y = (containerHeight + this.size);
    const obstacleX = Math.floor(Math.random()*x)*20 + this.container.getBoundingClientRect().left;
    const div = createElement(this.size, obstacleX, y, 'yellow');
    // document.body.appendChild(div);
      
    return div;
  }

  // createObstacle() {
  //   // pozitionarea obstacolului in functie de dimensiunea container-ului
  //   const containerWidth = this.container.getBoundingClientRect().width;
  //   const containerHeight = this.container.getBoundingClientRect().height;
  //   const x = (containerWidth - this.size) / 20
  //   const y = (containerHeight - this.size) / 20
  //   const obstacleX = Math.floor(Math.random()*x)*20 + this.container.getBoundingClientRect().left;
  //   const obstacleY = Math.floor(Math.random()*y)*20 + this.container.getBoundingClientRect().top;
  //   const div = createElement(this.size, obstacleX, obstacleY, 'yellow');
  //   document.body.appendChild(div);
      
  //   return div;
  // }

  displayObstacles() {
    const displayInterval = setInterval(() => {
      const div = this.createObstacle();
      document.body.appendChild(div);
      this.obstacles.push(div);
    }, 100);
  }

  removeObstacles() {
    const border = this.container.getBoundingClientRect();
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstTop = parseInt(this.obstacles[i].style.top);
      if (obstTop === border.top - 20) {
        this.obstacles[i].remove();
        this.obstacles.shift();
      }
    }
  }
}