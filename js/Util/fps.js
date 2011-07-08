var gamejs = require('gamejs');
var screen = require('Tetris/screen');

exports.FpsDisplay = function() {
    // fps counter
    var lastDurations = [];
    var fpsFont = new gamejs.font.Font();
    var fpsAvg = 60;

    this.update = function(msDuration) {
        // fps
        lastDurations.push(msDuration);
        var sum = 0;
        lastDurations = lastDurations.splice(lastDurations.length-200, 200);
        lastDurations.forEach(function(ld) {
            sum += ld;
        });
        fpsAvg = Math.ceil(1000 / (sum / lastDurations.length));
    };

    this.draw = function(display) {
        display.blit(fpsFont.render('' + fpsAvg, '#ff33ff'), [screen.SCREEN_WIDTH - 100, 5]);
        return;
    };

    return this;
};