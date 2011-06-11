engine.input = {};

engine.input.parseKeyboardInput = function(event){
    switch(event.keyCode){
        case tetris.command.DOWN:
            engine.player.move(tetris.command.DOWN);
            break;
        case tetris.command.LEFT:
            engine.player.move(tetris.command.LEFT);
            break;
        case tetris.command.RIGHT:
            engine.player.move(tetris.command.RIGHT);
            break;
        case tetris.command.TURN:
            engine.player.move(tetris.command.TURN);
            break;
    }
};

engine.input.parseTouchInput = function(event){
    var touch = event.touches[0];
    if( engine.getInnerHeight() * 2 / 3 <= touch.pageY){
        engine.player.move('down');
        return;
    }
    if( engine.getInnerWidth() * 1 / 3 >= touch.pageX){
        engine.player.move('left');
        return;
    }
    if( engine.getInnerWidth() * 1 / 3 <= touch.pageX && engine.getInnerWidth() * 2 / 3 >= touch.pageX){
        engine.player.move('turn');
        return;
    }
    engine.player.move('right');
};



