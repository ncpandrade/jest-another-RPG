const Potion = require('../lib/Potion');

//how come (name = '')?
function Player(name = '') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

    //create getStats() and getInventory() method ONCE on the constructor itself using prototype
    //opposed to using this.getStats() would create a new method every time a new Player is created
    //now player objects can "inherit" the method
    Player.prototype.getStats = function() {
        return {
          potions: this.inventory.length,
          health: this.health,
          strength: this.strength,
          agility: this.agility
        };
      };
      
      Player.prototype.getInventory = function() {
        if (this.inventory.length) {
          return this.inventory;
        }
        return false;
      };

      Player.prototype.getHealth = function() {
        return `${this.name}'s health is now ${this.health}!`;
      };

      Player.prototype.isAlive = function() {
        if (this.health === 0) {
          return false;
        }
        return true;
      };

      Player.prototype.reduceHealth = function(health) {
        this.health -= health;
      
        if (this.health < 0) {
          this.health = 0;
        }
      };
}
  
  
  module.exports = Player;