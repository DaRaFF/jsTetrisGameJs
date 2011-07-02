if(typeof require == 'function'){
    var gamejs = require('gamejs');
    var screen = require('Tetris/screen').screen;
    var Tetris = require('Tetris/Tetris').Tetris;
    var touch = require('Util/touch');
    var fps = require('Util/fps');
}

var GameScene = function(director){
    touch.init();
    var fpsDisplay = new fps.FpsDisplay();
    
    //handle input
    function handleEvent(event) {
        //keyboard input
        if( event.type == gamejs.event.KEY_DOWN){
            if (event.key == gamejs.event.K_UP){
                Tetris.game.player.input = "TURN";
            }
            if (event.key == gamejs.event.K_DOWN){
                Tetris.game.player.input = "DOWN";
            }
            if (event.key == gamejs.event.K_RIGHT){
                Tetris.game.player.input = "RIGHT";
            }
            if (event.key == gamejs.event.K_LEFT){
                Tetris.game.player.input = "LEFT";
            }
        }
        //mouse input
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
    };
    
    this.draw = function(display){
        screen.update();
        Tetris.game.update();
        display.clear();
        Tetris.game.draw(display);
    }

    // game loop
    //    function gameTick(msDuration) {
    //        var display = gamejs.display.setMode([screen.screen_width, screen.screen_height]);
    //        gamejs.event.get().forEach(function(event) {
    //            handleEvent(event);
    //        });
    //        screen.update();
    //        Tetris.game.update();
    //        fpsDisplay.update(msDuration);
    //        
    //        display.clear();
    //        Tetris.game.draw();
    //        fpsDisplay.draw(display);
    //    };

    // start game loop.
    Tetris.game = new Tetris();
    //gamejs.time.fpsCallback(gameTick, this, 30);
    return this;
}

exports.GameScene = GameScene;