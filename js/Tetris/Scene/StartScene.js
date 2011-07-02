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
        display.blit(startPicture);
    };

    var startPicture = gamejs.image.load('img/icon.png');
    return this;
};

exports.StartScene = StartScene;