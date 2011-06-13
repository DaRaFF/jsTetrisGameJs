//engine loop implemented from tutorial http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/index.html
engine.loop = (function() {
    var loops = 0, skipTicks = 1000 / engine.config.fps,
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