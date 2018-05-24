// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    Resources.load(this.sprite);
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + 10;
    if (this.x > 605) {
        this.x = -100;
    }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(sprite) {
    this.sprite = sprite;
    Resources.load(this.sprite);
    this.x = 202;
    this.y = 83*5-40;
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    if (direction === 'left') {
        this.x = this.x - 101;
    } else if (direction === 'up') {
        this.y = this.y - 83;
    } else if (direction === 'right') {
        this.x = this.x + 101;
    } else {
        this.y = this.y + 83;
    } 

    if (this.x > 404) {
        this.x = 404;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    if (this.y > 375) {
        this.y = 375;
    }

    if (this.y < 0) {
        this.y = 0;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
allEnemies = [new Enemy(101,83-40), new Enemy(202,166-40), new Enemy(303,249-40)];
// Place the player object in a variable called player
player = new Player('images/char-horn-girl.png');



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
