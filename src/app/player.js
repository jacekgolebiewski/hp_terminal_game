const BaseElement = require('../element/element');
const Point = require('../common/point');
const Direction = require('../common/direction');
const ConsoleApi = require('../api/console/console-api');
const Pixel = require('../common/pixel');

class Player extends BaseElement {

    constructor() {
        super();
        this.position = new Point(5, 5);
        this.type = 'Player'
    }

    moveDirection(dir) {
        this.position = new Point(this.position.x + dir.x, this.position.y + dir.y);
    }

    draw(game) {
        ConsoleApi.draw(new Pixel(this.position, '@', ConsoleApi.COLOR.CYAN))
    }

    live(game) {

    }

    up() {
        this.moveDirection(Direction.N);
    }

    down() {
        this.moveDirection(Direction.S);
    }

    left() {
        this.moveDirection(Direction.E);
    }

    right() {
        this.moveDirection(Direction.W);
    }


}

module.exports = Player;