class EventType {
    static get DELETE() {
        return 'delete';
    }
    static get CREATE() {
        return 'create';
    }
    static get UPDATE() {
        return 'update';
    }
}

module.exports = EventType;
