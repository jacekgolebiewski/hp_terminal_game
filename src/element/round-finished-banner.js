const ConsoleApi = require('../api/console/console-api');
const Point = require('../common/point');
const Pixel = require('../common/pixel');
const Model = require('../element/animation/model');
const BaseElement = require('./element');

const banner = `
|  __ \\                     | |  / _(_)     (_)   | |            | |
| |__) |___  _   _ _ __   __| | | |_ _ _ __  _ ___| |__   ___  __| |
|  _  // _ \\| | | | '_ \\ / _\` | |  _| | '_ \\| / __| '_ \\ / _ \\/ _\` |
| | \\ \\ (_) | |_| | | | | (_| | | | | | | | | \\__ \\ | | |  __/ (_| |
|_|  \\_\\___/ \\__,_|_| |_|\\__,_| |_| |_|_| |_|_|___/_| |_|\\___|\\__,_|
`;

class RoundFinishedBanner extends BaseElement {

    constructor() {
        super();
        this.type = 'RoundFinishedBanner';
    }

    live(game) {

    }

    draw(game) {
        new Model(banner, new Point(0, 12), ConsoleApi.COLOR.YELLOW).data.forEach(pixel => {
            pixel.point.x+=23;
            ConsoleApi.draw(pixel);
        });
    }

    positions() {
        return [];
    }
}

module.exports = RoundFinishedBanner;
