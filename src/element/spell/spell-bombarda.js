const Spell = require('./spell');
const SpellEffect = require('./spell-effect');

class SpellBombarda extends Spell {

    constructor() {
        super(30, SpellEffect.NONE);
    }

    draw() {

    }

}

module.exports = SpellBombarda;
