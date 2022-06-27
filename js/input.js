export class InputHandler {
    constructor(game){
        this.game = game
        this.keys = []
        window.addEventListener('keydown', (e) => {
            // when the key is down, set the direction according to our
            // player.setDirection method
            if (( e.key === 'w' ||
                  e.key === 'a' ||
                  e.key === 's' ||
                  e.key === 'd' 
                ) && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key)
                } else if (e.key === 'Enter') this.game.debug = !this.game.debug
            
        })
        window.addEventListener('keyup', (e) => {
            // this one will look a lil different than keydown
            // we need to make sure it only applies to the keys we listed in unSetDirection
            if  ( e.key === 'w' ||
                  e.key === 'a' ||
                  e.key === 's' ||
                  e.key === 'd' ) {
                this.keys.splice(this.keys.indexOf(e.key), 1)
                }
                
        })
    }
}
// CSS Score Keeping, using ';'
export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Chewy';
    }
    draw(context){
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'right';
        context.fillStyle = this.game.fontColor;
        //
        context.fillText(`Score: ${this.game.score}`, 1400, 100)
    }
}