const BaseElement = require('./element');
const ConsoleApi = require('../api/console/console-api');
const Pixel = require('../common/pixel');
const Point = require('../common/point');

function calculatePoints(size) {
    let points = [];
    for (let i=1; i<=size.x; i++) {
        points.push(new Point(i, 1));
        points.push(new Point(i, size.y));
    }
    for (let i=1; i<=size.y; i++) {
        points.push(new Point(1, i));
        points.push(new Point(size.x, i));
    }
    return points;
}

class Board extends BaseElement {

    constructor(size) {
        super();
        this.size = size;
        this.type = 'Board';
        this.points = calculatePoints(size);
    }

    draw(game) {
        this.points.forEach(value => {
            ConsoleApi.draw(new Pixel(value, '#', ConsoleApi.COLOR.YELLOW))
        });
    }


    live(game) {

    }

    positions() {
        return this.points;
    }
}

module.exports = Board;
