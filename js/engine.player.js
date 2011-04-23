engine.player = {
    tileX: 7,
    tileY: 0,
    lastTileX: 0,
    lastTileY: 0,
    currentStone: [
    [0,1,0],
    [0,1,0],
    [1,1,0],
    ]
};


engine.player.move = function(direction){
    this.lastTileX = this.tileX;
    this.lastTileY = this.tileY;
    var currentStone = this.currentStone;
    var currentMap = engine.map.currentMap;
    
    switch(direction){
        
        case 'right':
            if(!this.collide(currentStone, currentMap, 1, 0)){
                this.tileX++;
            }
            break;
        case 'left':
            if(!this.collide(currentStone, currentMap, -1, 0)){
                engine.player.tileX--;
            }
            break;
        case 'down':
            if(this.collide(currentStone, currentMap, 0, 1)){
                this.fixStone(currentStone, currentMap)
                this.createNew();
            }
            this.tileY++;
            break;
    }
}

engine.player.createNew = function(){
    engine.player.tileX = 7;
    engine.player.tileY = 0;
}

engine.player.draw = function(){
    for(var y = 0; y < engine.player.currentStone.length; y++){
        for(var x = 0; x < engine.player.currentStone[0].length; x++){
            if(engine.player.currentStone[y][x]){
                engine.context.clearRect(engine.screen.tilesX * x + engine.screen.tilesX * engine.player.lastTileX , engine.screen.tilesX * y + engine.screen.tilesX * engine.player.lastTileY, engine.screen.tilesX, engine.screen.tilesY);
            }
        }
    }
    for(var y = 0; y < engine.player.currentStone.length; y++){
        for(var x = 0; x < engine.player.currentStone[0].length; x++){
            if(engine.player.currentStone[y][x]){
                engine.context.fillStyle = "rgb(200,0,0)";
                engine.context.fillRect (engine.screen.tilesX * x + engine.screen.tilesX * engine.player.tileX , engine.screen.tilesX * y + engine.screen.tilesX * engine.player.tileY, engine.screen.tilesX, engine.screen.tilesY);
            }
        }
    }
}


/**
 * @param {Array} currentStone
 * @param {Array} currentMap
 * @param {integer} dTilesX check collision if currentStone is moved dTilesX in x-Axis
 * @param {integer} dTilesY check collision if currentStone is moved dTilesX in y-Axis
 * @returns boolean
*/
engine.player.collide = function(currentStone, currentMap, dTilesX, dTilesY){
    for(var y = 0; y < currentStone.length; y++){
        for(var x = 0; x < currentStone[0].length; x++){
            if(currentStone[y][x]){
                var newTilePosX = this.tileX + x + dTilesX;
                var newTilePosY = this.tileY + y + dTilesY;
                //collision border
                if(  newTilePosX >= currentMap[0].length || //collision right border
                    newTilePosX  < 0 || //collision left border
                    newTilePosY >= currentMap.length ){ //collision bottom border
                    return true;
                }
                //collision check horizontal with map
                if(currentMap[newTilePosY][newTilePosX]){
                    return true;
                }
            }
        }
    }
    return false;
}

/**
 * @param {Array} currentStone
 * @param {Array} currentMap
*/
engine.player.fixStone = function(currentStone, currentMap){
    for(var y = 0; y < currentStone.length; y++){
        for(var x = 0; x < currentStone[0].length; x++){
            if(currentStone[y][x]){
                var newTilePosX = this.tileX + x;
                var newTilePosY = this.tileY + y;

                currentMap[newTilePosY][newTilePosX] = 1;
            }
        }
    }
}


