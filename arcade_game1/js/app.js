'use strict';
var Entity = function() {
  this.sprite = null;
  this.x = 0;
  this.y = 0;
};

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // coordinates on the canvas
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt
    if (this.x >= 505) {
      this.x = 0;
    };
    this.checkCollisions();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.checkCollisions = function(){
  // calculate the bounding box objects' value
  var rect1 = {x: player.x, y: player.y, width: 50, height: 50}
  var rect2 = {x: this.x, y: this.y, width: 50, height: 50}

  if (rect1.x < rect2.x + rect2.width &&
     rect1.x + rect1.width > rect2.x &&
     rect1.y < rect2.y + rect2.height &&
     rect1.height + rect1.y > rect2.y) {
       player.reset();
       player.life -= 1;
  }
  document.getElementById('score').innerHTML = "SCORE: " + this.score;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
  this.Boy = 'images/char-boy.png';
  this.catGirl = 'images/char-cat-girl.png';
  this.hornGirl = 'images/char-horn-girl.png';
  this.pinkGirl = 'images/char-pink-girl.png';
  this.princessGirl = 'images/char-princess-girl.png';
  this.player = 'images/char-boy.png';
  // coordinates on the canvas
  this.x = 200;
  this.y = 400;
  this.score = 0;
  this.life = 5;
}

// Player.prototype.selectPlayer = function(){
//   this.player = this.player;
// }

Player.prototype.update = function() {

  if (this.x >= 450 || this.x <= 0) {
    this.x = 210;
  };
  if (this.y >= 430 ) {
    this.y = 400;
  };
  if(this.y <= -3) {
    this.score += 1;
    this.reset();
    this.life -= 1;
  }
  document.getElementById('score').innerHTML = "SCORE: " + this.score;
  if (this.life == 0){
    player.reset();
    document.getElementById('life').innerHTML = "SORRY, YOUR GAME IS OVER!";
  }else{
    document.getElementById('life').innerHTML = "PLAY LIFE: " + this.life;
  }
  // this.selectPlayer();
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

Player.prototype.handleInput = function(userInput) {
//   The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
// Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
// Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
// If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).
    switch(userInput){
    case 'left':
        this.x = this.x - 20;// change the location of the player
        break;
    case 'right':
        this.x = this.x + 20;
        break;
    case 'up':
        this.y = this.y - 20;
        break;
    case 'down':
        this.y = this.y + 20;
        break;
    };
};

Player.prototype.reset = function(){
  this.x = 200;
  this.y = 400;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();
var allEnemies = [new Enemy(0, 60, 70), new Enemy(0, 140, 30), new Enemy(0, 210, 120)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
