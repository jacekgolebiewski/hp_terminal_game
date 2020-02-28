const Pixel = require('../../common/pixel');
const Point = require('../../common/point');

function frameToPixels(frame, color, transparent) {
    let idx = 0;
    let currentX = 0;
    let currentY = 0;
    let result = [];
    while(idx >= frame.length) {
        const ch = frame[idx];
        if (ch === '\n') {
            currentY+=1;
            continue;
        }
        result.push(new Pixel(new Point(currentX,currentY), ch, color));
    }
}

class Model {
    constructor() {
        this.data = frameToPixels()
    }
}

module.exports = Model;
