var gamejs = require('gamejs');
var screen = require('./screen').screen;

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
    this.shapeSurface = [[]];
    this.mapSurface;
    this.isUpdated = true;
    
    this.init = function(){
        for (var y = 0; y < this.tilesY ; y++) {
            this.shape[y] = [];
            this.shapeSurface[y] = [];
            for (var x = 0; x < this.tilesX; x++) {
                this.shape[y][x] = 0;
                this.shapeSurface[y][x] = undefined;
            }
    
        }
    }
    
    this.draw = function(display){
        if(this.isUpdated){
            this.mapSurface = new gamejs.graphics.Surface([screen.screen_width, screen.screen_height]);
            for(var y = 0; y < this.shape.length; y++){
                for(var x = 0; x < this.shape[0].length; x++){
                    if(this.shape[y][x]){
                        var rect = new gamejs.Rect(
                            screen.tilesX * x, 
                            screen.tilesX * y, 
                            screen.tilesX, 
                            screen.tilesY
                            );
                        this.mapSurface.blit(this.shapeSurface[y][x], rect);
                    }
                }
            }
        }
        display.blit(this.mapSurface);
        this.isUpdated = false;
    }

    this.update = function(){
    
    } 
    
    /**
   * Fixes a block in the map
   *
   * @param {Block} block
   */
    this.fixStone = function(block){
        this.isUpdated = true;
        for(var y = 0; y < block.shape.length; y++){
            for(var x = 0; x < block.shape[0].length; x++){
                if(block.shape[y][x]){
                    var newTilePosX = block.tileX + x;
                    var newTilePosY = block.tileY + y;
                    this.shape[newTilePosY][newTilePosX] = 1;
                    this.shapeSurface[newTilePosY][newTilePosX] = block.shapeSurface;
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
        this.isUpdated = true;
        this.shape.splice(tileYPos,1);
        this.shapeSurface.splice(tileYPos,1);
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
                this.shapeSurface.unshift([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
            }
        }
    }
    
    /**
   * Check if map is full
   *
   * @return {boolean}
   */
    this.mapFull = function(){
        var y = 1;
        for(var x = 0; x < this.shape[0].length; x++){
            if(this.shape[y][x]){
                return true;
            }
        }
        return false;
    }
}

exports.Map = Map;


