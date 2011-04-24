var engine = {
    outhnd: document.getElementById('output'),
    context: null,
    fps: 100,
    secondsBetweenFrames: null,
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
engine.secondsBetweenFrames = 1000 / engine.fps;

engine.fallDownTime = 1000;
engine.fallDownTimeLeft = engine.fallDownTime;
engine.output = function(message){
    engine.outhnd.innerHTML += '<br />' + message;   // print a message to the output div
};

engine.draw = function(){
    if(engine.canvas.width != engine.getWidth(window.innerWidth, window.innerHeight)){
        engine.canvas.width = engine.canvas.height = engine.getWidth(window.innerWidth, window.innerHeight);
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

