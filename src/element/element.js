function generateId() {
    return Math.random().toString(36).substring(4);
}

class BaseElement {
    type;
    priority;

    constructor() {
        if (!this.type) {
            throw Error(`Set type property of your element`);
        }
        this.id = generateId();
    }

    draw(game) {
        throw Error(`Implement draw() method of your element: ${this.type}`);
    }

    live(game) {
        throw Error(`Implement live() method of your element: ${this.type}`);
    }

}

module.exports = Element;

