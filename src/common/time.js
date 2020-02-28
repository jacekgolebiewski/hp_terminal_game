class Time {

    static now() {
        return new Date().getTime();
    }

    static diff(time) {
        return this.now() - time;
    }

}

module.exports = Time;
