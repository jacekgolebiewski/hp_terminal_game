const Time = require('../../common/time');
const BaseElement = require('../element');

const DELAY = 100;


class Animation extends BaseElement {
    lastUpdate;
    currentFrame = 0;

    constructor(frames) {
        super();
        this.frames = frames;
    }

    draw(game) {

    }

    live(game) {
        if (this.lastUpdate && Time.diff(this.lastUpdate) < 100) {
            return;
        }
        if (this.currentFrame >= this.frames.length) {
            game.delete(this);
        }
        this.currentFrame++;
    }
}

module.exports = Animation;
