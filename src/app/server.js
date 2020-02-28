const ConsoleApi = require('../api/console/console-api');
const GameElement = require('../element/element');
const SplashAnimation = require('../element/animation/splash/splash');
const Game = require('./game');
const Pixel = require('../common/pixel');

const LOOP_INTERVAL = 300;

module.exports = (async function () {

    ConsoleApi.clear();

    ConsoleApi.draw(new Pixel({x: 5, y:10}, '#', ConsoleApi.COLOR.RED));

    const game = new Game();
    game.add(new SplashAnimation());


    setInterval(() => game.runFrame(), 110);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
