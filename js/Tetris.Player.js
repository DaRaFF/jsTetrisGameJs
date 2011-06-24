/**
 * Player
 * 
 * @param {Tetris} game The game
 * @param {Tetris.Map} map
 *
 * @returns
 */
var Player = function(game, map){
    this.game = game;
    this.map = map;
    this.currentBlock;
    this.nextBlock;
    this.level = 0;
    this.lines = 0;
    this.score = 0;
    this.input = null;
    
    this.init = function(){
        this.currentBlock = this.game.createBlock();
        this.nextBlock = this.game.createBlock();
    }
    
    this.update = function(){
        switch(this.input){
            case Tetris.command.RIGHT:
                if(!this.currentBlock.collide(this.map, 1, 0)){
                    this.currentBlock.tileX++;
                }
                break;
            case Tetris.command.LEFT:
                if(!this.currentBlock.collide(this.map, -1, 0)){
                    this.currentBlock.tileX--;
                }
                break;
            case Tetris.command.DOWN:
                if(this.currentBlock.collide(this.map, 0, 1)){
                    this.map.fixStone(this.currentBlock, this.map);
                    this.map.reduceLines();
                    this.currentBlock = this.nextBlock;
                    this.nextBlock = this.game.createBlock();
                }
                this.currentBlock.tileY++;
                break;
            case Tetris.command.TURN:
                this.currentBlock.turn('right');
                if(this.currentBlock.collide(this.map, 0, 0)){
                    this.currentBlock.turn('left');
                }
                break;
            default:
                break;
        }
        this.input = null;
    }
    
    this.draw = function(){
        this.currentBlock.draw(); 
    }
}

exports.Player = Player;


