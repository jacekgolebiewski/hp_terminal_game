var keypress = require('keypress');

class KeyboardApi {

    listeners = [];

    constructor() {
        keypress(process.stdin);
        process.stdin.on('keypress', (ch, key) => {
            if (key) {
                this.listeners.forEach(value => value(key.name));
            } else {
                this.listeners.forEach(value => value(ch));
            }
            if (key && key.ctrl && key.name == 'c') {
                process.stdin.pause();
            }
        });
        process.stdin.setRawMode(true);
        process.stdin.resume();
    }

    onKey(fun) {
        this.listeners.push(fun);
    }

}