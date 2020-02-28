const ConsoleApi = require('../api/console/console-api');
const GameElement = require('../element/element');
const SplashAnimation = require('../element/animation/splash/splash');
const Game = require('./game');

const LOOP_INTERVAL = 300;

module.exports = (function () {

    ConsoleApi.clear();

    const game = new Game();
    game.add(new SplashAnimation());
    new Game().runFrame();

});
