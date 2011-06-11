var engine = {
    outhnd: document.getElementById('output'),
    context: null,
    fps: 60,
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

engine.canvas = {
    width: engine.getWidth(),
    height: engine.getWidth()
};
engine.canvas = document.getElementById('canvas');

engine.context = engine.canvas.getContext('2d');

engine.fallDownTime = 1000;
engine.fallDownTimeLeft = engine.fallDownTime;
engine.output = function(message){
    engine.outhnd.innerHTML += '<br />' + message;   // print a message to the output div
};

engine.start = function(){
    engine.screen.init();
    engine.player.init(tetris.blockfactory);
    engine.context.translate( 0, 0 );
    engine._intervalId = setInterval(engine.loop, 0);
};

//engine loop implemented from tutorial http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/index.html
engine.loop = (function() {
    var loops = 0, skipTicks = 1000 / engine.fps,
    maxFrameSkip = 10,
    nextGameTick = (new Date).getTime();
  
    return function() {
        loops = 0;
    
        while ((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
            engine.update();
            nextGameTick += skipTicks;
            loops++;
        }
    
        if(loops) engine.draw();
    };
})();

engine.draw = function(){
    engine.fallDownTimeLeft -= new Date - engine.lastTick;
    engine.lastTick = new Date;
    engine.screen.draw();
    engine.player.draw();
    engine.map.draw();
};

engine.update = function(){
    if(engine.canvas.width != engine.getWidth(window.innerWidth, window.innerHeight)){
        engine.canvas.width = engine.canvas.height = engine.getWidth(window.innerWidth, window.innerHeight);
        engine.screen.init();
    }
    if(engine.fallDownTimeLeft <= 0){
        engine.fallDownTimeLeft = engine.fallDownTime;
        engine.player.move("down");
    }
    engine.player.update();
}