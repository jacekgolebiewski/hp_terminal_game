const BaseElement = require('../element');
const ConsoleApi = require('./../../api/console/console-api');
const Pixel = require('../../common/pixel');
const SplashAnimation = require('../animation/splash/splash');

class SpellAvada extends BaseElement {


    constructor(owner, position, direction) {
        super();
        this.points = [position];
        this.position = position;
        this.owner = owner;
        this.direction = direction;
        this.hit = 100;
        this.manaCost = 100;
        this.type = 'SpellAvada';
    }


    draw(game) {
        this.points.forEach(point => {
            ConsoleApi.draw(new Pixel(
                point, '░', ConsoleApi.COLOR.GREEN
            ));
        })
    }

    live(game) {
        super.onTimeoutReady(10, () => {
            const newPosition = this.position.move(this.direction);
            const collisionElements = game.collisionElements(newPosition);
            if (collisionElements.some(el => el.type === 'Board')) {
                game.delete(this);
                this.points = [];
            } else if (collisionElements.some(el => el.type === 'Player')) {
                collisionElements.filter(el => el.type === 'Player').forEach(el => el.hit(this.owner, this.hit));
                game.delete(this);
                game.add(new SplashAnimation(newPosition.copy()))
                this.points = [];
            } else if (collisionElements.some(el => el.type === 'SpellBombarda')) {
                collisionElements.filter(el => el.type === 'SpellBombarda').forEach(el => game.delete(el));
                game.delete(this);
                this.points = [];
            } else if (collisionElements.some(el => el.type === 'SpellProtego')) {
                game.delete(this);
                this.points = [];
            } else {
                this.points.push(newPosition);
                this.position = newPosition;
            }
        });
    }

    positions() {
        return this.points;
    }
}

module.exports = SpellAvada;
