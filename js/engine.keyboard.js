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
    if(event.touches){
	    var touch = event.touches[0];
		//AppMobi.notification.alert("Touch x:" + touch.pageX + ", y:" + touch.pageY,"title","buttontext");
		event.keyCode = engine.keyboard.getValue('down');
	}
    if(event.keyCode){
		//AppMobi.notification.alert("keyCode: " + event.keyCode);
	}

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


