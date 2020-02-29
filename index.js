String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

const concat = (x,y) =>
    x.concat(y);

const flatMap = (f,xs) =>
    xs.map(f).reduce(concat, []);

Array.prototype.flatMap = function(f) {
    return flatMap(f,this)
};

require('./src/app/demo')();
