const SocketEvent = require('../api/socket/event/event');
const EventType = require('../api/socket/event/event-type');
const Point = require('../common/point');

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
            loopElements.splice(0, 1).live(this);
        }

        this.elements.forEach(el => el.draw(new Point(1, 1)))
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
            this.events.push(new Event(EventType.DELETE, element));
        }
    }


}

module.exports = Game;
