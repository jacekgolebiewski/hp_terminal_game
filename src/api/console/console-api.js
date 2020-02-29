const Pixel = require('../../common/pixel');
const Point = require('../../common/point');

const NEUTRAL = '\033[39m';
const RED = '\033[31m';
const LIGHT_RED = '\033[91m';
const GREEN = '\033[32m';
const YELLOW = '\033[33m';
const BLUE = '\033[34m';
const CYAN = '\033[36m';
const LIGHT_MAGENTA = '\033[95m';

const CLEAR = '\033[2J';
const CLEAR2 = '\033[c';

const getCursorPositionChars = function (point) {
    return '\033[' + point.y + ';' + point.x + 'H';
};

let buffer = [];

class ConsoleApi {
    static get COLOR() {
        return {
            NEUTRAL,
            RED,
            LIGHT_RED,
            GREEN,
            YELLOW,
            BLUE,
            CYAN,
            LIGHT_MAGENTA
        };
    }


    static toString(pixel) {
        return `${getCursorPositionChars(pixel.point)}${pixel.color}${pixel.ch}${ConsoleApi.COLOR.NEUTRAL}`;
    }

    static draw(pixel) {
        buffer.push(pixel);
    }

    static render() {
        const display = buffer.map(pixel => ConsoleApi.toString(pixel)).join('');
        buffer = [];
        ConsoleApi.write(display);
    }

    static write(str) {
        process.stdout.write(str);
    }

    static clear() {
        const clearString = '                                                                                                  ';
        const rows = 40;
        for (let i = 1; i <= rows; i++) {
            this.draw(new Pixel(new Point(0, i), clearString, ConsoleApi.COLOR.NEUTRAL));
        }
        ConsoleApi.render();
    }

}

module.exports = ConsoleApi;
