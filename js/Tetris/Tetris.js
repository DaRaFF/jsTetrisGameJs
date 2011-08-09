var gamejs = require('gamejs');
var Map = require('Tetris/Map').Map;
var Player = require('Tetris/Player').Player;
var BlockFactory = require('Tetris/BlockFactory').BlockFactory;
var BlockElements = require('Tetris/BlockElements').BlockElements;
var Timer = require('Tetris/Timer').Timer;

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
    this.sound;
    this.gameOver = false;
    
    this.tileXStartPosition = 7;
    this.tileYStartPosition = 0;
    
    this.init = function(){
//        this.sound = new Sound();
//        this.sound.init();
        this.map = new Map(16, 16);
        this.map.init();
        this.player = new Player(this, this.map);
        this.player.init();
        this.timer = new Timer(this, 5000, function(game){
            game.player.input = "DOWN";
        });
    }
    
    this.update= function(){
        this.timer.update();
        this.player.update();
        this.updateGameState();
    }
    
    this.draw = function(display){
        this.map.draw(display);
        this.player.draw(display);
    }

    /**
   * Create a new block
   *
   * @returns {Block}
   */
    this.createBlock = function(){
        var blockFactory = new BlockFactory();
        return blockFactory.create(BlockElements, this.tileXStartPosition, this.tileYStartPosition);
    }
    
    this.updateGameState = function(){
        if(this.map.mapFull()){
            this.gameOver = true;
        }
    }
    
    
    
    this.init();
}

exports.Tetris = Tetris;



