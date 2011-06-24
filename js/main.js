var gamejs = require('gamejs');

var Tetris = require('Tetris').Tetris;


var SCREEN_WIDTH = 400;
var SCREEN_HEIGHT = 400;

function main() {

    // ball changes color on mouse up
    function handleEvent(event) {
        switch(event.type) {
            case gamejs.event.MOUSE_UP:
                ball.nextColor();
                break;
        };
    };

    // handle events.
    // update models.
    // clear screen.
    // draw screen.
    // called ~ 30 times per second by fps.callback
    // msDuration = actual time in milliseconds since last call
    function gameTick(msDuration) {
        gamejs.event.get().forEach(function(event) {
            handleEvent(event);
        });
        //Tetris.game.update();
        display.clear();
        //Tetris.game.draw();
        gamejs.draw.circle(display, '#ff0000', [20,20], 20, 0);
//        gamejs.draw.rect (surface, color, rect, width);
    };

    // setup screen and ball.
    // ball in screen center.
    // start game loop.
    var display = gamejs.display.setMode([SCREEN_WIDTH, SCREEN_HEIGHT]);
    Tetris.game = new Tetris();
    gamejs.time.fpsCallback(gameTick, this, 30);
};

// call main after all resources have finished loading
gamejs.ready(main);
