var engine = {};   // create the engine object


engine.outhnd = document.getElementById('output');   // handle to the output div
engine.canvas = document.getElementById('canvas');   // handle to the canvas element
engine.context = engine.canvas.getContext('2d');      // handle to the canvas' drawing functions
engine.fps = 30;
engine.secondsBetweenFrames = 1000 / engine.fps;
engine.fallDownTime = 1000;
engine.fallDownTimeLeft = engine.fallDownTime;

engine.output = function(message){
    engine.outhnd.innerHTML += '<br />' + message;   // print a message to the output div
};

engine.draw = function(){
        engine.fallDownTimeLeft -= engine.secondsBetweenFrames;
        if(engine.fallDownTimeLeft <= 0){
            engine.fallDownTimeLeft = engine.fallDownTime;
            engine.player.draw();
            engine.player.move("down");
        }
        engine.player.draw();
        engine.map.draw();
        engine.fps.draw();
};

engine.start = function(){
    engine.context.translate( 0, 0 );
    engine.output('starting...');
    engine.draw();
    engine.output('done');
    engine.loop();
};

engine.loop = function(){
    setInterval(function(){
        engine.draw();
    }, engine.secondsBetweenFrames);
}