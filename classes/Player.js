 /*
 Player ( un simplu div ), 
 iar daca apasam arrow down, sa il miscam in jos
 */
class Player {
  constructor() {
    this.div = Player.display();
    this.life = 100;
    this.displayLife();
    // this.move();
    // this.playerOutsideOfContainer();
  }

  // afisarea div-ului
  static display() {
    const div = createElement(20, 40, 40, '#37f', true);
    document.body.appendChild(div);
      
    return div;
  }
  
  // afisam viata player-ului
  displayLife() {
    const divLife = document.createElement('div');
    divLife.setAttribute('id', 'life');
    divLife.innerHTML = `<span>${this.life}</span>
                    <i class="far fa-heart"></i>`;
    const { style } = divLife;
    style.color = "#37f";
    style.position = "relative";
    style.top = "-13px";
    style.display = "flex";
    style.justifyContent = "center";
    style.alignItems = "center";

    this.divLife = divLife;

    // adaugarea vietii player-ului deasupra lui
    this.div.appendChild(divLife);
  }

  changeLife() {
    // scadem 1 unitate din viata
    this.divLife.remove();
    this.life -= 1;
    this.displayLife();
    // schimbam culoarea vieti cu rosu
    this.divLife.style.color = "red";
    // dupa 1 minut punem culoarea initiala inapoi
    const changeLife = setInterval(() => {
      this.divLife.style.color = "#37f";
    }, 1000)
      
  }
}