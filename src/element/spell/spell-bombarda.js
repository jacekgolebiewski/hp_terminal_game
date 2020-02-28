const BaseElement = require('../element');
const ConsoleApi = require('./../../api/console/console-api');
const Time = require('../../common/time');
const Pixel = require('../../common/pixel');

class SpellBombarda extends BaseElement {

    constructor(position, direction) {
        super();
        this.position = position;
        this.direction = direction;

        this.hit = 30;
    }

    draw(game) {
        ConsoleApi.draw(new Pixel(
            this.position, '*', ConsoleApi.COLOR.LIGHT_RED
        ));
    }

    live(game) {
        super.onLiveReady(() => {
            this.position.x += this.direction.x;
            this.position.y += this.direction.y;

            // calcNewPoisition

            // game.elements.filter(el => {
            //  el.positions.any(pos => pos.x === newPos.x && pox.y === newPos.y
            //type === Board
            //  );
            // ) {
            // return;
            //}


            // a jezeli Player
            //player.hit(hit)
        });
    }

}

module.exports = SpellBombarda;
