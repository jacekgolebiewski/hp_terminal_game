class Match {

    constructor() {
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
    }

    isRoundFinished() {
        return this.players.filter(player => player.alive).length === 1;
    }

    startNewRound() {
        return this.players.forEach(player => player.reset());
    }

}

module.exports = Match;