engine.fps = {};

engine.fps.fpsouthnd = document.getElementById('fps');
engine.fps.fps = 0;
engine.fps.lastTick = new Date;
engine.fps.skip


engine.fps.update = function(){
    engine.fps.fps = 1000 / (new Date - engine.fps.lastTick);
    engine.fps.lastTick = new Date;
}

engine.fps.draw = function(){
    if(engine.fallDownTimeLeft == engine.fallDownTime){
        engine.fps.fpsouthnd.innerHTML = 'FPS: ' + ~~engine.fps.fps;   // print a message to the output div
    }
}