const BaseAnimation = require('../animation');
const Model = require('../model');
const Point = require('../../../common/point');
const ConsoleApi = require('../../../api/console/console-api');
const splashFrames = require('./splash.frames');

class SplashAnimation extends BaseAnimation {
    constructor() {
        super([
            new Model(splashFrames[0], new Point(0, 0), ConsoleApi.COLOR.LIGHT_RED, true).data,
            new Model(splashFrames[1], new Point(-1,-1), ConsoleApi.COLOR.LIGHT_RED, true).data,
            new Model(splashFrames[2], new Point(-2,-2), ConsoleApi.COLOR.LIGHT_RED, true).data,
            new Model(splashFrames[3], new Point(-2,-2), ConsoleApi.COLOR.LIGHT_RED, true).data,
        ]);
        this.type = 'SplashAnimation';
    }

    live(game) {
        super.live(game);
    }

    draw(game) {
        super.draw(game);
    }
}

module.exports = SplashAnimation;
