if(typeof require == 'function'){
    var gamejs = require('gamejs');
    var GameScene = require('Tetris/Scene/GameScene').GameScene;
    var StartScene = require('Tetris/Scene/StartScene').StartScene;
    var screen = require('Tetris/screen').screen;
}

var EndScene = function(director) {

    this.handleEvent = function(event) {
        if (event.key === gamejs.event.K_y) {
            var GameScene = require('Tetris/Scene/GameScene').GameScene;
            director.replaceScene(new GameScene(director));
        }
        if (event.key === gamejs.event.K_n) {
            var StartScene = require('Tetris/Scene/StartScene').StartScene;
            director.replaceScene(new StartScene(director));
        }
    };

    this.draw = function(display) {
        display.clear();
        
        var title = new gamejs.font.Font('40px monospace');
        var tetrisSurface = title.render('Game Over');
        display.blit(tetrisSurface, [70,100]);
        
        var again = new gamejs.font.Font('20px monospace');
        var againSurface = again.render('Try again? (Y/N)');
        display.blit(againSurface, [70,140]);
    };

    return this;
};

exports.EndScene = EndScene;