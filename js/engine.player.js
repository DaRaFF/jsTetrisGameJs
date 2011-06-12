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
 * Payer rendering
 *
 * @return {void} 
 */
engine.player.draw = function(){
    for(var y = 0; y < engine.player.currentStone.shape.length; y++){
        for(var x = 0; x < engine.player.currentStone.shape[0].length; x++){
            if(engine.player.currentStone.shape[y][x]){
                engine.context.fillStyle = "rgb(200,0,0)";
                engine.context.fillRect (
                    engine.screen.tilesX * x + engine.screen.tilesX * engine.player.currentStone.tileX , 
                    engine.screen.tilesX * y + engine.screen.tilesX * engine.player.currentStone.tileY, 
                    engine.screen.tilesX, engine.screen.tilesY
                    );
            }
        }
    }
}

/**
 * Update Player logic
 *
 * @return {void} 
 */
engine.player.update = function(){

}