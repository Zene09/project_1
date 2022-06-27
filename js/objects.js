// main class/parent
class Objects {
    constructor(game) {
        this.frameX = 0,
        this.frameY = 0,
        this.fps = 20,
        this.frameInterval = 1000/this.fps,
        this.frameTimer = 0,
        this.markedForDeletion = false
    }
    // movement for objects
    update (deltaTime) {
        // stretch- animation code //
        this.x -= this.speed
        // this.y += this.speedY
        // if (this.frameTimer > this.frameInterval){
        //     this.frameTimer = 0;
        //     if (this.frameX < this.maxFrame) this.frameX++;
        //     else this.frameX = 0;
        // } else {
        //     this.frameTimer += deltaTime;
        // }
        // delete when off-screen
        if (this.x + this.width < 0) this.markedForDeletion = true
    }

    draw(context) {
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height)
    }
}
export class Hand extends Objects{
    constructor(game) {
        super(),
        this.game = game,
        this.width = 100,
        this.height = 100,
        this.x = this.game.width - 50,
        this.y = Math.random() * this.game.height - 50,
        this.speed = 2,
        this.maxFrame;
        this.image = document.getElementById('hand')
    }
    update (deltaTime) {
        super.update(deltaTime)
    }
}

export class Treat extends Objects{
        constructor(game) {
            super(),
            this.game = game,
            this.width = 100,
            this.height = 100,
            this.x = this.game.width - 50,
            this.y = Math.random() * this.game.height - 50,
            this.speed = 2,
            this.maxFrame;
            this.image = document.getElementById('treat')
        }
        update (deltaTime) {
            super.update(deltaTime)
        }
        // draw(context) {
        //     context.fillStyle = 'gainsboro',
        //     context.fillRect(this.x, this.y, this.width, this.height),
        //     context.drawImage(this.image, this.x, this.y, this.width, this.height)
        // }
    }