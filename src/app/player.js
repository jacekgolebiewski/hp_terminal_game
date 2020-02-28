const BaseElement = require('../element/element');
const Point = require('../common/point');
const Direction = require('../common/direction');
const ConsoleApi = require('../api/console/console-api');
const Pixel = require('../common/pixel');

class Player extends BaseElement {

    constructor() {
        super();
        this.position = new Point(2, 2);
        this.direction = Direction.N;
        this.type = 'Player';
        this.health = 100;
    }

    moveDirection(dir) {
        const x = this.position.x + dir.x;
        const y = this.position.y + dir.y;
        if (x > 1 && x < 20 && y > 1 && y < 40) {
            this.position = new Point(x, y);
        }
    }

    draw(game) {
        ConsoleApi.draw(new Pixel(this.position, '@', ConsoleApi.COLOR.CYAN))
    }

    live(game) {
        super.onLiveReady(() => {
            if (this.castSpell === 'bombarda') {
                this.castSpell = undefined;
                game.add(new SpellBombarda(this.position, this.direction))
            }
        });
    }

    up() {
        this.moveDirection(Direction.N);
    }

    down() {
        this.moveDirection(Direction.S);
    }

    left() {
        this.moveDirection(Direction.E);
    }

    right() {
        this.moveDirection(Direction.W);
    }

    spell(name) {
        this.castSpell = name;
    }


}

module.exports = Player;
