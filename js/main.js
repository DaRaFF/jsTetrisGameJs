var gamejs = require('gamejs');
var screen = require('Tetris/screen').screen;
var Tetris = require('Tetris/Tetris').Tetris;
var touch = require('Util/touch');

var SCREEN_WIDTH = 400;
var SCREEN_HEIGHT = 400;

function main() {
    touch.init();
    
    //handle input
    function handleEvent(event) {
        switch(event.key) {
            case gamejs.event.K_UP:
                Tetris.game.player.input = "TURN";
                break;
            case gamejs.event.K_DOWN:
                Tetris.game.player.input = "DOWN";
                break;
            case gamejs.event.K_RIGHT:
                Tetris.game.player.input = "RIGHT";
                break;
            case gamejs.event.K_LEFT:
                Tetris.game.player.input = "LEFT";
                break;
            default:
                if(event.type === gamejs.event.MOUSE_DOWN) {
                    if( screen.getInnerHeight() * 2 / 3 <= event.pos[1]){
                        Tetris.game.player.input = "DOWN";
                        return;
                    }
                    if( screen.getInnerWidth() * 1 / 3 >= event.pos[0]){
                        Tetris.game.player.input = "LEFT";
                        return;
                    }
                    if( screen.getInnerWidth() * 1 / 3 <= event.pos[0] && screen.getInnerWidth() * 2 / 3 >= event.pos[0]){
                        Tetris.game.player.input = "TURN";
                        return;
                    }
                    Tetris.game.player.input = "RIGHT";
                }
                break;
        };
    };

    // game loop
    function gameTick(msDuration) {
        gamejs.event.get().forEach(function(event) {
            handleEvent(event);
        });
        screen.update();
        Tetris.game.update();
        
        display.clear();
        
        Tetris.game.draw();
    };

    // start game loop.
    var display = gamejs.display.setMode([SCREEN_WIDTH, SCREEN_HEIGHT]);
    Tetris.game = new Tetris();
    gamejs.time.fpsCallback(gameTick, this, 30);
};

// call main after all resources have finished loading
gamejs.ready(main);
