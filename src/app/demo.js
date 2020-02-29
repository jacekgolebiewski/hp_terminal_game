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
    const avada = load('C:\\Users\\pkobus\\reps\\hp_terminal_game\\resources\\avada.wav');


    const keyboardApi = new KeyboardApi();
    const voldemort = new Player('Voldemort', 'V', new Point(10, 3), Direction.S);
    keyboardApi.onKey(key => {
        switch (key) {
            case 'w':
                voldemort.up(game);
                break;
            case 's':
                voldemort.down(game);
                break;
            case 'a':
                voldemort.left(game);
                break;
            case 'd':
                voldemort.right(game);
                break;
            case 'f':
                voldemort.spell('protego');
                break;
            case 'g':
                voldemort.spell('bombarda');
                break;
            case 'h':
                voldemort.spell('avada');
                break;
        }
    });
    const harry = new Player('Harry', 'H', new Point(10, 28), Direction.N);
    keyboardApi.onKey(key => {
        switch (key) {
            case 'up':
                harry.up(game);
                break;
            case 'down':
                harry.down(game);
                break;
            case 'left':
                harry.left(game);
                break;
            case 'right':
                harry.right(game);
                break;
            case ',':
                harry.spell('protego');
                break;
            case '.':
                harry.spell('bombarda');
                break;
            case '/':
                harry.spell('conflagration');
                break;
        }
    });
    const game = new Game();
    buildWorld(game, voldemort, harry);

    const match = new Match();
    match.addPlayer(voldemort);
    match.addPlayer(harry);

    setInterval(() => {
        game.runFrame();
        if (match.isRoundFinished()) {
            game.elements.filter(value => value.type.startsWith('Spell')).forEach(el => game.delete(el));
        }
    }, 50);
    setInterval(() => {
        if (match.isRoundFinished()) {
            const roundFinishedBanner = new RoundFinishedBanner();
            game.add(roundFinishedBanner);
            setTimeout(() => {
                game.delete(roundFinishedBanner);
                match.startNewRound();
            }, 2000);
        }
    }, 500);

});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
