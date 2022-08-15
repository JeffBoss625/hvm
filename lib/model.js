class GameModel {
    constructor (input) {
        this.cards = []
        this.lanes = []
    }
}

module.exports = {
    create: (input) => { return new GameModel(input) }
}