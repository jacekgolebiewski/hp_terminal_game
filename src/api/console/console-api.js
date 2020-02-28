const NEUTRAL = '\033[39m';
const RED = '\033[31m';
const GREEN = '\033[32m';
const YELLOW = '\033[33m';
const BLUE = '\033[34m';
const CYAN = '\033[36m';

const CLEAR = '\033[2J';

const getCursorPositionChars = function (point) {
    return '\033[' + point.y + ';' + point.x + 'H';
};

class ConsoleApi {
    static get COLOR() {
        return {
            NEUTRAL,
            RED,
            GREEN,
            YELLOW,
            BLUE,
            CYAN
        };
    }

    static draw(pixel) {
        ConsoleApi.write(`${getCursorPositionChars(pixel.point)}${pixel.color}${pixel.ch}${ConsoleApi.COLOR.NEUTRAL}`);
    }

    static write(str) {
        process.stdout.write(str);
    }

    static clear() {
        ConsoleApi.write(CLEAR)
    }

}

module.exports = ConsoleApi;
