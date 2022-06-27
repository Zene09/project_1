// importing player.js
import { Player } from './player.js';
import { InputHandler } from './input.js'; 
// setting up window event listener as the main brain of the game
window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1')
    // defining game context
    const ctx = canvas.getContext('2d')
    
    // sizing the canvas
    canvas.width = 1500
    canvas.height = 750
    
    class Game {
        constructor(width, height){
            this.width = width,
            this.height = height,
            // set up player for each frame
            this.player = new Player(this),
            this.input = new InputHandler()
        }
        // update will run animation functions and calculations
        update () {
            this.player.update(this.input.keys)

        }
        // draw any in game images, keep score, visual aspects
        draw (context) {
            this.player.draw(context)
        }
    }
    const game = new Game(canvas.width, canvas.height)
    console.log(game)

    // smoothing out animation
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.update(),
        game.draw(ctx),
        requestAnimationFrame(animate)

    }
    animate()
})
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

// class GamePieces {
//     constructor(x, y, color, width, height) {
//     this.x = x,
//     this.y = y,
//     this.color = color,
//     this.width = width,
//     this.height = height,

//     this.alive = true,
    
//     this.speed = Math.random() * 15 - 2,
//     this.direction = {
//         up: false,
//         down: false,
//         left: true,
//         right: false
//     }
    
//     this.render = function () {
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
// }
//     moveGamePieces = function () {
//         if (this.direction.left) {
//         this.x -= this.speed
//     }
//         if (this.x <= 0) {
//         this.alive = false
//         }
// }
// }
// // creating each object
// const cat = new Player(40, 40, 'black', 32, 32)
// let hand = new GamePieces(1425, Math.floor(Math.random() * game.height), '#BB9457', 16, 16)
// let handTwo = new GamePieces(1425, Math.floor(Math.random() * game.heights), '#BB9457', 32, 32)
// let treats = new GamePieces(1425, Math.floor(Math.random() * game.height), '#CBFF4D', 16, 16)

// // utilizing movement of each piece and rendering them to the canvas

// const gameLoop = () => {
//     // clearing game for start
//     ctx.clearRect(0, 0, game.width, game.height)
    
//     if (hand.alive) {
//         hand.render()
//         detectHit(hand)
//     } else if (handTwo.alive) {
//             handTwo.render()
//             detectHit(handTwo)
//         } else {
//             stopGameLoop
//         }
//     if (treats.alive) {
//         treats.render()
//         detectHit(treats)
//     }
//     cat.render()
//     cat.movePlayer()
//     hand.moveGamePieces()
//     handTwo.moveGamePieces()
//     treats.moveGamePieces()
// }

// let gameInterval = setInterval(gameLoop, 60)

// const stopGameLoop = () => {clearInterval(gameInterval)}

// // having the start button load the game
// const startButton = document.querySelector('#start')
// startButton.addEventListener('click', function () {
//     // this starts the game when the content is loaded
//     gameInterval
//     console.log(gameLoop)
// })

// // two new event handlers are needed, one for keyup and one for keydown
// document.addEventListener('keydown', (e) => {
//     // when the key is down, set the direction according to our
//     // player.setDirection method
//     cat.setDirection(e.key)
// })

// document.addEventListener('keyup', (e) => {
//     // this one will look a lil different than keydown
//     // we need to make sure it only applies to the keys we listed in unSetDirection
//     if (['w', 'a', 's', 'd'].includes(e.key)) {
//         cat.unSetDirection(e.key)
//     }
// })


// const detectHit = () => {
//     if (cat.x < hand.x + hand.width
//         && cat.x + cat.width > hand.x
//         && cat.y < hand.y + hand.height
//         && cat.y + cat.height > hand.y) {
//             hand.alive = false
//         }
//     }

