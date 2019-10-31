//**********Good luck************ */
class Vehicle {
    constructor(race, type, moves, health) 
    {
      this.race = race;
      this.type = type;
      this.moves = moves;
      this.health = health;
    }
  }
  let you = new Vehicle('Human', 'your current feelling', '-----', 100);
  let sans = new Vehicle('monster', 'skeleton', 'heal & attack', 1000);
  console.log(you.name);  
  console.log(sans.name); 

