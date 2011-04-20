var engine = {
    canvas: document.getElementById('canvas'),
    outhnd: document.getElementById('output'),
    context: null,
    fps: 100,
    secondsBetweenFrames: null,
    getWidth: function(){
        if(screen.width > screen.height){
            if(screen.height > 1024){
                return 1024;
            }
            return screen.height;
        
        }
        else{
            if(screen.width > 1024){
                return 1024;
            }
            return screen.width;       
        }
    }
}

engine.canvas.width = engine.getWidth();
engine.canvas.height = engine.getWidth();
engine.context = engine.canvas.getContext('2d');
engine.secondsBetweenFrames = 1000 / engine.fps;

engine.fallDownTime = 1000;
engine.fallDownTimeLeft = engine.fallDownTime;
engine.output = function(message){
    engine.outhnd.innerHTML += '<br />' + message;   // print a message to the output div
};

engine.draw = function(){
    if(engine.canvas.width != engine.getWidth()){
        engine.canvas.width = engine.canvas.height = engine.getWidth();
        engine.screen.init();
    }
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
    engine.screen.init();
    engine.context.translate( 0, 0 );
    engine.draw();
    engine.loop();
};

engine.loop = function(){
    setInterval(function(){
        engine.draw();
    }, engine.secondsBetweenFrames);
}
