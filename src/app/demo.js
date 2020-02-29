const ConsoleApi = require('../api/console/console-api');
const KeyboardApi = require('../api/keyboard/keyboard-api');
const SplashAnimation = require('../element/animation/splash/splash');
const Game = require('./game');
const Pixel = require('../common/pixel');
const Player = require('./player');
const Board = require('../element/board');
const Point = require('../common/point');
const Direction = require('../common/direction');
const Size = require('../common/size');
const PlayerList = require('../element/player-list');
const Banner = require('../element/banner');
const Match = require('./match');
const RoundFinishedBanner = require('../element/round-finished-banner');
const CastleBanner = require('../element/castle-banner');
// const args = require('./args');

const LOOP_INTERVAL = 300;

function buildWorld(game, player1, player2) {
    game.add(player1);
    game.add(player2);
    game.add(new Banner());
    game.add(new PlayerList());
    game.add(new Board(new Size(20, 30)));
    game.add(new CastleBanner());
}

module.exports = (async function () {

    ConsoleApi.clear();


    const keyboardApi = new KeyboardApi();
    const player1 = new Player('Player1', new Point(10, 3), Direction.S);
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
                player1.spell('protego');
                break;
            case 'g':
                player1.spell('bombarda');
                break;
            case 'h':
                player1.spell('avada');
                break;
        }
    });
    const player2 = new Player('Player2', new Point(10, 28), Direction.N);
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
            case ',':
                player2.spell('protego');
                break;
            case '.':
                player2.spell('protego');
                break;
            case '/':
                player2.spell('conflagration');
                break;
        }
    });
    const game = new Game();
    buildWorld(game, player1, player2);

    const match = new Match();
    match.addPlayer(player1);
    match.addPlayer(player2);

    setInterval(() => {
        game.runFrame()
        if (match.isRoundFinished()) {
            game.elements.filter(value => value.type.startsWith('Spell')).forEach(el => game.delete(el));
        }
    }, 30);
    setInterval(() => {
        if (match.isRoundFinished()) {
            const roundFinishedBanner = new RoundFinishedBanner();
            game.add(roundFinishedBanner);
            setTimeout(() => {
                game.delete(roundFinishedBanner)
                match.startNewRound();
            }, 2000);
        }
    }, 500);

});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
