const BaseAnimation = require('../animation');
const splashFrames = require('./splash.frames');

class SplashAnimation extends BaseAnimation {
    constructor() {
        super(splashFrames);
        this.type = 'SplashAnimation';
    }
}

module.exports = SplashAnimation;
