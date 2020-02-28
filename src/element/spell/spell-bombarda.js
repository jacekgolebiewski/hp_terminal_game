const BaseElement = require('../element');
const ConsoleApi = require('./../../api/console/console-api');
const Pixel = require('../../common/pixel');
const SplashAnimation = require('../animation/splash/splash');

class SpellBombarda extends BaseElement {

    constructor(position, direction) {
        super();
        this.position = position;
        this.direction = direction;
        this.hit = 30;
        this.manaCost = 20;
        this.type = 'Spell';
    }

    draw(game) {
        ConsoleApi.draw(new Pixel(
            this.position, '*', ConsoleApi.COLOR.LIGHT_RED
        ));
    }

    live(game) {
        super.onLiveReady(() => {
            const collisionElements = game.collisionElements(this.position);
            if (collisionElements.some(el => el.type === 'Board')) {
                game.delete(this);
            } else if (collisionElements.some(el => el.type === 'Player')) {
                collisionElements.filter(el => el.type === 'Player').forEach(el => el.hit(this.hit));
                game.delete(this);
                game.add(new SplashAnimation(newPosition.copy()));
            } else if (collisionElements.some(el => el.type === 'Spell')) {
                collisionElements.filter(el => el.type === 'Spell').forEach(el => game.delete(el));
                game.delete(this);
            } else {
                this.position = newPosition;
            }
        });
    }

    positions() {
        return [this.position];
    }
}

module.exports = SpellBombarda;
