const BaseElement = require('../element');
const ConsoleApi = require('./../../api/console/console-api');
const Pixel = require('../../common/pixel');
const Direction = require('../../common/direction');
const Time = require('../../common/time');

const MAX_LENGTH = 20;
const MAX_LIFETIME = 4000;
const ICONS = ['§', 'S', 's'];

class SpellConflagration extends BaseElement {

    constructor(player) {
        super();
        this.createdTime = Time.now();
        this.player = player;
        this.manaCost = 80;
        this.hit = 40;
        this.type = 'SpellConflagration';
        this.points = [];
        this.lastPositions = [this.player.position];
    }

    draw(game) {
        this.points.forEach(pt =>
            ConsoleApi.draw(new Pixel(pt, SpellConflagration.getIcon(), ConsoleApi.COLOR.LIGHT_RED)));
    }

    live(game) {
        this.onTimeoutReady(100, () => {
            if (Time.now() - this.createdTime > MAX_LIFETIME) {
                game.delete(this);
                return;
            }
            let newLastPositions = [];
            this.lastPositions.flatMap(el => this.generateNextPoints(el))
                .forEach(pt => {
                    const collisionElements = game.collisionElements(pt);
                    if (collisionElements.some(el => el.type === 'Board')) {
                        return;
                    } else if (collisionElements.some(el => el.type === 'SpellProtego')) {
                        return;
                    } else {
                        this.points.insert(0, pt);
                        newLastPositions.push(pt);
                    }
                });
            this.points.length = Math.min(this.points.length, MAX_LENGTH);
            this.lastPositions = newLastPositions;

            this.points.forEach(pt => {
                const collisionElements = game.collisionElements(pt);
                if (collisionElements.some(el => el.type === 'Player')) {
                    collisionElements.filter(el => el.type === 'Player')
                        .forEach(el => el.hit(this.player, this.hit));
                    this.removePoint(pt);
                }
            })
        })
    }

    removePoint(point) {
        this.points = this.points.filter(pt => pt.same(point));
    }

    generateNextPoints(position) {
        let newRow = position.move(this.player.direction);
        const random = Math.floor(Math.random() * 10);
        let isDouble = random > 4;
        const points = [
            newRow.move(Direction.E),
            newRow.move(Direction.W)
        ];
        return isDouble ? points : [points[random % 2]];
    }

    static getIcon() {
        return ICONS[Math.floor(Math.random() * ICONS.length)];
    }

    positions() {
        return this.points;
    }
}

module.exports = SpellConflagration;
