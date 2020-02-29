const SocketEvent = require('../api/socket/event/event');
const EventType = require('../api/socket/event/event-type');
const Point = require('../common/point');
const Pixel = require('../common/pixel');
const ConsoleApi = require('../api/console/console-api');

class Game {

    constructor() {
        this.offset = new Point(1,1);
        this.elements = [];
    }

    runFrame() {
        this.process();
        this.draw();
    }

    add(element) {
        this.elements.push(element);
    }

    delete(element) {
        const filteredElements = this.elements.filter(el => el.id !== element.id);
        if (filteredElements < this.elements) {
            this.elements = filteredElements;
        }
    }

    process() {
        this.elements.sort(el => el.priority);
        let loopElements = [...this.elements];
        while (loopElements.length > 0) {
            loopElements.splice(0, 1)[0].live(this);
        }
    }

    draw() {
        ConsoleApi.clear();
        this.elements.forEach(el => el.draw(this))
    }

    collisionElements(position) {
        return this.elements.filter(el => el.positions().some(pos => pos.same(position)));
    }


}

module.exports = Game;
