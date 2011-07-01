if(typeof require == 'function'){
    var gamejs = require('gamejs');
    var screen = require('Tetris/screen').screen;
}

/**
 * Block
 *
 * @param {Array} shape The shape of the block in tiles
 * 
 * Example:
 * [ 
 *   [0,1,0],
 *   [0,1,0],
 *   [1,1,0],    
 * ]
 * @param {Number} tileX
 * @param {Number} tileY
 * @returns
 */
var Block = function(shape, tileX, tileY){
    var that = this;
    /** The x position of the block on the map in tiles
    * @type Number
    */
    this.tileX = tileX;
    /** The y position of the block on the map in tiles
    * @type Number
    */
    this.tileY = tileY;
    /** 
    * The shape of the block in tiles
    * 
    * Example:
    * [ 
    *   [0,1,0],
    *   [0,1,0],
    *   [1,1,0],    
    * ]
    * @type Array
    */
    this.shape = shape;
    
    this.update = function(){
        
    }
    
    /**
   * Block rendering
   *
   * @return {void} 
   */
    this.draw = function(){
        for(var y = 0; y < that.shape.length; y++){
            for(var x = 0; x < that.shape[0].length; x++){
                if(that.shape[y][x]){
                    var display = gamejs.display.getSurface();
                    var rect = new gamejs.Rect(
                        screen.tilesX * x + screen.tilesX * that.tileX, 
                        screen.tilesY * y + screen.tilesY * that.tileY, 
                        screen.tilesX, 
                        screen.tilesY
                    );
                    gamejs.draw.rect(display, '#ff0000', rect, 0);
                }
            }
        }
    }
    
    /**
    * Turns the shape in given direction
    *
    * @param {String} direction 'right'|'left'
    * @return {void}
    */
    this.turn = function(direction){
        var oldShape = this.shape;
        var newShape = [];
        switch (oldShape.length) {
            case 2:
                newShape = [[],[]];
                break;
            case 3:
                newShape = [[],[],[]];
                break;
            case 4:
                newShape = [[],[],[],[]];
                break;
            default:
                break;
        }

        var newTilePosX;
        var newTilePosY;
    
        for(var y = 0; y < oldShape.length; y++){
            for(var x = 0; x < oldShape[0].length; x++){
                if(direction === 'right'){
                    newTilePosX = oldShape.length - 1 - y;
                    newTilePosY = x;
                    newShape[newTilePosY][newTilePosX] = oldShape[y][x];
                }
                if(direction === 'left'){
                    newTilePosX = y;
                    newTilePosY = oldShape[0].length - 1 - x;
                    newShape[newTilePosY][newTilePosX] = oldShape[y][x];
                }
            }
        }
        this.shape = newShape;
    }
    
    /**
   * Collision detection between block and the map if the block is moving in x,y axis
   *
   * @param {Map} map
   * @param {integer} dTilesX check collision if block is moved dTilesX in x-Axis
   * @param {integer} dTilesY check collision if block is moved dTilesX in y-Axis
   * @returns boolean
   */
    this.collide = function(map, dTilesX, dTilesY){
        for(var y = 0; y < that.shape.length; y++){
            for(var x = 0; x < that.shape[0].length; x++){
                if(that.shape[y][x]){
                    var newTilePosX = that.tileX + x + dTilesX;
                    var newTilePosY = that.tileY + y + dTilesY;
                    //collision border
                    if( newTilePosX >= map.shape[0].length || //collision right border
                        newTilePosX  < 0 || //collision left border
                        newTilePosY >= map.shape.length ){ //collision bottom border
                        return true;
                    }
                    //collision check horizontal with map
                    if(map.shape[newTilePosY][newTilePosX]){
                        return true;
                    }
                }
            }
        }
        return false;
    }
}

exports.Block = Block;
