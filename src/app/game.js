const SocketEvent = require('../api/socket/event/event');
const EventType = require('../api/socket/event/event-type');
const Point = require('../common/point');
const Pixel = require('../common/pixel');
const ConsoleApi = require('../api/console/console-api');

class Game {

    constructor() {
        this.offset = new Point(1,1);
        this.events = [];
        this.elements = [];
    }

    runFrame() {
        this.elements.sort(el => el.priority);
        let loopElements = [...this.elements];

        //main game loop
        while (loopElements.length > 0) {
            loopElements.splice(0, 1)[0].live(this);
        }

        this.draw();
    }

    markForUpdate(element) {
        this.events.push(new SocketEvent(EventType.UPDATE, element));
    }

    add(element) {
        this.elements.push(element);
        this.events.push(new SocketEvent(EventType.CREATE, element));
    }

    delete(element) {
        const filteredElements = this.elements.filter(el => el.id !== element.id);
        if (filteredElements < this.elements) {
            this.elements = filteredElements;
            this.events.push(new SocketEvent(EventType.DELETE, element));
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
