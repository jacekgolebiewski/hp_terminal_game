const NEUTRAL = '\033[39m';
const RED = '\033[31m';
const CLEAR = '\033[2J';

const getCursorPositionChars = function (point) {
    return '\e[${point.y};${point.x}H';
};

class ConsoleApi {
    static get COLOR() {
        return {
            NEUTRAL,
            RED
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
