engine.keyboard = {};   

engine.keyboard.getValue = function(key){
    switch(key){
        case 'down':
            return 40;
        case 'left':
            return 37;
        case 'right':
            return 39;
    }
};

engine.keyboard.parseInput = function(event){
    switch(event.keyCode){
        case engine.keyboard.getValue('down'):
            engine.player.move('down');
            break;

        case engine.keyboard.getValue('left'):
            engine.player.move('left');
            break;

        case engine.keyboard.getValue('right'):
            engine.player.move('right');
            break;
    }
};


