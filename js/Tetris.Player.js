/**
 * Player
 * 
 * @param {Tetris} game The game
 * @param {Tetris.Map} map
 *
 * @returns
 */
Tetris.Player = function(game, map){
    var that = this;
    this.game = game;
    this.map = map;
    this.currentBlock;
    this.nextBlock;
    this.level = 0;
    this.lines = 0;
    this.score = 0;
    this.input = null;
    
    this.init = function(){
        that.currentBlock = that.game.createBlock();
        that.nextBlock = that.game.createBlock();
    }
    
    this.update = function(){
        switch(this.input){
        
            case Tetris.command.RIGHT:
                if(!this.collide(this.currentStone, currentMap, 1, 0)){
                    engine.player.currentStone.tileX++;
                }
                break;
            case Tetris.command.LEFT:
                if(!this.collide(this.currentStone, currentMap, -1, 0)){
                    engine.player.currentStone.tileX--;
                }
                break;
            case Tetris.command.DOWN:
                if(that.block.collide(that.map, 0, 1)){
                    //                    that.map.fixStone(engine.player.currentStone, currentMap);
                    //                    that.map.reduceLines();
                    that.createNewStone();
                }
                that.block.tileY++;
                break;
            case Tetris.command.TURN:
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
    
    this.draw = function(){
        
    }
}


