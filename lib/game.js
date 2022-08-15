class Game {
    constructor (elements, model) {
        this.elements = elements
        this.model = model
    }

    start_turn (player) {
        console.log(`${player} turn`)
    }
}


module.exports = {
    create: (elements, model) => { return new Game(elements, model) }
}