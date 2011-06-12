engine.player = {
    tileX: null,
    tileY: null,
    tileXStartPosition: 7,
    tileYStartPosition: 0,
    lastTileX: 0,
    lastTileY: 0,
    lastInput: null,
    nextStone: null,
    currentStone: null,
    lastStone: null,
    blockfactory: null
};

/**
 * initialisation of the Player
 * 
 * @param {Tetris.Block.Factory} blockFactory for block handling
 * @returns {void}
 */
engine.player.init = function(blockFactory){
    this.blockFactory = blockFactory;
    this.currentStone = this.blockFactory.create(Tetris.Block.Elements, this.tileXStartPosition, this.tileYStartPosition);
    this.nextStone = this.blockFactory.create(Tetris.Block.Elements, this.tileXStartPosition, this.tileYStartPosition);
    
}

/**
 * Move the stone in a direction
 *
 * @param {tetris.command} direction the direction to move
 * @returns {void}
 */
engine.player.move = function(direction){
    this.lastInput = direction;
}


/**
 * Update Player logic
 *
 * @return {void} 
 */
engine.player.update = function(){

}