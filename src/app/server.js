const ConsoleApi = require('../api/console/console-api');
const SplashAnimation = require('../element/animation/splash/splash');
const Game = require('./game');
const args = require('./args');

module.exports = (function () {

    ConsoleApi.clear();

    const game = new Game();
    game.add(new SplashAnimation());
    game.runFrame();

});
