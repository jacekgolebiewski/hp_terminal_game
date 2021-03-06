const BaseElement = require('../element');
const ConsoleApi = require('./../../api/console/console-api');
const Pixel = require('../../common/pixel');
const SplashAnimation = require('../animation/splash/splash');

class SpellBombarda extends BaseElement {

    constructor(owner, position, direction) {
        super();
        this.position = position;
        this.owner = owner;
        this.direction = direction;
        this.hit = 40;
        this.manaCost = 20;
        this.type = 'SpellBombarda';
    }

    draw(game) {
        ConsoleApi.draw(new Pixel(
            this.position, '*', ConsoleApi.COLOR.LIGHT_RED
        ));
    }

    live(game) {
        super.onLiveReady(() => {
            const newPosition = this.position.move(this.direction);
            const collisionElements = game.collisionElements(newPosition);
            if (collisionElements.some(el => el.type === 'Board')) {
                game.delete(this);
            } else if (collisionElements.some(el => el.type === 'Player')) {
                collisionElements.filter(el => el.type === 'Player').forEach(el => el.hit(this.owner, this.hit));
                game.delete(this);
                game.add(new SplashAnimation(newPosition.copy()));
            } else if (collisionElements.some(el => el.type === 'SpellBombarda')) {
                collisionElements.filter(el => el.type === 'SpellBombarda').forEach(el => game.delete(el));
                game.delete(this);
            } else if (collisionElements.some(el => el.type === 'SpellProtego')) {
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
