const BaseElement = require('../element');
const ConsoleApi = require('./../../api/console/console-api');
const Pixel = require('../../common/pixel');
const SplashAnimation = require('../animation/splash/splash');
const Time = require('../../common/time');

class SpellProtego extends BaseElement {

    constructor(position) {
        super();
        this.createdTime = Time.now();
        this.position = position;
        this.type = 'Spell';
    }

    draw(game) {
        ConsoleApi.draw(new Pixel(
            this.position, '', ConsoleApi.COLOR.CYAN
        ));
    }

    live(game) {
        if (Time.now() - this.createdTime > 1000) {
            game.delete(this);
        }
    }

    positions() {
        return [this.position];
    }
}

module.exports = SpellProtego;
