if(typeof require == 'function'){
    var gamejs = require('gamejs');
    var screen = require('Tetris/screen').screen;
}

/**
 * Map
 *
 * @param {Number} tilesX number of tiles in x direction 
 * @param {Number} tilesY number of tiles in y direction
 * @returns
 */
var Map = function(tilesX, tilesY){
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
    
    this.draw = function(display){
        for(var y = 0; y < this.shape.length; y++){
            for(var x = 0; x < this.shape[0].length; x++){
                if(this.shape[y][x]){
                    var rect = new gamejs.Rect(
                        screen.tilesX * x, 
                        screen.tilesX * y, 
                        screen.tilesX, 
                        screen.tilesY
                        );
                    gamejs.draw.rect(display, '#ff0000', rect, 0);
                }
            }
        }
    }

    this.update = function(){
    
    } 
    
    /**
   * Fixes a block in the map
   *
   * @param {Block} block
   */
    this.fixStone = function(block){
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
    this.rowFull = function(tileYPos){
        for(var x = 0; x < this.shape[0].length; x++){
            if(!this.shape[tileYPos][x]){
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
    this.rowDelete = function(tileYPos){
        this.shape.splice(tileYPos,1);
    }

    /**
   * Delete all full rows in map
   *
   * @return {void}
   */
    this.reduceLines = function(){
        for(var y = 0; y < this.shape.length; y++){
            if(this.rowFull(y)){
                this.rowDelete(y);
                this.shape.unshift([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
            }
        }
    }
}

exports.Map = Map;


