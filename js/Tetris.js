var tetris = {};
var Tetris = {
    game: null
};

/**
 * Tetris Main
 *
 * @returns
 */
Tetris = function(){
    var that = this;
    this.map;
    this.player;
    
    this.tileXStartPosition = 7;
    this.tileYStartPosition = 0;
    
    this.init = function(){
        that.map = new Tetris.Map(16, 16);
        that.map.init();
        that.player = new Tetris.Player(that, that.map);
        that.player.init();
    }
    
    this.update= function(){
        that.player.update();
    }
    
    this.draw = function(){
        that.map.draw();
        that.player.draw();
    }

   /**
   * Create a new block
   *
   * @returns {Tetris.Block}
   */
    this.createBlock = function(){
        var blockFactory = new Tetris.Block.Factory();
        return blockFactory.create(Tetris.Block.Elements, that.tileXStartPosition, that.tileYStartPosition);
    }
    
    that.init();
}



