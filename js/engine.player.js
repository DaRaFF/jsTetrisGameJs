engine.player = {};

engine.player.tileX = 8;
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
    engine.player.tileX = 8;
    engine.player.tileY = 0;
}

engine.player.draw = function(){
    engine.context.clearRect(engine.screen.tilesX * engine.player.lastTileX, engine.screen.tilesX * engine.player.lastTileY, engine.screen.tilesX, engine.screen.tilesY);
    engine.context.fillStyle = "rgb(200,0,0)";
    engine.context.fillRect (engine.screen.tilesX * engine.player.tileX, engine.screen.tilesX * engine.player.tileY, engine.screen.tilesX, engine.screen.tilesY);
}


