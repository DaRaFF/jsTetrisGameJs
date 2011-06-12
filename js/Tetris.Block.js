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
Tetris.Block = function(shape, tileX, tileY){
    /** The x position of the block on the map in tiles
    * @type Number
    */
    this.tileX = tileX;
    /** The y position of the block on the map in tiles
    * @type Number
    */
    this.tileY = tileY;
    this.lastTileX = 0;
    this.lastTileY = 0;
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
}
