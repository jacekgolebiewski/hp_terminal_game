const ConsoleApi = require('../api/console/console-api');
const GameElement = require('../element/element');
const KeyboardApi = require('../api/keyboard/keyboard-api');
const SplashAnimation = require('../element/animation/splash/splash');
const Game = require('./game');
const Pixel = require('../common/pixel');
const Player = require('./player');
// const args = require('./args');

const LOOP_INTERVAL = 300;

module.exports = (async function () {

    ConsoleApi.clear();

    ConsoleApi.draw(new Pixel({x: 5, y: 10}, '#', ConsoleApi.COLOR.RED));

    const game = new Game();
    game.add(new SplashAnimation());
    const keyboardApi = new KeyboardApi();
    const player1 = new Player();
    game.add(player1);
    keyboardApi.onKey(key => {
        switch (key) {
            case 'w':
                player1.up();
                break;
            case 's':
                player1.down();
                break;
            case 'a':
                player1.left();
                break;
            case 'd':
                player1.right();
                break;
            case 'f':
                player1.spell('bombarda');
                break;
        }
    });
    setInterval(() => game.runFrame(), 110);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
