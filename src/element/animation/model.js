const Pixel = require('../../common/pixel');
const Point = require('../../common/point');

function frameToPixels(frame, offset, color, transparent) {
    let idx = 0;
    let currentX = 0;
    let currentY = 0;
    let result = [];
    while (idx < frame.length) {
        const ch = frame[idx];
        if (ch === '\n') {
            currentX = 0;
            currentY += 1;
            idx++;
            continue;
        }
        if (ch === '_') {
            if (transparent) {
                result.push(new Pixel(new Point(currentX + offset.x, currentY + offset.y), ' ', color));
            }
        } else {
            result.push(new Pixel(new Point(currentX + offset.x, currentY + offset.y), ch, color));
        }
        currentX++;
        idx++;
    }
    return result;
}

class Model {
    constructor(frame, offset, color) {
        this.data = frameToPixels(frame, offset, color, true);
    }
}

module.exports = Model;
