const BaseElement = require('./element');
const ConsoleApi = require('../api/console/console-api');
const Pixel = require('../common/pixel');

class PlayerList extends BaseElement {

    constructor(startPoint) {
        super();
        this.type = 'PlayerList'
    }

    live(game) {

    }

    draw(game) {
        const players = game.elements.filter(el => el.type === 'Player');
        ConsoleApi.draw(new Pixel(
            {
                x: 25, y: 7
            },
            `Lista graczy:`,
            ConsoleApi.COLOR.NEUTRAL
        ));
        for (let i = 0; i < players.length; i++) {
            let currentPlayer = players[i];
            ConsoleApi.draw(new Pixel(
                {
                    x: 25, y: i + 7
                },
                `${currentPlayer.name}(${PlayerList.getHealthAliveName(currentPlayer.alive)}): ${currentPlayer.health} HP, ${currentPlayer.mana} MP, ${currentPlayer.playerStats.kills} kills, ${currentPlayer.playerStats.deaths} deaths`,
                currentPlayer.getHealthColor()
            ));
        }
    }

    static getHealthAliveName(alive) {
        return alive ? 'Alive' : 'DEAD';
    }

    positions() {
        return [];
    }
}

module.exports = PlayerList;
