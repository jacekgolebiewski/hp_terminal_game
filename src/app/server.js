const ConsoleApi = require('../api/console/console-api');
const GameElement = require('../element/element');
const KeyboardApi = require('../api/keyboard/keyboard-api');
const SplashAnimation = require('../element/animation/splash/splash');
const Game = require('./game');
const Pixel = require('../common/pixel');
const Player = require('./player');
const Board = require('../element/board');
const Size = require('../common/size');
const PlayerList = require('../element/player-list');
const Banner = require('../element/banner');
// const args = require('./args');

const LOOP_INTERVAL = 300;

module.exports = (async function () {

    ConsoleApi.clear();

    ConsoleApi.draw(new Pixel({x: 5, y: 10}, '#', ConsoleApi.COLOR.RED));

    const game = new Game();
    game.add(new SplashAnimation());
    const keyboardApi = new KeyboardApi();
    const player1 = new Player('Player1');
    game.add(player1);
    keyboardApi.onKey(key => {
        switch (key) {
            case 'w':
                player1.up(game);
                break;
            case 's':
                player1.down(game);
                break;
            case 'a':
                player1.left(game);
                break;
            case 'd':
                player1.right(game);
                break;
            case 'f':
                player1.spell('bombarda');
                break;
        }
    });
    game.add(new Banner());
    game.add(new PlayerList());
    game.add(new Board(new Size(20, 40)));
    setInterval(() => game.runFrame(), 110);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
