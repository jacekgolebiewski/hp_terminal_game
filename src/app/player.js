const BaseElement = require('../element/element');
const Point = require('../common/point');
const Direction = require('../common/direction');
const ConsoleApi = require('../api/console/console-api');
const Pixel = require('../common/pixel');
const SpellBombarda = require('../element/spell/spell-bombarda');
const SpellProtego = require('../element/spell/spell-protego');

class Player extends BaseElement {

    constructor(name, position, direction) {
        super();
        this.name = name;
        this.position = position;
        this.direction = direction;
        this.type = 'Player';
        this.health = 100;
        this.mana = 100;
        this.alive = true;
    }

    moveDirection(game, dir) {
        if (this.alive){
            const newPosition = this.position.move(dir);
            const collisionElements = game.collisionElements(newPosition);
            if (collisionElements.some(el => el.type === 'Player' || el.type === 'Board')) {
            } else {
                this.position = newPosition;
            }
        }
    }

    draw(game) {
        ConsoleApi.draw(new Pixel(this.position, '@', this.getHealthColor()))
    }

    live(game) {
        if (this.alive) {
            super.onLiveReady(() => {
                if (this.mana < 100) {
                    this.mana++;
                }
                if (this.health < 100) {
                    this.health++;
                }

                if (this.castSpell === undefined) {
                    return;
                }

                const spells = {
                    'bombarda': () => new SpellBombarda(this.position.move(this.direction), this.direction),
                    'protego': () => new SpellProtego(this.position.move(this.direction))
                };

                const spell = spells[this.castSpell]();
                if (this.mana - spell.manaCost >= 0) {
                    this.mana -= spell.manaCost;
                    this.castSpell = undefined;
                    game.add(spell);
                }
            });
        }

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
        const newHealth = this.health - hit;
        if (newHealth < 0) {
            this.alive = false;
            this.health = 0;
            return;
        }
        this.health -= hit;
    }

    positions() {
        return [this.position];
    }

    getHealthColor() {
        if (this.health >= 90) {
            return ConsoleApi.COLOR.GREEN;
        }
        if (this.health >= 30) {
            return ConsoleApi.COLOR.YELLOW;
        }
        if (this.health >= 5) {
            return ConsoleApi.COLOR.RED;
        }
        return ConsoleApi.COLOR.LIGHT_MAGENTA;
    }
}

module.exports = Player;
