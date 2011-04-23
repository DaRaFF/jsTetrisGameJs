engine.screen = {
    width: 0,
    height: 0,
    tileCountX: 16,
    tileCountY: 16,
    tilesX: 0,
    tilesY: 0
};

engine.screen.init = function(){
    engine.screen.width  =  engine.canvas.width;
    engine.screen.height = engine.canvas.height;  

    engine.screen.tilesX = engine.canvas.width / engine.screen.tileCountX;   
    engine.screen.tilesY = engine.canvas.height / engine.screen.tileCountY;    
}