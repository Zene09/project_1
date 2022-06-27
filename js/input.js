export class InputHandler {
    constructor(){
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
                }
            console.log(e.key, this.keys)
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
                console.log(e.key, this.keys)
        })
    }
}