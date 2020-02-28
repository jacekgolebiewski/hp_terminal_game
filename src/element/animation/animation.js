const Time = require('../../common/time');
const BaseElement = require('../element');
const ConsoleApi = require('../../api/console/console-api');

const DELAY = 100;


class BaseAnimation extends BaseElement {
    // lastUpdate;

    constructor(frames) {
        super();
        this.currentFrameIdx = 0;
        this.frames = frames;
    }

    getCurrentFrame() {
        return this.frames[this.currentFrameIdx];
    }

    draw(game) {
        const pixels = new Model(this.getCurrentFrame()).data;
        pixels.forEach(pixel => ConsoleApi.draw(pixel));

    }

    live(game) {
        if (this.lastUpdate && Time.diff(this.lastUpdate) < 100) {
            return;
        }
        if (this.currentFrameIdx >= this.frames.length) {
            game.delete(this);
        }
        this.currentFrameIdx++;
    }
}

module.exports = BaseAnimation;
