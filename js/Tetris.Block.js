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
    * Turns the Block in given direction
    *
    * @param {Tetris.Block} block
    * @param {String} direction 'right'|'left'
    * @return {Tetris.Block} turned Block
    */
    this.turn = function(block, direction){
        var turnedStone = [];
        switch (block.length) {
            case 2:
                turnedStone = [[],[]];
                break;
            case 3:
                turnedStone = [[],[],[]];
                break;
            case 4:
                turnedStone = [[],[],[],[]];
                break;
            default:
                break;
        }

        var newTilePosX;
        var newTilePosY;
    
        for(var y = 0; y < block.length; y++){
            for(var x = 0; x < block[0].length; x++){
                if(direction === 'right'){
                    newTilePosX = block.length - 1 - y;
                    newTilePosY = x;
                    turnedStone[newTilePosY][newTilePosX] = block[y][x];
                }
                if(direction === 'left'){
                    newTilePosX = y;
                    newTilePosY = block[0].length - 1 - x;
                    turnedStone[newTilePosY][newTilePosX] = block[y][x];
                }
            }
        }
        return turnedStone;
    }
}
