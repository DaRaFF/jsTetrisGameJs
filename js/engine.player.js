engine.player = {};

engine.player.currentStone = [
    [0,1,0],
    [0,1,0],
    [1,1,0],
    ]

engine.player.tileX = 7;
engine.player.tileY = 0;

engine.player.lastTileX = 0;
engine.player.lastTileY = 0;

engine.player.move = function(direction){
    engine.player.lastTileX = engine.player.tileX;
    engine.player.lastTileY = engine.player.tileY;
    
    switch(direction){
        case 'right':
            if(!(engine.screen.tileCountX === engine.player.tileX + 1)){
                engine.player.tileX++;
            }
            break;
        case 'left':
            if(!(engine.player.tileX === 0)){
                engine.player.tileX--;
            }
            break;
        case 'down':
            if(engine.player.tileY + 1 === engine.screen.tileCountY){ // verlassen bildschirm unten
                engine.map.currentMap[engine.player.tileY][engine.player.tileX] = 1; // stein festsetzen
                engine.player.createNew();
                break;
            }
            if(engine.map.currentMap[engine.player.tileY + 1][engine.player.tileX] === 0){ // test kollision mit map
                engine.player.tileY++;
            }
            else{
                engine.map.currentMap[engine.player.tileY][engine.player.tileX] = 1; // stein festsetzen
                engine.player.createNew();
            }
            break;
    }
}

engine.player.createNew = function(){
    engine.player.tileX = 7;
    engine.player.tileY = 0;
}

engine.player.draw = function(){
    engine.context.clearRect(engine.screen.tilesX * engine.player.lastTileX, engine.screen.tilesX * engine.player.lastTileY, engine.screen.tilesX, engine.screen.tilesY);
    engine.context.fillStyle = "rgb(200,0,0)";
    engine.context.fillRect (engine.screen.tilesX * engine.player.tileX, engine.screen.tilesX * engine.player.tileY, engine.screen.tilesX, engine.screen.tilesY);
    //engine.player.drawStone();
}

engine.player.drawStone = function(){
    for(var i = 0; i < engine.player.currentStone.length; i++){
        for(var j = 0; j < engine.player.currentStone[0].length; j++){
            if(engine.player.currentStone[i][j]){
                engine.context.clearRect(engine.screen.tilesX * j + engine.screen.tilesX * engine.player.lastTileX , engine.screen.tilesX * i + engine.screen.tilesX * engine.player.lastTileY, engine.screen.tilesX, engine.screen.tilesY);
            }
        }
    }
    for(var i = 0; i < engine.player.currentStone.length; i++){
        for(var j = 0; j < engine.player.currentStone[0].length; j++){
            if(engine.player.currentStone[i][j]){
                engine.context.fillStyle = "rgb(200,0,0)";
                engine.context.fillRect (engine.screen.tilesX * j + engine.screen.tilesX * engine.player.tileX , engine.screen.tilesX * i + engine.screen.tilesX * engine.player.tileY, engine.screen.tilesX, engine.screen.tilesY);
            }
        }
    }
}
