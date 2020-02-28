const WHITE = `\e[39m`;
const RED = `\e[31m`;

const getCursorPositionChars = function (x, y) {
    return `\033[${y};${}`
}

class ConsoleApi {
    static get COLOR() {
        return [
            WHITE,
            RED
        ]
    }

    draw(pixel)

    write(str) {
        process.stdout.write(str);
    }

}

module.exports = ConsoleApi;
