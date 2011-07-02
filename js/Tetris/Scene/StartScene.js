if(typeof require == 'function'){
    var gamejs = require('gamejs');
    var GameScene = require('Tetris/Scene/GameScene').GameScene;
}

var StartScene = function(director) {

    this.handleEvent = function(event) {
        if (event.type === gamejs.event.MOUSE_UP) {
            director.replaceScene(new GameScene(director));
        }
    };

    this.draw = function(display) {
        display.blit(startPicture,[0,0],[0,20]);
        
        var title = new gamejs.font.Font('40px monospace');
        var tetrisSurface = title.render('Tetris');
        display.blit(tetrisSurface, [70,100]);
    };

    var startPicture = gamejs.image.load('img/icon.png');
    return this;
};

exports.StartScene = StartScene;