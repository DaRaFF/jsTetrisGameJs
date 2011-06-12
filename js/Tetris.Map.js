/**
 * Map
 *
 * @param {Number} tilesX number of tiles in x direction 
 * @param {Number} tilesY number of tiles in y direction
 * @returns
 */
Tetris.Map = function(tilesX, tilesY){
    this.tilesX = tilesX;
    this.tilesY = tilesY;
    this.shape = [[]];
    
    this.init = function(){
        for (var y = 0; y < this.tilesY ; y++) {
            this.shape[y] = [];
            for (var x = 0; x < this.tilesX; x++) {
                this.shape[y][x] = 0;
            }
    
        }
    }
    
    this.draw = function(){
        for(var y = 0; y < this.shape.length; y++){
            for(var x = 0; x < this.shape[0].length; x++){
                if(this.shape[y][x]){
                    engine.context.fillStyle = "rgb(200,0,0)";
                    engine.context.fillRect (engine.screen.tilesX * x, engine.screen.tilesX * y, engine.screen.tilesX, engine.screen.tilesY);
                }
            }
        }
    }

    this.update = function(){
    
    } 
    
    /**
   * Fixes a block in the map
   *
   * @param {Tetris.Block} block
   */
    engine.map.fixStone = function(block){
        for(var y = 0; y < block.shape.length; y++){
            for(var x = 0; x < block.shape[0].length; x++){
                if(block.shape[y][x]){
                    var newTilePosX = block.tileX + x;
                    var newTilePosY = block.tileY + y;
                    this.shape[newTilePosY][newTilePosX] = 1;
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
}


