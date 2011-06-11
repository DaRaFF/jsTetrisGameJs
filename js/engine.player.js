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
 * Collision detection between a stone and the map if the stone is moving in x,y axis
 *
 * @param {Tetris.Block} currentBlock
 * @param {Array} currentMap
 * @param {integer} dTilesX check collision if currentStone is moved dTilesX in x-Axis
 * @param {integer} dTilesY check collision if currentStone is moved dTilesX in y-Axis
 * @returns boolean
 */
engine.player.collide = function(currentBlock, currentMap, dTilesX, dTilesY){
    for(var y = 0; y < currentBlock.shape.length; y++){
        for(var x = 0; x < currentBlock.shape[0].length; x++){
            if(currentBlock.shape[y][x]){
                var newTilePosX = this.tileX + x + dTilesX;
                var newTilePosY = this.tileY + y + dTilesY;
                //collision border
                if(  newTilePosX >= currentMap[0].length || //collision right border
                    newTilePosX  < 0 || //collision left border
                    newTilePosY >= currentMap.length ){ //collision bottom border
                    return true;
                }
                //collision check horizontal with map
                if(currentMap[newTilePosY][newTilePosX]){
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
                engine.context.fillRect (engine.screen.tilesX * x + engine.screen.tilesX * engine.player.tileX , engine.screen.tilesX * y + engine.screen.tilesX * engine.player.tileY, engine.screen.tilesX, engine.screen.tilesY);
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
                this.tileX++;
            }
            break;
        case tetris.command.LEFT:
            if(!this.collide(this.currentStone, currentMap, -1, 0)){
                this.tileX--;
            }
            break;
        case tetris.command.DOWN:
            if(this.collide(this.currentStone, currentMap, 0, 1)){
                engine.map.fixStone(this.currentStone, currentMap);
                engine.map.reduceLines();
                this.createNewStone();
            }
            this.tileY++;
            break;
        case tetris.command.TURN:
            var test = new Tetris.Block(Tetris.Block.Elements, this.tileX, this.tileY);
            var turnedStone = test.turn(this.currentStone, 'right');
            if(!this.collide(turnedStone, currentMap, 0, 0)){
                this.currentStone = test.turn(this.currentStone, 'right');
            }
            break;
        default:
            break;
    }
    this.lastInput = null;
}