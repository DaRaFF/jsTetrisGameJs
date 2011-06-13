var engine = {
    outhnd: document.getElementById('output'),
    context: null,
    lastTick: new Date,
    getWidth: function(realWidth, realHeight){
        var smaller  = Math.min(realWidth,realHeight);
        return (smaller > 1024 ? 1024 : smaller);
    },
    getInnerHeight: function(){
        return window.innerHeight;
    },
    getInnerWidth: function(){
        return window.innerWidth;
    }
}

engine.config = {
    inputCommands: Tetris.command,
    inputCallback: null, //Tetris.game.player - call inputCallback.input
    fps: 60
}

engine.canvas = {
    width: engine.getWidth(),
    height: engine.getWidth()
};
engine.canvas = document.getElementById('canvas');

engine.context = engine.canvas.getContext('2d');

engine.start = function(){
    Tetris.game = new Tetris();
    engine.config.inputCallback = Tetris.game.player;
    engine.screen.init();
    engine.context.translate( 0, 0 );
    engine._intervalId = setInterval(engine.loop, 0);
};

engine.draw = function(){
    engine.screen.draw();
    Tetris.game.draw();
};

engine.update = function(){
    if(engine.canvas.width != engine.getWidth(window.innerWidth, window.innerHeight)){
        engine.canvas.width = engine.canvas.height = engine.getWidth(window.innerWidth, window.innerHeight);
        engine.screen.init();
    }
    Tetris.game.update();
}
