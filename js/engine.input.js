engine.input = {};

engine.input.parseKeyboardInput = function(event){
    var command = Tetris.command;
    var player = Tetris.game.player; 
    switch(event.keyCode){
        case command.DOWN:
            player.input = command.DOWN;
            break;
        case command.LEFT:
            player.input = command.LEFT;
            break;
        case command.RIGHT:
            player.input = command.RIGHT;
            break;
        case command.TURN:
            player.input = command.TURN;
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



