const Time = require('../../common/time');
const BaseElement = require('../element');
const ConsoleApi = require('../../api/console/console-api');
const Model = require('./model');
const Point = require('../../common/point');
const Pixel = require('../../common/pixel');

const DELAY = 100;


class BaseAnimation extends BaseElement {
    // lastUpdate;

    constructor(pixelArr) {
        super();
        this.position = new Point(10, 10);
        this.currentFrameIdx = 0;
        this.frames = pixelArr;
    }

    getCurrentFrame() {
        return this.frames[this.currentFrameIdx];
    }

    draw(game) {
        if (this.finished()) {
            game.delete(this);
            return;
        }
        this.getCurrentFrame().forEach(pixel => {
            ConsoleApi.draw(new Pixel(
                {
                    x: pixel.point.x + this.position.x,
                    y: pixel.point.y + this.position.y
                },
                pixel.ch,
                pixel.color));
        });
    }

    live(game) {
        if (this.finished()) {
            game.delete(this);
            return;
        }
        super.onLiveReady(() => {
            this.currentFrameIdx++;
        });
    }

    finished() {
        return this.currentFrameIdx >= this.frames.length;
    }

    positions() {
        return [];
    }
}

module.exports = BaseAnimation;
