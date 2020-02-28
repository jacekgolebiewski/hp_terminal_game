const BaseElement = require('./element');
const ConsoleApi = require('../api/console/console-api');
const Pixel = require('../common/pixel');
const Point = require('../common/point');

const BOARD_COLOR = ConsoleApi.COLOR.NEUTRAL;

class Board extends BaseElement {

    constructor(size) {
        super();
        this.size = size;
    }

    draw(game) {
        for (let i=1; i<=this.size.x; i++) {
            ConsoleApi.draw(new Pixel(new Point(i, 0), '#', BOARD_COLOR))
            ConsoleApi.draw(new Pixel(new Point(i, this.size.y), '#', BOARD_COLOR))
        }
        for (let i=1; i<=this.size.y; i++) {
            ConsoleApi.draw(new Pixel(new Point(0, i), '#', BOARD_COLOR))
            ConsoleApi.draw(new Pixel(new Point(this.size.x, i), '#', BOARD_COLOR))
        }
    }


    live(game) {

    }
}

module.exports = Board;
