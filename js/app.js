// *** 3 asterisks surrounding comments denotes the changes Hellen made vs instructions and code given by Udacity at the beginning ***
// Enemies our player must avoid
// *** Added 3 parameters for Enemy to manipulate x, y position and speed ***
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    // *** Set variables for the parameters ***
    this.sprite = 'images/enemy-bug.png';
    Resources.load(this.sprite);
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// *** Set up ability to set individual speeds for each enemy in my array ***
// *** Set beginning position of enemies off screen and in each stone lane ***
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed;
    if (this.x > 6) {
        this.x = -1;
    }

    this.checkCollisions();

};

// *** Collision: If Enemy position and Player position meet, all positions will reset to the beginning ***
Enemy.prototype.checkCollisions = function() {
    // *** Get the absolute value of the distance between enemy and player's positions to set when they collide with each other ***
    if ((Math.abs(this.x - player.x) < .5) && (Math.abs(this.y - player.y) < 0.1)) {
        alert("Oh no, you got hit! :((((((");
        // *** Resets player position and enemies' positions ***
        player.x = 2;
        player.y = 5;
        allEnemies[0].x = 1;
        allEnemies[0].y = 1;
        allEnemies[1].x = 2;
        allEnemies[1].y = 2;
        allEnemies[2].x = 3;
        allEnemies[2].y = 3;
    }
};

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

// Draw the enemy on the screen, required method for game
// *** Added pixel positioning for x and y so that Enemy sprites will be in line with the lanes/images ***
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x*101, this.y*83-40);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// *** Set the player beginning x, y position ***
var Player = function(sprite) {
    this.sprite = sprite;
    Resources.load(this.sprite);
    this.x = 2;
    this.y = 5;
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // *** Player makes it through and wins the game! An alert pops up congratulating the player and resets the game/player's position ***
    if (this.y === 0) {
        alert("Congratulations, you made it! :)))))))))");
        this.x = 2;
        this.y = 5;
    }
};

// *** Added pixel positioning for x and y so that Player sprites will be in line with the lanes/images ***
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x*101, this.y*83-40);
};

// *** Added direction parameter to link to the keys in the EventListener ***
// *** Added a value for each key to move the player in a direction by 1 square ***
// *** Added limitations for where the player can go (only inside the canvas) ***
Player.prototype.handleInput = function(direction) {
    if (direction === 'left') {
        this.x = this.x - 1;
    } else if (direction === 'up') {
        this.y = this.y - 1;
    } else if (direction === 'right') {
        this.x = this.x + 1;
    } else {
        this.y = this.y + 1;
    } 

    if (this.x > 4) {
        this.x = 4;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    if (this.y > 5) {
        this.y = 5;
    }

    if (this.y < 0) {
        this.y = 0;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// *** Created 3 new enemies in one new object array ***
// *** Set each enemy object with their own x, y position and speed ***
allEnemies = [new Enemy(1, 1, 0.1), new Enemy(2, 2, .05), new Enemy(3, 3, .025)];
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
