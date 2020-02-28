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

}

module.exports = BaseElement;

