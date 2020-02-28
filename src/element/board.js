const BaseElement = require('./element');
const ConsoleApi = require('../api/console/console-api');
const Pixel = require('../common/pixel');
const Point = require('../common/point');

class Board extends BaseElement {

    size;

    constructor(size) {
        super();
        this.size = size;
    }

    draw(game) {
        for (let i=1; i<=this.size.x; i++) {
            ConsoleApi.draw(new Pixel(new Point(i, 0), '#', ConsoleApi.COLOR.YELLOW))
            ConsoleApi.draw(new Pixel(new Point(i, this.size.y), '#', ConsoleApi.COLOR.YELLOW))
        }
        for (let i=1; i<=this.size.y; i++) {
            ConsoleApi.draw(new Pixel(new Point(0, i), '#', ConsoleApi.COLOR.YELLOW))
            ConsoleApi.draw(new Pixel(new Point(this.size.x, i), '#', ConsoleApi.COLOR.YELLOW))
        }
    }


    live(game) {

    }
}
module.exports = Board;