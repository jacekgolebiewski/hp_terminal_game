const BaseElement = require('../element/element');
const Point = require('../common/point');
const Direction = require('../common/direction');
const ConsoleApi = require('../api/console/console-api');
const Pixel = require('../common/pixel');
const SpellBombarda = require('../element/spell/spell-bombarda');

class Player extends BaseElement {

    constructor() {
        super();
        this.position = new Point(5, 5);
        this.direction = Direction.N;
        this.type = 'Player';
    }

    moveDirection(dir) {
        this.position = new Point(this.position.x + dir.x, this.position.y + dir.y);
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
