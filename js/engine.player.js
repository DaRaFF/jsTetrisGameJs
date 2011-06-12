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
 * Create a new stone
 *
 * @returns {void}
 */
engine.player.createNewStone = function(){
    this.currentStone = this.nextStone;
    this.nextStone = this.blockFactory.create(Tetris.Block.Elements, this.tileXStartPosition, this.tileYStartPosition);
    engine.player.tileX = engine.player.tileXStartPosition;
    engine.player.tileY = engine.player.tileYStartPosition;
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
 * Collision detection between a block and the map if the block is moving in x,y axis
 *
 * @param {Tetris.Block} block
 * @param {Tetris.Map} map
 * @param {integer} dTilesX check collision if block is moved dTilesX in x-Axis
 * @param {integer} dTilesY check collision if block is moved dTilesX in y-Axis
 * @returns boolean
 */
engine.player.collide = function(block, map, dTilesX, dTilesY){
    for(var y = 0; y < block.shape.length; y++){
        for(var x = 0; x < block.shape[0].length; x++){
            if(block.shape[y][x]){
                var newTilePosX = block.tileX + x + dTilesX;
                var newTilePosY = block.tileY + y + dTilesY;
                //collision border
                if(  newTilePosX >= map.shape[0].length || //collision right border
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
    this.lastTileX = this.tileX;
    this.lastTileY = this.tileY;
    this.lastStone = this.currentStone;
    var currentMap = engine.map.currentMap;
    
    switch(this.lastInput){
        
        case tetris.command.RIGHT:
            if(!this.collide(this.currentStone, currentMap, 1, 0)){
                engine.player.currentStone.tileX++;
            }
            break;
        case tetris.command.LEFT:
            if(!this.collide(this.currentStone, currentMap, -1, 0)){
                engine.player.currentStone.tileX--;
            }
            break;
        case tetris.command.DOWN:
            if(this.collide(engine.player.currentStone, currentMap, 0, 1)){
                engine.map.fixStone(engine.player.currentStone, currentMap);
                engine.map.reduceLines();
                engine.player.createNewStone();
            }
            engine.player.currentStone.tileY++;
            break;
        case tetris.command.TURN:
            engine.player.currentStone.turn('right');
            if(engine.player.collide(engine.player.currentStone, currentMap, 0, 0)){
               engine.player.currentStone.turn('left');
            }
            break;
        default:
            break;
    }
    this.lastInput = null;
}