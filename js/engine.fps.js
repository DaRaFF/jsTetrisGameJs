engine.fps = {};

engine.fps.fpsouthnd = document.getElementById('fps');
engine.fps.f = 0;
engine.fps.s = new Date;


engine.fps.draw = function(){
    var fps = ++engine.fps.f / ( ((+new Date) - engine.fps.s) / 1000 );
    engine.fps.fpsouthnd.innerHTML = 'FPS: ' + ~~fps;   // print a message to the output div
}