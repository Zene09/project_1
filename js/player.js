// OOP programming
// I need an object for the cat/Player, the hand, and the treats
// the treats and the hands will need a class, collectable items

// Player class specific to image render and player properties
export class Player {
    constructor(game) {
        this.game = game,
        this.width = 100,
        this.height = 100,
        this.x = 0,
        this.y = this.game.height - this.height - 20,
        this.image = document.getElementById('player'),
        // smooth animation additions
        this.speed = 20
    }
    // player movement
    update(input) {
        // vertical
        if (input.includes('w')) this.y--;
        else if (input.includes('s')) this.y++;
        // horizontal
        if (input.includes('d')) this.x++;
        else if (input.includes('a')) this.x--;
        else this.speed = 0;
        // edge blocking
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        if (this.y < 0) this.y = 0;
        if (this.y > this.game.height - this.height) this.y = this.game.height - this.height;
    }
    // render player
    draw(context) {
        context.fillStyle = 'red',
        context.fillRect(this.x, this.y, this.width, this.height),
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        }
    }

// CANVAS CRAWLER MOVEMENT NOTES //
// smooth animation key set - setDirection
//     setDirection = function (key) {
//         console.log('this is the key that was pressed', key)
//         if (key.toLowerCase() == 'w') { this.direction.up = true }
//         if (key.toLowerCase() == 'a') { this.direction.left = true }
//         if (key.toLowerCase() == 's') { this.direction.down = true }
//         if (key.toLowerCase() == 'd') { this.direction.right = true }
//     }
//     // stop movement
//     unSetDirection = function (key) {
//         console.log('this is the key that was pressed', key)
//         if (key.toLowerCase() == 'w') { this.direction.up = false }
//         if (key.toLowerCase() == 'a') { this.direction.left = false }
//         if (key.toLowerCase() == 's') { this.direction.down = false }
//         if (key.toLowerCase() == 'd') { this.direction.right = false }
//     }
//     movePlayer = function () {
//         // move player looks at the direction, and sends the guy flying in whatever direction is true
//         if (this.direction.up) {
//             this.y -= this.speed
//             // bc we're tracking up movement, let's stop our player
//             // from exiting the top of the canvas
//             if (this.y <= 0) {
//                 this.y = 0
//             }
//         }
//         if (this.direction.left) {
//             this.x -= this.speed
//             // bc we're tracking the left moves, stop him at left edge
//             if (this.x <= 0) {
//                 this.x = 0
//             }
//         }
//         if (this.direction.down) {
//             this.y += this.speed

//             // this tracks down movement, so we need to consider the height
//             if (this.y + this.height >= game.height) {
//                 this.y = game.height - this.height
//             }
//         }
//         if (this.direction.right) {
//             this.x += this.speed

//             // this tracks right movement, so we need to consider the width
//             if (this.x + this.width >= game.width) {
//                 this.x = game.width - this.width
//             }
//         }
//     }