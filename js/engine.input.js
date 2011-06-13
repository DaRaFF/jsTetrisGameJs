engine.input = {};

engine.input.parseKeyboardInput = function(event){
    var command = engine.config.inputCommands;
    var callback = engine.config.inputCallback; 
    switch(event.keyCode){
        case command.DOWN:
            callback.input = command.DOWN;
            break;
        case command.LEFT:
            callback.input = command.LEFT;
            break;
        case command.RIGHT:
            callback.input = command.RIGHT;
            break;
        case command.TURN:
            callback.input = command.TURN;
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



