const ConsoleApi = require('../api/console/console-api');
const Point = require('../common/point');
const Pixel = require('../common/pixel');
const Model = require('../element/animation/model');
const BaseElement = require('./element');

const banner = `
 [][][] /""\\ [][][]
  |::| /____\\ |::|
  |[]|_|::::|_|[]|
  |::::::__::::::|
  |:::::/||\\:::::|
  |:#:::||||::#::|
 #%*###&*##&*&#*&##
##%%*####*%%%###*%*#
`;

class CastleBanner extends BaseElement {

    constructor() {
        super();
        this.type = 'RoundFinishedBanner';
    }

    live(game) {

    }

    draw(game) {
        new Model(banner, new Point(0, 22), ConsoleApi.COLOR.YELLOW).data.forEach(pixel => {
            pixel.point.x+=23;
            ConsoleApi.draw(pixel);
        });
    }

    positions() {
        return [];
    }
}

module.exports = CastleBanner;
