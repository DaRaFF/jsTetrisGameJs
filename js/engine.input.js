engine.input = {};

engine.input.parseKeyboardInput = function(event){
    switch(event.keyCode){
        case Tetris.command.DOWN:
            Tetris.game.player.input = Tetris.command.DOWN;
            break;
        case Tetris.command.LEFT:
            Tetris.game.player.input = Tetris.command.LEFT;
            break;
        case Tetris.command.RIGHT:
            Tetris.game.player.input = Tetris.command.RIGHT;
            break;
        case Tetris.command.TURN:
            Tetris.game.player.input = Tetris.command.TURN;
            break;
    }
};

engine.input.parseTouchInput = function(event){
    var touch = event.touches[0];
    if( engine.getInnerHeight() * 2 / 3 <= touch.pageY){
        Tetris.game.player.input = Tetris.command.DOWN;
        return;
    }
    if( engine.getInnerWidth() * 1 / 3 >= touch.pageX){
        Tetris.game.player.input = Tetris.command.LEFT;
        return;
    }
    if( engine.getInnerWidth() * 1 / 3 <= touch.pageX && engine.getInnerWidth() * 2 / 3 >= touch.pageX){
        Tetris.game.player.input = Tetris.command.TURN;
        return;
    }
    Tetris.game.player.input = Tetris.command.RIGHT;
};



