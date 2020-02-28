const BaseElement = require('../element/element');
const Point = require('../common/point');
const Direction = require('../common/direction');
const ConsoleApi = require('../api/console/console-api');
const Pixel = require('../common/pixel');
const SpellBombarda = require('../element/spell/spell-bombarda');

class Player extends BaseElement {

    constructor(name) {
        super();
        this.name = name;
        this.position = new Point(2, 2);
        this.direction = Direction.N;
        this.type = 'Player';
        this.health = 100;
    }

    moveDirection(game, dir) {
        const newPosition = this.position.move(dir);
        const collisionElements = game.collisionElements(newPosition);
        if (collisionElements.some(el => el.type === 'Player' || el.type === 'Board')) {
        } else {
            this.position = newPosition;
        }
    }

    draw(game) {
        ConsoleApi.draw(new Pixel(this.position, '@', ConsoleApi.COLOR.CYAN))
    }

    live(game) {
        super.onLiveReady(() => {
            if (this.castSpell === 'bombarda') {
                this.castSpell = undefined;
                game.add(new SpellBombarda(this.position.move(this.direction), this.direction))
            }
        });
    }

    up(game) {
        this.moveDirection(game, Direction.N);
    }

    down(game) {
        this.moveDirection(game, Direction.S);
    }

    left(game) {
        this.moveDirection(game, Direction.E);
    }

    right(game) {
        this.moveDirection(game, Direction.W);
    }

    spell(name) {
        this.castSpell = name;
    }

    hit(hit) {
        this.health -= hit;
    }

    positions() {
        return [this.position];
    }
}

module.exports = Player;
