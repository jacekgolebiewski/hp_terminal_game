const ConsoleApi = require('../api/console/console-api');
const KeyboardApi = require('../api/keyboard/keyboard-api');
const SplashAnimation = require('../element/animation/splash/splash');
const Game = require('./game');
const Pixel = require('../common/pixel');
const Player = require('./player');
const Board = require('../element/board');
const Point = require('../common/point')
const Direction = require('../common/direction')
const Size = require('../common/size');
const PlayerList = require('../element/player-list');
const Banner = require('../element/banner');
// const args = require('./args');

const LOOP_INTERVAL = 300;

module.exports = (async function () {

    ConsoleApi.clear();

    ConsoleApi.draw(new Pixel({x: 5, y: 10}, '#', ConsoleApi.COLOR.RED));

    const game = new Game();
    const keyboardApi = new KeyboardApi();
    const player1 = new Player('Player1', new Point(10, 2), Direction.S);

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
            case 'g':
                player1.spell('protego');
                break;
        }
    });
    const player2 = new Player('Player2', new Point(10, 39), Direction.N);
    keyboardApi.onKey(key => {
        switch (key) {
            case 'up':
                player2.up(game);
                break;
            case 'down':
                player2.down(game);
                break;
            case 'left':
                player2.left(game);
                break;
            case 'right':
                player2.right(game);
                break;
            case '/':
                player2.spell('bombarda');
                break;
        }
    });
    game.add(player2);
    game.add(new Banner());
    game.add(new PlayerList());
    game.add(new Board(new Size(20, 40)));
    setInterval(() => game.runFrame(), 50);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
