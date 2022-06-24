// declaring game canvas
const game = document.getElementById('canvas')
// defining game context
const ctx = game.getContext('2d')

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

game.width = 1425
game.height = 712.5
console.log('this is the canvas width', game.width)
console.log('this is the canvas height', game.height)

// creating image elements for the sprites - commented out until ready for application
// const imgLucyfur = new Image()
// imgLucyfur.src = 'images/Lucyfur-gameplay.png'


// const imgTreat = new Image()
// imgTreat.src = 'images/treat-gameplay.png'


// const imgHand = new Image()
// imgHand.src = 'images/hand-gameplay.png'

// function drawSprites(img, sX, sY, sW, sH, dX, dY, dW, dH){
//     ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
// }

// OOP programming
// I need an object for the cat/Player, the hand, and the treats
// the treats and the hands will need a class, collectable items
class Player {
    constructor(x, y, color, width, height) {
        this.x = x,
        this.y = y,
        this.color = color,
        this.width = width,
        this.height = height,
        this.alive = true,
        // smooth animation additions
        this.speed = 15,
        this.direction = {
            up: false,
            down: false,
            left: false,
            right: false
        }
    }
    // smooth animation key set - setDirection
    setDirection = function (key) {
        console.log('this is the key that was pressed', key)
        if (key.toLowerCase() == 'w') { this.direction.up = true }
        if (key.toLowerCase() == 'a') { this.direction.left = true }
        if (key.toLowerCase() == 's') { this.direction.down = true }
        if (key.toLowerCase() == 'd') { this.direction.right = true }
    }
    // stop movement
    unSetDirection = function (key) {
        console.log('this is the key that was pressed', key)
        if (key.toLowerCase() == 'w') { this.direction.up = false }
        if (key.toLowerCase() == 'a') { this.direction.left = false }
        if (key.toLowerCase() == 's') { this.direction.down = false }
        if (key.toLowerCase() == 'd') { this.direction.right = false }
    }
    movePlayer = function () {
        // move player looks at the direction, and sends the guy flying in whatever direction is true
        if (this.direction.up) {
            this.y -= this.speed
            // bc we're tracking up movement, let's stop our player
            // from exiting the top of the canvas
            if (this.y <= 0) {
                this.y = 0
            }
        }
        if (this.direction.left) {
            this.x -= this.speed
            // bc we're tracking the left moves, stop him at left edge
            if (this.x <= 0) {
                this.x = 0
            }
        }
        if (this.direction.down) {
            this.y += this.speed

            // this tracks down movement, so we need to consider the height
            if (this.y + this.height >= game.height) {
                this.y = game.height - this.height
            }
        }
        if (this.direction.right) {
            this.x += this.speed

            // this tracks right movement, so we need to consider the width
            if (this.x + this.width >= game.width) {
                this.x = game.width - this.width
            }
        }
    }
    // we'll keep our render method nice and simple, and keep it at the bottom of our class.
    render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
class GamePieces {
    constructor(x, y, color, width, height) {
    this.x = x,
    this.y = y,
    this.color = color,
    this.width = width,
    this.height = height,

    this.alive = true,
    
    this.speed = Math.random() * 16 - 2,
    this.direction = {
        up: false,
        down: false,
        left: true,
        right: false
    }
    
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
    moveGamePieces = function () {
        if (this.direction.left) {
        this.x -= this.speed
    }
        if (this.x <= 0) {
        this.x = 0
        }
}
}
// creating each object
let cat = new Player(40, 40, 'black', 32, 32)
let hand = new GamePieces(1425, Math.floor(Math.random() * game.height), '#BB9457', 16, 16)
let treats = new GamePieces(1425, Math.floor(Math.random() * game.height), '#CBFF4D', 16, 16)

// utilizing movement of each piece and rendering them to the canvas

const gameLoop = () => {
    // clearing game for start
    ctx.clearRect(0, 0, game.width, game.height)
    // the cat must detect being hit by both hand and treats
    // the cat being alive past the time limit means there is a win - end Interval = 'you won!'
    // the cat being hit by 15 treats is a win - need a counter for the treats
    // the cat being hit by 2 hands will end the game - need a counter for the hands

    // player - cat

    // only if cat is alive can treats and hands render
    if (hand.alive) {
        hand.render()
        detectHit(hand)
    } 
    if (treats.alive) {
        treats.render()
        detectHit(treats)
    } else {
        treats.render()
    }
    cat.render()
    cat.movePlayer()
    hand.moveGamePieces()
    treats.moveGamePieces()
}

let gameInterval = setInterval(gameLoop, 60)

const stopGameLoop = () => {clearInterval(gameInterval)}

// having the start button load the game
const startButton = document.getElementById('start')
startButton.addEventListener('click', function () {
    // this starts the game when the content is loaded
    gameInterval
    console.log('game start')
})

// two new event handlers are needed, one for keyup and one for keydown
document.addEventListener('keydown', (e) => {
    // when the key is down, set the direction according to our
    // player.setDirection method
    cat.setDirection(e.key)
})

document.addEventListener('keyup', (e) => {
    // this one will look a lil different than keydown
    // we need to make sure it only applies to the keys we listed in unSetDirection
    if (['w', 'a', 's', 'd'].includes(e.key)) {
        cat.unSetDirection(e.key)
    }
})
// to detect a collision between different objects
// we can give our function a parameter, and pass an argument every time it's called
const detectHit = (thing) => {
    // we'll use one big if statement that clearly defines any moment of collision.
    // that means utilizing, x, y, width and height of our objects
    if (cat.x < thing.x + thing.width
        && cat.x + cat.width > thing.x
        && cat.y < thing.y + thing.height
        && cat.y + cat.height > thing.y) {
            thing.alive = false
        }
}