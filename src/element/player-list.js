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
                `${currentPlayer.name}(${PlayerList.getHealthAliveName(currentPlayer.health)}): ${currentPlayer.health}HP`,
                PlayerList.getHealthColor(currentPlayer.health)
            ));
        }
    }

    static getHealthAliveName(health) {
        return health > 0 ? 'Alive' : 'DEAD';
    }

    static getHealthColor(health) {
        if (health >= 90) {
            return ConsoleApi.COLOR.GREEN;
        }
        if (health >= 30) {
            return ConsoleApi.COLOR.YELLOW;
        }
        if (health >= 5) {
            return ConsoleApi.COLOR.RED;
        }
        return ConsoleApi.COLOR.LIGHT_MAGENTA;
    }
    
    positions() {
        return [];
    }
}

module.exports = PlayerList;
