Tetris.Block = function(shape, tileX, tileY){
    this.tileX = tileX;
    this.tileY = tileY;
    this.lastTileX = 0;
    this.lastTileY = 0;
    this.shape = shape;
    
    //tetris.blockfactory.turnStone = function(stone, direction){
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

