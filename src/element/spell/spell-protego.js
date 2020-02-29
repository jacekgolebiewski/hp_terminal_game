const BaseElement = require('../element');
const ConsoleApi = require('./../../api/console/console-api');
const Pixel = require('../../common/pixel');
const Direction = require('../../common/direction');
const Time = require('../../common/time');

class SpellProtego extends BaseElement {

    constructor(player) {
        super();
        this.createdTime = Time.now();
        this.player = player;
        this.manaCost = 30;
        this.type = 'SpellProtego';
        this.points = [];
    }

    draw(game) {
        const centerPoint = this.player.position.move(this.player.direction);
        this.points.push(centerPoint);
        ConsoleApi.draw(new Pixel(
            centerPoint, '═', ConsoleApi.COLOR.CYAN
        ));
        if (this.player.direction.same(Direction.N)) {
            const rightPoint = this.player.position.move(this.player.direction).move(Direction.W);
            this.points.push(rightPoint);
            ConsoleApi.draw(new Pixel(
                rightPoint, '╗', ConsoleApi.COLOR.CYAN
            ));
            const leftPoint = this.player.position.move(this.player.direction).move(Direction.E);
            this.points.push(leftPoint);
            ConsoleApi.draw(new Pixel(
                leftPoint, '╔', ConsoleApi.COLOR.CYAN
            ));
        }
        if (this.player.direction.same(Direction.S)) {
            const rightPoint = this.player.position.move(this.player.direction).move(Direction.W);
            this.points.push(rightPoint);
            ConsoleApi.draw(new Pixel(
                rightPoint, '╝', ConsoleApi.COLOR.CYAN
            ));
            const leftPoint = this.player.position.move(this.player.direction).move(Direction.E);
            this.points.push(leftPoint);
            ConsoleApi.draw(new Pixel(
                leftPoint, '╚', ConsoleApi.COLOR.CYAN
            ));
        }

    }

    live(game) {
        if (Time.now() - this.createdTime > 2000) {
            game.delete(this);
        }
    }

    positions() {
        return this.points;
    }
}

module.exports = SpellProtego;
