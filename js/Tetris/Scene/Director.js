if(typeof require == 'function'){
    var gamejs = require('gamejs');
    var screen = require('Tetris/screen').screen;
    var touch = require('Util/touch');
}

var Director = function () {
    touch.init();
    var onAir = false;
    var activeScene = null;

    function tick(msDuration) {
        gamejs.display.setMode([screen.screen_width, screen.screen_height]);
        if (!onAir) return;

        if (activeScene.handleEvent) {
            gamejs.event.get().forEach(activeScene.handleEvent);
        } else {
            // throw all events away
            gamejs.event.get();
        }
        if (activeScene.update) {
            activeScene.update(msDuration);
        }
        if (activeScene.draw) {
            activeScene.draw(display);
        }
        return;
    };


    this.start = function(scene) {
        onAir = true;
        this.replaceScene(scene);
        return;
    };

    this.replaceScene = function(scene) {
        activeScene = scene;
    };

    this.getScene = function() {
        return activeScene;
    };
    var display = gamejs.display.setMode([screen.screen_width, screen.screen_height]);
    gamejs.time.fpsCallback(tick, this, 30);
    return this;
};

exports.Director = Director;
