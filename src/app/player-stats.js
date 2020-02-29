class PlayerStats {

    constructor() {
        this.kills = 0;
        this.deaths = 0;
    }

    death() {
        this.deaths ++;
    }

    kill() {
        this.kills ++;
    }

}

module.exports = PlayerStats;