engine.input = {};

engine.input.getValue = function(key){
    switch(key){
        case 'down':
            return 40;
        case 'left':
            return 37;
        case 'right':
            return 39;
    }
};

engine.input.parseKeyboardInput = function(event){
    switch(event.keyCode){
        case engine.input.getValue('down'):
            engine.player.move('down');
            break;

        case engine.input.getValue('left'):
            engine.player.move('left');
            break;

        case engine.input.getValue('right'):
            engine.player.move('right');
            break;
    }
};

engine.input.parseTouchInput = function(event){
    var touch = event.touches[0];
    if( screen.height * 2 / 3 <= touch.pageY){
        engine.player.move('down');
        return;
    }
    if( screen.width * 1 / 3 >= touch.pageX){
        engine.player.move('left');
        return;
    }
    if( screen.width * 1 / 3 <= touch.pageX && screen.width * 2 / 3 >= touch.pageX){
        //engine.player.move('turn');
        return;
    }
    engine.player.move('right');
};


