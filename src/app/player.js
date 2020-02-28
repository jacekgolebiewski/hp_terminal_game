const BaseElement = require('../element/element');
const Point = require('../common/point');
const Direction = require('../common/direction');
const ConsoleApi = require('../api/console/console-api');
const Pixel = require('../common/pixel');

class Player extends BaseElement {

    constructor() {
        super();
        this.position = new Point(2, 2);
        this.type = 'Player';
        this.health = 100;
    }

    moveDirection(dir) {
        const x = this.position.x + dir.x;
        const y = this.position.y + dir.y;
        if (x > 1 && x < 20 && y > 1 && y < 40) {
            this.position = new Point(x, y);
        }
    }

    draw(game) {
        ConsoleApi.draw(new Pixel(this.position, '@', ConsoleApi.COLOR.CYAN))
    }

    live(game) {

    }

    up(game) {
        this.moveDirection(Direction.N, game);
    }

    down(game) {
        this.moveDirection(Direction.S, game);
    }

    left(game) {
        this.moveDirection(Direction.E, game);
    }

    right(game) {
        this.moveDirection(Direction.W, game);
    }


}

module.exports = Player;