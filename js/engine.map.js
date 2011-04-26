engine.map = {
    currentMap:  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
};


/**
 * Fix a stone in the map
 *
 * @param {Array} currentStone
 * @param {Array} currentMap
 */
engine.map.fixStone = function(currentStone, currentMap){
    for(var y = 0; y < currentStone.length; y++){
        for(var x = 0; x < currentStone[0].length; x++){
            if(currentStone[y][x]){
                var newTilePosX = engine.player.tileX + x;
                var newTilePosY = engine.player.tileY + y;

                currentMap[newTilePosY][newTilePosX] = 1;
            }
        }
    }
}

/**
 * Check if row is full
 *
 * @param {integer} tileYPos row in map to check (0 - tileCountY)
 * @return {boolean}
 */
engine.map.rowFull = function(tileYPos){
    for(var x = 0; x < this.currentMap[0].length; x++){
        if(!this.currentMap[tileYPos][x]){
            return false;
        }
    }
    return true;
}

/**
 * Delete row
 *
 * @param {integer} row in map (0 - tileCountY)
 * @return {void}
 */
engine.map.rowDelete = function(tileYPos){
    this.currentMap.splice(tileYPos,1);
}

/**
 * Delete all full rows in map
 *
 * @return {void}
 */
engine.map.reduceLines = function(){
    for(var y = 0; y < this.currentMap.length; y++){
        if(this.rowFull(y)){
           this.rowDelete(y);
           this.currentMap.unshift([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
        }
    }
}

engine.map.draw = function(){
    for(var y = 0; y < this.currentMap.length; y++){
        for(var x = 0; x < this.currentMap[0].length; x++){
            if(this.currentMap[y][x]){
                engine.context.fillStyle = "rgb(200,0,0)";
                engine.context.fillRect (engine.screen.tilesX * x, engine.screen.tilesX * y, engine.screen.tilesX, engine.screen.tilesY);
            }
        }
    }
}

engine.map.update = function(){
    
    }


