var Map = require('Tetris.Map').Map;
var Player = require('Tetris.Player').Player;
var BlockFactory = require('Tetris.Block.Factory').BlockFactory;
var BlockElements = require('Tetris.Block.Elements').BlockElements;
var Timer = require('Tetris.Timer').Timer;

var tetris = {};
var Tetris = {
    game: null
};

/**
 * Tetris Main
 *
 * @returns
 */
var Tetris = function(){
    this.map;
    this.player;
    this.timer;
    this.screen;
    
    this.tileXStartPosition = 7;
    this.tileYStartPosition = 0;
    
    this.init = function(){
        this.map = new Map(16, 16);
        this.map.init();
        this.player = new Player(this, this.map);
        this.player.init();
        this.timer = new Timer(this, 1000, function(game){
            game.player.input = "DOWN";
        });
    }
    
    this.update= function(){
        this.timer.update();
        this.player.update();
    }
    
    this.draw = function(){
        this.map.draw();
        this.player.draw();
    }

   /**
   * Create a new block
   *
   * @returns {Tetris.Block}
   */
    this.createBlock = function(){
        var blockFactory = new BlockFactory();
        return blockFactory.create(BlockElements, this.tileXStartPosition, this.tileYStartPosition);
    }
    
    this.init();
}

exports.Tetris = Tetris;



