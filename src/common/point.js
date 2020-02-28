class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    same(point) {
        return this.x === point.x && this.y === point.y;
    }

    move(dir) {
        return new Point(this.x + dir.x, this.y + dir.y);
    }

    copy() {
        return new Point(this.x, this.y);
    }

}

module.exports = Point;
