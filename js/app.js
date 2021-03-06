// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 500) {
        this.x = 1;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function(dt) {
   this.checkCollisions();
    if(this.y<20){
        player.startOver();
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(code) {
    switch(code){
        case "up":
        if(this.y > 0){
        this.y-= 75;
        }
        break;

        case "down":
        if(this.y < 350){ 
        this.y = this.y + 80}; 
        break;

        case "left":
        if(this.x > 0){
        this.x = this.x - 100;
        }
        break;

        case "right":
        if(this.x < 400){
        this.x += 100};
        break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var player = new Player(200, 420, 100);
Player.prototype.startOver = function() {
    this.x = 200;
    this.y = 420;
};


Player.prototype.checkCollisions = function() {
   for (var i = 0; i < allEnemies.length; i++) {
    if (allEnemies[i].x + 40 > this.x && this.x + 40 > allEnemies[i].x && allEnemies[i].y + 50 > this.y && this.y + 50 > allEnemies[i].y) {
        player.startOver();
        }
    }    
};

var enemy0= new Enemy(100, 220, 60);
var enemy1= new Enemy(100, 120, 75);
var enemy2= new Enemy(100, 50, 40);
var enemy3= new Enemy(100, 75, 130);

var allEnemies = [enemy0, enemy1, enemy2, enemy3];


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
