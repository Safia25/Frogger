// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

var enemyRow = [50, 150, 250];
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += 250 * this.speed * dt;

    if (this.x > 500) {
        this.x = 0;
        var row = enemyRow[Math.floor(Math.random() * enemyRow.length)];
        this.y = row;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y){
    this.sprite = 'images/char-boy.png';


    this.x=x;
    this.y=y;
};

Player.prototype.update = function(dt){
    this.checkCollisions();
    if(this.y<15){
        player.startOver();
    }
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(code){
    var openx=this.x;
    var openy=this.y;

            this.x = this.x - 101;
            }

            this.y = this.y - 83;
            ctx.clearRect((this.sprite.x),(this.sprite.y), openx, openy);
            }

            this.y = this.y + 83;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies = [new Enemy];
var player = new player(200,380);

Player.prototype.startOver = function() {
    this.x = 200;
    this.y = 380;
};

Player.prototype.checkCollisions = function () {
    allEnemies.forEach(function(enemy) {
        if(enemy.x < player.x + 50 &&
            enemy.x + 50 > player.x &&
            enemy.y < player.y + 50 &&
            enemy.y + 50 > player.y) {
                player.startOver();
                }
            });
};


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
