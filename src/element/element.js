const Time = require('../common/time');

function generateId() {
    return Math.random().toString(36).substring(4);
}

class BaseElement {
    // type;
    // priority;

    constructor() {
        this.id = generateId();
    }

    draw(game) {
        this.validate();
        throw Error(`Implement draw() method of your element: ${this.type}`);
    }

    live(game) {
        this.validate();
        throw Error(`Implement live() method of your element: ${this.type}`);
    }

    validate() {
        if (!this.type) {
            throw Error(`Set type property of your element`);
        }
    }

    positions(){
        this.validate();
        throw Error(`Implement positions() method of your element: ${this.type}`);
    }

    onLiveReady(fn) {
        if (this.lastUpdate && Time.diff(this.lastUpdate) < 100) {
            return;
        }
        this.lastUpdate = Time.now();
        fn && fn();
    }

    onTimeoutReady(delay, fn) {
        if (this.lastUpdate && Time.diff(this.lastUpdate) < delay) {
            return;
        }
        this.lastUpdate = Time.now();
        fn && fn();
    }

}

module.exports = BaseElement;

